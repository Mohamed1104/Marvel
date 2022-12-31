import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (undefined === url) {
      return;
    }

    async function getData() {
      const response = await fetch(url, {
        headers: { Accept: "application/json" },
      });
      const data = await response.json();
      setData(data.data);
    }
    getData();
  }, [url]);

  return { data: data };
}
