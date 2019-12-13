import * as MyTypes from "../types/mytypes";
import { actionConstants } from "../actions/";
import { PayloadInterface } from "../types/interfaces";

interface ListModel {
  names: PayloadInterface[];
  selected: PayloadInterface[];
  lastRandomlyPickedId: string;
}

const initialState: ListModel = {
  names: [],
  selected: [],
  lastRandomlyPickedId: ""
};

export const appReducer = (
  state: ListModel = initialState,
  action: MyTypes.RootAction
) => {
  switch (action.type) {
    case actionConstants.ADD_NAME: {
      return { ...state, names: action.payload };
    }
    case actionConstants.DELETE_NAME: {
      const id = action.payload;
      // Prepare new state
      const newState: PayloadInterface[] = state.names.filter(
        (name: PayloadInterface) => name.id !== id
      );
      return { ...state, names: newState };
    }
    case actionConstants.SET_RANDOM_ID: {
      return { ...state, lastRandomlyPickedId: action.payload };
    }
    case actionConstants.SET_SELECTED: {
      return { ...state, selected: action.payload };
    }
    default:
      return state;
  }
};
