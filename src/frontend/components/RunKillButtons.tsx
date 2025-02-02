import { useCallback } from "react";

import { Env } from "../const";

export const RunKillButtons = (props: { environment: Env }) => {
  const { environment } = props;
  const launchServer = useCallback(async () => {
    switch (environment) {
      case Env.Dev:
        {
          backend.runDevServer();
        }
        break;
      case Env.Prod:
        {
          backend.runProdServer();
        }
        break;
    }
  }, [environment]);
  const killServer = useCallback(async () => {
    switch (environment) {
      case Env.Dev:
        {
          backend.killDevServer();
        }
        break;
      case Env.Prod:
        {
          backend.killProdServer();
        }
        break;
    }
  }, [environment]);

  return (
    <div className="card">
      <button onClick={launchServer}>
        Launch
        {environment === Env.Dev
          ? " local "
          : environment === Env.Prod
          ? " online "
          : "unknown "}
        server
      </button>
      <button onClick={killServer}>
        Kill
        {environment === Env.Dev
          ? " local "
          : environment === Env.Prod
          ? " online "
          : "unknown "}
        server
      </button>
    </div>
  );
};
