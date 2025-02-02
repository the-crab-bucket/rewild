import { useCallback } from 'react';

export const RunKillButtons = (props: { environment: string }) => {
  const { environment } = props;
  const launchServer = useCallback(async () => {
    if (environment === "dev") {
      backend.runDevServer();
    } else if (environment === "prod") {
      backend.runProdServer();
    }
  }, [environment]);
  const killServer = useCallback(async () => {
    if (environment === "dev") {
      backend.killDevServer();
    } else if (environment === "prod") {
      backend.killProdServer();
    }
  }, [environment]);

  return (
    <div className="card">
      <button onClick={launchServer}>
        Launch
        {environment === "dev"
          ? " local "
          : environment === "prod"
          ? " online "
          : "unknown "}
        server
      </button>
      <button onClick={killServer}>
        Kill
        {environment === "dev"
          ? " local "
          : environment === "prod"
          ? " online "
          : "unknown "}
        server
      </button>
    </div>
  );
};
