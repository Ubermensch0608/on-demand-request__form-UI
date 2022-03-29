import React, { Fragment, useEffect } from "react";
import axios from "axios";
import { requestsActions } from "store";
import { useAppDispatch } from "store/hooks";

import GNB from "layout/GNB";
import Home from "components/Home";

import GlobalStyle from "common/GlobalStyle";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const response = await axios.get("/requests");
      const data = response.data;

      dispatch(requestsActions.fetchRequest(data));
    })();
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <GNB />
      <Home />
    </Fragment>
  );
};

export default App;
