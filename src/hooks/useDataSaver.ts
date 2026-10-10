"use client";

import { useEffect, useState } from "react";

interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: string;
}

interface DataSaverState {
  dataSaver: boolean;
  /** true quando a checagem de rede já rodou no cliente */
  checked: boolean;
}

/**
 * Detecta conexão econômica (Save-Data ou 2G/slow-2g).
 * `checked` garante que consumidores só agiram após a verificação,
 * evitando autoplay indesejado durante a hidratação.
 */
export function useDataSaver(): DataSaverState {
  const [state, setState] = useState<DataSaverState>({
    dataSaver: false,
    checked: false,
  });

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: NetworkInformation })
      .connection;
    const dataSaver =
      !!connection &&
      (connection.saveData === true ||
        /^(slow-)?2g$/.test(connection.effectiveType ?? ""));
    // A API navigator.connection só existe no cliente, então esta é uma
    // sincronização pontual pós-hidratação — roda uma vez, com deps vazias,
    // e não gera cascata de renders. Refatorar para useSyncExternalStore
    // mudaria o contrato de `checked`, que o autoplay do hero depende.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({ dataSaver, checked: true });
  }, []);

  return state;
}
