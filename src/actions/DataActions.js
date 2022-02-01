import ReceiptsController from '../controllers/ReceiptsController';
import {State} from 'react-native-gesture-handler';
import {useCallback} from 'react';

export const actionTypes = {
  DATA: 'DATA',
  DATA_REQUEST: 'DATA_REQUEST',
  DATA_ERROR: 'DATA_ERROR',
  DATA_SUCCESS: 'DATA_SUCCESS',
  CLICKED_RECEIPT: 'CLICKED_RECEIPT',
  CLICKED_BOOKMARK: 'CLICKED_BOOKMARK',
  CLICKED_ADD_CARDS: 'CLICKED_ADD_CARDS',
  RESET_ADD_CARDS: 'RESET_ADD_CARDS',
};

const dataRequest = () => ({
  type: actionTypes.DATA_REQUEST,
});

const requestError = error => ({
  type: actionTypes.DATA_ERROR,
  error,
});

const requestSuccess = data => ({
  type: actionTypes.DATA_SUCCESS,
  data,
});

export const clickedReceipt = item => {
  // console.log(item);
  return {
    type: actionTypes.CLICKED_RECEIPT,
    item,
  };
};

export const clickedBookmark = item => {
  return {
    type: actionTypes.CLICKED_BOOKMARK,
    item,
  };
};

export const clickedAddCards = () => {
  console.log('clickedAddCards');

  return {
    type: actionTypes.CLICKED_ADD_CARDS,
  };
};

export const resetAddCards = () => {
  return {
    type: actionTypes.RESET_ADD_CARDS,
  };
};

export const getUserReceipts = user_id => async dispatch => {
  console.log('Something');
  dispatch(dataRequest());
  try {
    const data = await ReceiptsController.getUserReceipts(user_id);
    dispatch(requestSuccess(data));
  } catch (error) {
    dispatch(requestError(error.message));
  }
};
