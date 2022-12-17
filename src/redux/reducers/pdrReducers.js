import {
  GET_PDRS_REQUEST,
  GET_PDRS_SUCCESS,
  GET_PDRS_ERROR,
  ADD_PDR_REQUEST,
  ADD_PDR_SUCCESS,
  ADD_PDR_ERROR,
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

export const addPdrReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PDR_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case ADD_PDR_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ADD_PDR_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
