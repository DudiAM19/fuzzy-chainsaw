import {SET_DATA, SET_LOADING} from '../../actions';

const initialState = {
  data: {},
  loading: false,
};

export const appReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_DATA:
      return {
        ...state,
        data: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};
