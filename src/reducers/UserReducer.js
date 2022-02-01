import {actionTypes} from 'actions/UserActions';

const initialState = {
  user: null,
  clickedCardInfo: null,
  updateItemEdit: null,
  saveItemEdit: null,
  clickedCardInfoMatch: null,
  originalItemEdit: null,
  updatedUser: null,
  clickedCardIndex: null,
  clickedEmail: null,
  clickedAddCardPlaceholders: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.LOGOUT:
      return initialState;
    case actionTypes.CLICKED_ACCOUNT_INFO:
      return {
        ...state,
        item: action.payload,
      };
    case actionTypes.CLICKED_CARD_INFO:
      // console.log('**********');
      // console.log(state);
      // console.log(action.item.id);
      console.log({clickedCardIndex: state.clickedCardIndex});
      console.log({userCardLength: state.user.cards.length});
      // console.log(state.updatedUser.cards);
      console.log(state.user.cards);
      return {
        ...state,
        clickedCardInfo: {
          primaryHeader: action.item.header,
          primaryInput: action.item.info[0],
          secondaryHeader: action.item.header2,
          secondaryInput: action.item.info[1],
          id: action.item.id,
        },
        clickedCardIndex: action.item.id,
        clickedCardInfoMatch: {
          bankName: action.item.info[0],
          lastFourDigits: action.item.info[1],
        },
        clickedEmail: action.item.info[1], //* original email clicked
      };
    case actionTypes.CLICKED_NAME_INFO:
      // let dividedName = action.item.info[1].split(' ');
      // console.log(dividedName.length);
      // console.log(state);
      // console.log('*&*&*&*&*&*&*&');
      // let dividedName = fullname.split(' ');
      return {
        ...state,
        clickedCardInfo: {
          primaryHeader: action.item.header,
          primaryInput: action.item.info[0],
          secondaryHeader: action.item.header2,
          secondaryInput: action.item.info[1],
        },
        // clickedNameInfoMatch: {
        //   name: {
        //     first: dividedName[0],
        //     last: dividedName.length === 2 ? dividedName[1] : dividedName[2],
        //     middle: dividedName.length === 3 ? dividedName[1] : null,
        //   },
        // },
      };
    case actionTypes.UPDATE_ITEM_EDIT:
      console.log({updateItemEdit: state.updateItemEdit});
      // console.log(state.user.cards.length + 1);
      // console.log(state.clickedCardIndex);

      let dividedName = action.payload.secondValue.split(' ');
      // console.log({divideNameLength: dividedName.length});
      // console.log({first: dividedName[0]});
      // console.log({second: dividedName[1]});
      // console.log({third: dividedName[2]});
      return {
        ...state,
        updateItemEdit: {
          bankName: action.payload.firstValue,
          lastFourDigits: action.payload.secondValue,
        },
        updateEmailEdit: action.payload.secondValue, //* updated email
        updateNameEdit: {
          first: dividedName[0],
          last: dividedName.length < 2 ? null : dividedName[1],
          middle: null,
        },
      };
    case actionTypes.SAVE_ITEM_EDIT:
      let updatedUser = state.user;

      updatedUser.cards = state.user.cards.map((card, inx) => {
        return inx === state.clickedCardIndex ? state.updateItemEdit : card;
      });

      // if (state.user.cards.length + 0 === state.clickedCardIndex) {
      //   return updatedUser.cards = updatedUser.cards.push(state.updateItemEdit)
      // } else {
      //   return
      // }

      updatedUser.cards =
        state.user.cards.length + 0 === state.clickedCardIndex
          ? updatedUser.cards.concat(state.updateItemEdit)
          : state.user.cards;

      updatedUser.metadata.name =
        state.user.cards.length + 1 === state.clickedCardIndex
          ? state.updateNameEdit
          : state.user.metadata.name;

      updatedUser.metadata.email =
        state.user.cards.length + 2 === state.clickedCardIndex
          ? state.updateEmailEdit
          : state.user.metadata.email;

      updatedUser.metadata.password =
        state.user.cards.length + 3 === state.clickedCardIndex
          ? state.updateEmailEdit
          : state.user.metadata.password;

      updatedUser.metadata.phoneNumber =
        state.user.cards.length + 4 === state.clickedCardIndex
          ? state.updateEmailEdit
          : state.user.metadata.phoneNumber;
      console.log('====+++');
      console.log(updatedUser);
      // updatedUser.cards
      return {
        ...state,
        user: updatedUser,
      };
    // case actionTypes.CLICKED_ADD_CARDS:
    //   console.log({
    //     clickedAddCardPlaceholders: state.clickedAddCardPlaceholders,
    //   });
    //   return {
    //     clickedAddCardPlaceholders: {
    //       primaryHeader: null,
    //       primaryInput: action.object.firstValue,
    //       secondaryHeader: null,
    //       secondaryInput: action.object.secondValue,
    //     },
    //   };
    default:
      return state;
  }
};

export default userReducer;
