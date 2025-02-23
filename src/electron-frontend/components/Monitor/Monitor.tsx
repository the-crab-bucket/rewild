import { useState } from "react";

async function dockerHeartbeat(): Promise<[boolean, boolean]> {
  let childProcessStdout = await backend.dockerHeartbeat();
  return getContainerHealthFromDockerPSOutput(childProcessStdout);
}

async function batteryHeartbeat(): Promise<number> {
  let childProcessStdout = await backend.batteryHeartbeat();
  return getBatteryLifeFromCommand(childProcessStdout);
}

function getContainerHealthFromDockerPSOutput(
  stdout: string
): [boolean, boolean] {
  const nginxRunning = stdout.includes("nginx");
  const jekyllRunning = stdout.includes("jekyll");
  return [nginxRunning, jekyllRunning];
}

function getBatteryLifeFromCommand(stdout: string): number {
  let percentageIndex = stdout.lastIndexOf('%');
  let percentage = stdout.substring(percentageIndex-2,percentageIndex).trim();
  return Number(percentage);
}


export const DockerMonitor = () => {
  let [nginxRunning, setNginxRunning] = useState(false);
  let [jekyllRunning, setJekyllRunning] = useState(false);
  let [initialized, setInitialized] = useState(false);
  let [battery, setBattery] = useState(50.0);

  const onClickHeartbeat = async () => {
    let [nTmp, jTmp] = await dockerHeartbeat();
    setNginxRunning(nTmp);
    setJekyllRunning(jTmp);
    let bTmp = await batteryHeartbeat();
    setBattery(bTmp);
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
      <p>Battery: {battery}%</p>
      <p>Status: {status()}</p>
      <p>Nginx Running: {nginxRunning ? "yes" : "no"}</p>
      <p>Jekyll Running: {jekyllRunning ? "yes" : "no"}</p>
      <button onClick={onClickHeartbeat}>Heartbeat</button>
    </>
  );
};
