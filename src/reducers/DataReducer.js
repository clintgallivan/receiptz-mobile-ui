import { actionTypes } from 'actions/DataActions';

const initialState = {
  data: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DATA_REQUEST:
      return {
        ...state,
      };
    case actionTypes.DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default dataReducer;
