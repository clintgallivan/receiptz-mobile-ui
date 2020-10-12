import {actionTypes} from 'actions/DataActions';
import {ActionSheetIOS} from 'react-native';

const initialState = {
  data: null,
  clickedReceipt: null,
  clickedBookmark: null,
  item: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DATA_REQUEST:
      return {
        ...state,
      };
    case actionTypes.DATA_SUCCESS:
      console.log('=====');

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
      // console.log('====');
      // console.log(state);
      return {
        ...state,
        clickedBookmark: action.item,
        data: state.data.map(receipt => {
          if (action.item.metadata.id === receipt.metadata.id) {
            receipt.metadata.bookMarked =
              receipt.metadata.bookMarked === 'no' ? 'yes' : 'no';
          }
          return receipt;
        }),
      };
    default:
      return state;
  }
};

export default dataReducer;
