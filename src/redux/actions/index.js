import {getData} from '../api';
export const SET_DATA = 'SET_DATA';
export const SET_ERROR = 'SET_ERROR';

export const setData = payload => dispatch => {
  dispatch({
    type: SET_DATA,
    payload,
  });
};

export const setError = payload => dispatch => {
  dispatch({
    type: SET_ERROR,
    payload,
  });
};

export const handleData = req => dispatch => {
  getData(req)
    .then(res => {
      dispatch(setData(res.data));
    })
    .catch(err => {
      dispatch(setError(err));
    });
};
