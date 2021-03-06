import {
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_START,
  LOAD_DATA,
  SET_DATA_MODIFIED_FLAG,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: null,
  dataModified: false,
  data: {},
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOAD_DATA:
      return {
        ...state,
        data: action.payload,
        loading: true,
      };

    case SET_DATA_MODIFIED_FLAG:
      return {
        ...state,
        dataModified: true,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default loadingReducer;
