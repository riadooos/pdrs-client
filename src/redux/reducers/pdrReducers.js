import {
  GET_PDRS_REQUEST,
  GET_PDRS_SUCCESS,
  GET_PDRS_ERROR,
} from "../constants";

export const getPdrsReducer = (state = { pdrs: [] }, action) => {
  switch (action.type) {
    case GET_PDRS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case GET_PDRS_SUCCESS:
      return {
        loading: false,
        pdrs: action.payload,
      };
    case GET_PDRS_ERROR:
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
