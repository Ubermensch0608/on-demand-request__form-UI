import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

import GNB from "layout/GNB";

import GlobalStyle from "common/GlobalStyle";
import Home from "components/Home";
import useFetch from "hooks/useFetch";

const App = () => {
  const data = useFetch("http://localhost:4000/requests");

  return (
    <Fragment>
      <GlobalStyle />
      <GNB />
      <Home />
    </Fragment>
  );
};

export default App;
