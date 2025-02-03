import "../../App.css";
import "../../flex.css";

import { Link } from "react-router-dom";

import { Monitor } from "../docker/Monitor";
import { Env } from "../../const";
import GuideButton from "../GuideButton";
import { RunKillButtons } from "../RunKillButtons";

function HomeContainer() {
  return (
    <>
      <h1>Rewild Server</h1>

      <Monitor />
      <RunKillButtons environment={Env.Dev} />
      <RunKillButtons environment={Env.Prod} />

      <p className="read-the-docs">
        Host your own website right from your laptop.
      </p>
      <Link to={"/about"}>About</Link>
    </>
  );
}

export default HomeContainer;
