import {getData} from '../api';
export const SET_DATA = 'SET_DATA';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';

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

export const setLoading = payload => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload,
  });
};

export const handleData = req => dispatch => {
  dispatch(setLoading(true));
  getData(req)
    .then(res => {
      const newData = res.data.map(val => {
        val.isExpanded = false;
        return val;
      });
      dispatch(setData(newData));
      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(setError(err));
    });
};
