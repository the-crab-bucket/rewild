import { Link } from "react-router-dom";
import "../../App.css";
import "../../flex.css";
import { RunKillButtons } from "../RunKillButtons";
import GuideButton from "../intro/GuideButton";

function Home() {
  return (
    <>
      <h1>Rewild</h1>
      <RunKillButtons environment="dev" />
      <RunKillButtons environment="prod" />

      <p className="read-the-docs">
        Host your own website right from your laptop.
      </p>
      <Link to={"/about"}>About</Link>
      <div className="row">
        <GuideButton />
        <GuideButton />
      </div>
    </>
  );
}

export default Home;
