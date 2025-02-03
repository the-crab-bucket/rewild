import { Env } from "../../const";
import { Monitor } from "../docker/Monitor";
import { RunKillButtons } from "../RunKillButtons";

const DevelopmentControlsContainer = () => {
  return (
    <div>
      <Monitor />
      <RunKillButtons environment={Env.Dev} />
      <RunKillButtons environment={Env.Prod} />
    </div>
  );
};

export default DevelopmentControlsContainer;
