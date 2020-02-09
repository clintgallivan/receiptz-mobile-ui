import ReceiptsController from '../controllers/ReceiptsController';

export const actionTypes = {
  DATA: 'DATA',
  DATA_REQUEST: 'DATA_REQUEST',
  DATA_ERROR: 'DATA_ERROR',
  DATA_SUCCESS: 'DATA_SUCCESS',
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


export const getUserReceipts = (user_id) => async (dispatch) => {
  dispatch(dataRequest());
  try {
    const data = await ReceiptsController.getUserRecepts(user_id);
    dispatch(requestSuccess(ldata));
  } catch (error) {
    console.log('err getting data', error.message)
    dispatch(requestError(error.message));
  }
};
