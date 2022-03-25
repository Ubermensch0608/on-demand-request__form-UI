import React, { Fragment, useEffect, useState } from "react";

import GlobalStyle from "common/GlobalStyle";
import axios from "axios";

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
      Noto Sans 적용 폰트
    </Fragment>
  );
};

export default App;
