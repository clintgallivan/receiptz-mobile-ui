import {actionTypes} from 'actions/DataActions';

const initialState = {
  data: null,
  clickedReceipt: null,
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
    case actionTypes.CLICKED_RECEIPT:
      return {
        ...state,
        clickedReceipt: action.item,
      };
    case actionTypes.CLICKED_BOOKMARK:
      return {
        ...state,
        clickedBookmark: action.item,
      };
    default:
      return state;
  }
};

export default dataReducer;
