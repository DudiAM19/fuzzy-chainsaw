import {SET_DATA} from '../actions';

const initialState = {
  data: {},
};

export const appReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_DATA:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
