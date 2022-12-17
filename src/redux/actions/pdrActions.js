import axios from "axios";
import {
  GET_PDRS_REQUEST,
  GET_PDRS_SUCCESS,
  GET_PDRS_ERROR,
} from "../constants";

export const getPdrsAction = () => async (dispatch) => {
  dispatch({ type: GET_PDRS_REQUEST });
  try {
    const responce = await axios.get("https://pdrs-api.onrender.com/api/pdrs");
    console.log(responce.data);
    dispatch({ type: GET_PDRS_SUCCESS, payload: responce.data.pdrs });
  } catch (error) {
    dispatch({ type: GET_PDRS_ERROR, payload: error });
  }
};

// http://localhost:5000
// https://pdrs-api.onrender.com
