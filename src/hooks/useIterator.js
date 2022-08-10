import { useCallback, useMemo, useState } from "react";

export default function useIterator(items = [], initialIndex) {
  const [index, setIndex] = useState(initialIndex);
  const endIndex = items.length - 1;

  const next = useCallback(() => {
    setIndex(index === endIndex ? 0 : index + 1);
  }, [index, endIndex]);

  const prev = useCallback(() => {
    setIndex(index === 0 ? endIndex : index - 1);
  }, [index, endIndex]);

  const item = useMemo(() => items[index], [index, items]);

  return [item ?? items[0], next, prev];
}
