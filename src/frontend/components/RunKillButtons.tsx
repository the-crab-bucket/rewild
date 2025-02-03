import { useCallback } from "react";

import { Env } from "../const";

export const RunKillButtons = (props: { environment: Env }) => {
  const { environment } = props;
  const launchServer = useCallback(async () => {
    switch (environment) {
      case Env.Dev:
        backend.runDevServer();
        break;
      case Env.Prod:
        backend.runProdServer();
        break;
    }
  }, [environment]);
  const killServer = useCallback(async () => {
    switch (environment) {
      case Env.Dev:
        backend.killDevServer();
        break;
      case Env.Prod:
        backend.killProdServer();
        break;
    }
  }, [environment]);

  const getEnvString = (env: Env) => {
    switch (env) {
      case Env.Dev:
        return " local ";
      case Env.Prod:
        return " online ";
      default:
        return "unknown ";
    }
  };

  return (
    <div>
      <button onClick={launchServer}>
        Launch
        {getEnvString(environment)}
        server
      </button>
      <button onClick={killServer}>
        Kill
        {getEnvString(environment)}
        server
      </button>
    </div>
  );
};
