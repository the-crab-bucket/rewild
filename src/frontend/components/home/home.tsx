import '../../App.css';
import '../../flex.css';

import { Link } from 'react-router-dom';

import { Env } from '../../const';
import GuideButton from '../intro/GuideButton';
import { RunKillButtons } from '../RunKillButtons';

function Home() {
  return (
    <>
      <h1>Rewild Server</h1>
      <RunKillButtons environment={Env.Dev} />
      <RunKillButtons environment={Env.Prod} />

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
