import React, { Fragment, useEffect } from "react";
import axios from "axios";
import { requestsActions } from "store";
import { useAppDispatch } from "store/hooks";

import GNB from "layout/GNB";
import Home from "components/Home";

import GlobalStyle from "common/GlobalStyle";
import styled from "styled-components";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://request-form-rewind.herokuapp.com/requests"
      );
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
