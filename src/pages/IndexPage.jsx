import React, { useState, useEffect } from "react";
import axios from "axios";

const IndexPage = () => {
  const [newPdrs, setNewPdrs] = useState([]);

  useEffect(() => {
    axios.get("https://pdrs-api.onrender.com/api/pdrs").then((res) => {
      const { pdrs } = res.data;
      console.log(pdrs);
      setNewPdrs(pdrs);
    });
  }, []);

  return <div>{JSON.stringify(newPdrs)}</div>;
};

export default IndexPage;
