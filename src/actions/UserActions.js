import UserController from '../controllers/UserController';

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  CLICKED_ACCOUNT_INFO: 'CLICKED_ACCOUNT_INFO',
  CLICKED_CARD_INFO: 'CLICKED_CARD_INFO',
  SAVE_ITEM_EDIT: 'SAVE_ITEM_EDIT',
  UPDATE_ITEM_EDIT: 'UPDATE_ITEM_EDIT',
  CLICKED_NAME_INFO: 'CLICKED_NAME_INFO',
  SAVE_NAME_EDIT: 'SAVE_NAME_EDIT',
  CLICKED_ADD_CARDS: 'CLICKED_ADD_CARDS',
};

const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST,
});

const loginError = error => ({
  type: actionTypes.LOGIN_ERROR,
  error,
});

const loginSuccess = user => ({
  type: actionTypes.LOGIN_SUCCESS,
  user,
});

const logoutRequest = () => ({
  type: actionTypes.LOGOUT,
});

export const login = (email, password) => async dispatch => {
  dispatch(loginRequest());
  try {
    const user = await UserController.login(email, password);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logout = () => dispatch => {
  UserController.logout();
  dispatch(logoutRequest());
};

export const signup = (
  email,
  password,
  firstName,
  lastName,
) => async dispatch => {
  dispatch(loginRequest());
  try {
    const user = await UserController.signup(
      email,
      password,
      firstName,
      lastName,
    );
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const clickedAccountInfo = item => {
  // console.log('clickedAccountInfoDude');
  // console.log(item.info[0]);
  // console.log(item.info[1]);
  console.log(item);
  return {
    type: actionTypes.CLICKED_ACCOUNT_INFO,
    item,
  };
};

export const clickedCardInfo = item => {
  // console.log('clickedcardinfo');
  // console.log(item.info[0]);
  // console.log(item.info[1]);
  console.log(item.info);
  return {
    type: actionTypes.CLICKED_CARD_INFO,
    item,
  };
};

export const clickedNameInfo = item => {
  return {
    type: actionTypes.CLICKED_NAME_INFO,
    item,
  };
};

export const saveItemEdit = () => {
  return {
    type: actionTypes.SAVE_ITEM_EDIT,
  };
};

export const updateItemEdit = (firstValue, secondValue) => {
  // console.log('=========');
  // console.log({bankName: firstValue, lastFourDigits: secondValue});
  return {
    type: actionTypes.UPDATE_ITEM_EDIT,
    payload: {firstValue, secondValue},
  };
};

export const clickedAddCards = item => {
  return {
    type: actionTypes.CLICKED_ADD_CARDS,
    payload: item,
  };
};

// export const save = (email, password) => async (dispatch) => {
//   dispatch(loginRequest());
//   try {
//     const user = await UserController.login(email, password);
//     dispatch(loginSuccess(user));
//   } catch (error) {
//     dispatch(loginError(error.message));
//   }
// };
