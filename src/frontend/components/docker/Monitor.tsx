import { useState } from "react";

async function heartbeat(): Promise<[boolean, boolean]> {
  let childProcessStdout = await backend.heartbeat();
  return getContainerHealthFromDockerPSOutput(childProcessStdout);
}

function getContainerHealthFromDockerPSOutput(
  stdout: string
): [boolean, boolean] {
  const nginxRunning = stdout.includes("nginx");
  const jekyllRunning = stdout.includes("jekyll");
  return [nginxRunning, jekyllRunning];
}

export const Monitor = () => {
  let [nginxRunning, setNginxRunning] = useState(false);
  let [jekyllRunning, setJekyllRunning] = useState(false);
  let [initialized, setInitialized] = useState(false);

  const onClickHeartbeat = async () => {
    let [nTmp, jTmp] = await heartbeat();
    setNginxRunning(nTmp);
    setJekyllRunning(jTmp);
  };

  // Once
  if (!initialized) {
    onClickHeartbeat().catch();
    setInitialized(true);
  }

  const status = () => {
    if (!nginxRunning && !jekyllRunning) {
      return "System down";
    } else if (nginxRunning && jekyllRunning) {
      return "Production";
    } else if (nginxRunning && !jekyllRunning) {
      return "Should not happen";
    } else if (!nginxRunning && jekyllRunning) {
      return "Local";
    }
  };

  return (
    <>
      <p>Status: {status()}</p>
      <p>Nginx Running: {nginxRunning ? "yes" : "no"}</p>
      <p>Jekyll Running: {jekyllRunning ? "yes" : "no"}</p>
      <button onClick={onClickHeartbeat}>Heartbeat</button>
    </>
  );
};
