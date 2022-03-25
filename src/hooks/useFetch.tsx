import React, { useEffect, useState } from "react";
import axios from "axios";

import { RootState } from "store/store";
import { useAppDispatch } from "store/hooks";
import { requestsActions } from "store";

const useFetch = (url: string) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<RootState | null>(null);

  const getData = async () => {
    const response = await axios.get(url);
    const data = response.data;

    setData(data);
    dispatch(requestsActions.fetchRequest(data));
    return response.data;
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};

export default useFetch;
