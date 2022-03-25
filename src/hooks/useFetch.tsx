import React, { useEffect, useState } from "react";
import axios from "axios";

import { RootState } from "store/store";

const useFetch = (url: string) => {
  const [data, setData] = useState<RootState | null>(null);

  const getData = async () => {
    const response = await axios.get(url);

    setData(response.data);
    return response.data;
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};

export default useFetch;
