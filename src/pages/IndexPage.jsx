import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PdrShow from "../components/PdrShow";
import { getPdrsAction } from "../redux/actions/pdrActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

const IndexPage = () => {
  const dispatch = useDispatch();

  const pdrsState = useSelector((state) => state.getPdrsReducer);
  const { pdrs, loading, error } = pdrsState;

  useEffect(() => {
    dispatch(getPdrsAction());
  }, [dispatch]);

  return (
    <div className="d-flex flex-wrap">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error="Something went wrong" />
      ) : (
        pdrs.map((pdr, index) => {
          return <PdrShow pdr={pdr} key={index} />;
        })
      )}
    </div>
  );
};

export default IndexPage;
