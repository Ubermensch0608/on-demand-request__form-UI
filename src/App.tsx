import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

import GNB from "layout/GNB";

import GlobalStyle from "common/GlobalStyle";
import Home from "components/Home";

const App = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await axios.get("http://localhost:4000/requests");
    console.log(response.data);
    setData(response.data);
    return response.data;
  };

  useEffect(() => {
    getData();
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
