import { RefObject, useCallback, useEffect } from 'react';

export const useClickDocument = (onClick: (event: MouseEvent) => void, ignoreRefs?: RefObject<HTMLElement>[]) => {
  const onClickHandler = useCallback((event: MouseEvent) => {
    if (!event.target) return;
    if (ignoreRefs && ignoreRefs.length) {
      for (let ref of ignoreRefs) {
        if (!ref.current) continue;
        if (ref.current.contains(event.target as HTMLElement)) return;
      }
    }
    onClick(event);
  }, [onClick, ignoreRefs]);

  useEffect(() => {
    document.addEventListener('click', onClickHandler);
    return () => {
      document.removeEventListener('click', onClickHandler);
    }
  }, []);
};
