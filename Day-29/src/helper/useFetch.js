import { useState, useEffect } from "react";

const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(URL, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not recieve data from the server!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Aborted");
        } else if (err.message === "API key is invalid.") {
          setIsPending(false);
          setError(err.message);
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [URL]);
  return { data, isPending, error };
};

export default useFetch;
