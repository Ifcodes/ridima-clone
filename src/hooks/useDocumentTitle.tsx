import { useEffect, useRef } from "react";

export const useDocumentTitle = (title: string, showOnUnMount = false) => {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!showOnUnMount) {
        document.title = defaultTitle.current;
      }
    },
    []
  );
};
