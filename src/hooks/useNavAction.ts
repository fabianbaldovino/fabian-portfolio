import { useCallback } from 'react';

/**
 * Dispatches a custom nav action event that page components can listen to.
 */
export function useNavAction() {
  const dispatchAction = useCallback((action: string) => {
    window.dispatchEvent(new CustomEvent('nav-action', { detail: { action } }));
  }, []);

  return { dispatchAction };
}
