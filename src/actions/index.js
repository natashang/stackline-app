import {
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_START,
  LOAD_DATA,
} from "./actionTypes";
import { apiFetchData } from "../services/apiFetchData";

export const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

export const fetchSuccess = () => {
  return {
    type: FETCH_SUCCESS,
  };
};

export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

export const loadData = (data) => {
  return {
    type: LOAD_DATA,
    payload: data,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchStart());

    try {
      const data = await apiFetchData();
      dispatch(loadData(data));
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};
