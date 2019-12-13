import { action } from "typesafe-actions";
import { PayloadInterface } from "../types/interfaces";

// use typescript enum rather than action constants
export enum actionConstants {
  ADD_NAME = "ADD_NAME",
  UPDATE_NAME = "UPDATE_NAME",
  DELETE_NAME = "DELETE_NAME",
  SET_RANDOM_ID = "SET_RANDOM_ID",
  SET_SELECTED = "SET_SELECTED"
}

export const appActions = {
  addName: (name: PayloadInterface[]) => action(actionConstants.ADD_NAME, name),
  deleteName: (name: string) => action(actionConstants.UPDATE_NAME, name),
  updateName: (name: string) => action(actionConstants.DELETE_NAME, name),
  setLastRandomlyPickedId: (id: string) =>
    action(actionConstants.SET_RANDOM_ID, id),
  setSelectedName: (name: PayloadInterface[]) =>
    action(actionConstants.SET_SELECTED, name)
};
