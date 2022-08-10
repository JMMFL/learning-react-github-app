import { useEffect, useState } from "react";
import useMountedRef from "./useMountedRef";

export default function useFetchHook(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const mounted = useMountedRef();

  useEffect(() => {
    if (!url || !mounted.current) return;

    async function requestUrl(url) {
      const response = await fetch(url);
      const json = await response.json();
      if (!mounted.current) throw new Error("component is not mounted");
      setData(json);
    }

    setLoading(true);
    requestUrl(url)
      .catch((error) => {
        if (!mounted.current) return;
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [url, mounted]);

  return { data, error, loading };
}
