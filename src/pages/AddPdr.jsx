import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPdrAction } from "../redux/actions/pdrActions";
import { useHistory } from "react-router-dom";

const AddPdr = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const newPdrState = useSelector((state) => state.addPdrReducer);
  const { loading, success, error } = newPdrState;

  const [pdrState, setPdrState] = useState({
    code: "",
    designation: "",
    reference: "",
    machine: "",
    status_comptable: "",
    image: "",
  });

  const { code, designation, reference, machine, status_comptable, image } =
    pdrState;

  const handelChange = (name) => (event) => {
    setPdrState({ ...pdrState, [name]: event.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addPdrAction(pdrState));
    alert("the pdr was registred");
    history.push("/");
  };
  return (
    <div className="addBloc">
      <h1>Ajouter Pièce</h1>
      <form onSubmit={handelSubmit}>
        <input
          className="form-control"
          type="text"
          value={code}
          placeholder="code"
          onChange={handelChange("code")}
        />
        <input
          className="form-control"
          type="text"
          value={designation}
          placeholder="designation"
          onChange={handelChange("designation")}
        />
        <input
          className="form-control"
          type="text"
          value={reference}
          placeholder="reference"
          onChange={handelChange("reference")}
        />
        <input
          className="form-control"
          type="text"
          value={machine}
          placeholder="machine"
          onChange={handelChange("machine")}
        />
        <input
          className="form-control"
          type="text"
          value={status_comptable}
          placeholder="status_comptable"
          onChange={handelChange("status_comptable")}
        />
        <input
          className="form-control"
          type="text"
          value={image}
          placeholder="image"
          onChange={handelChange("image")}
        />
        <button className="btn btn-warning">Ajouter</button>
      </form>
    </div>
  );
};

export default AddPdr;
