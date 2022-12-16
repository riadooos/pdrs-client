import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPdrsAction } from "../redux/actions/pdrActions";

const IndexPage = () => {
  const dispatch = useDispatch();

  const pdrsState = useSelector((state) => state.getPdrsReducer);
  const { pdrs, loading, error } = pdrsState;

  useEffect(() => {
    dispatch(getPdrsAction());
  }, [dispatch]);

  return <div>{JSON.stringify(pdrs)}</div>;
};

export default IndexPage;
