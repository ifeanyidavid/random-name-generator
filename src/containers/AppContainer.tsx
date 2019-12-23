import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "../types/mytypes";
import { actionConstants } from "../actions";

// Import Interfaces
import { PayloadInterface } from "../types/interfaces";

// Import components
import Form from "../components/Form";
import List from "../components/List";
import RandomSelectButton from "../components/RandomSelectButton";

interface AppContainerProps {
  names: PayloadInterface[];
  selected: PayloadInterface[],
  lastRandomlyPickedId: string,
  addName: any,
  deleteName: any,
  setLastRandomlyPickedId: any,
  setSelectedName: any
}

const AppContainer: React.FC<AppContainerProps> = (props: AppContainerProps) => {
  // Creating new item
  const handleNameCreate = (name: PayloadInterface) => {

    const { names, addName } = props;

    // Prepare new state
    const newListState: PayloadInterface[] = [...names];

    // Update new state
    newListState.push(name);

    // Update state
    addName(newListState);
  }

  const handleNameRemove = (id: string) => {
    const { deleteName } = props;
    deleteName(id);
  }

  const checkElementIdEqual = (randomlyPicked: any) => {
    const { lastRandomlyPickedId } = props;
    return randomlyPicked.id !== lastRandomlyPickedId;
  }

  // Generate random name
  const getRandomName = () => {
    const { names, setLastRandomlyPickedId, setSelectedName, selected } = props;
    const listClone: PayloadInterface[] = Array.from(names).map(o =>
      Object.assign({}, o)
    );

    if (listClone.length > 0) {
      let randomlyPicked: PayloadInterface;
      randomlyPicked =
        listClone[Math.floor(Math.random() * listClone.length)];

      if (checkElementIdEqual(randomlyPicked)) {
        setLastRandomlyPickedId(randomlyPicked.id);
        setSelectedName([randomlyPicked]);
      } else {
        setLastRandomlyPickedId(randomlyPicked.id);
        const randomlyPickedElementIndex = listClone.findIndex(
          (name: PayloadInterface) => name.id === randomlyPicked.id
        );

        if (listClone.length === 1) {
          setSelectedName([randomlyPicked]);
        } else {
          if (randomlyPickedElementIndex !== 0) {

            setSelectedName([listClone[randomlyPickedElementIndex - 1]]);
            if (listClone[randomlyPickedElementIndex - 1] && selected[0]) {
              if (
                listClone[randomlyPickedElementIndex - 1].id ===
                selected[0].id
              ) {
                setSelectedName([listClone[randomlyPickedElementIndex + 1]]);
              }
            }
          }
          setSelectedName([listClone[randomlyPickedElementIndex + 1]]);
        }
      }
    }
  }

  const { names, selected } = props;

  let randomName;

  if (selected[0]) {
    randomName = selected[0].text;
  }

  return (
    <div className="app-wrapper">

      {randomName ? <div className="random-name">{randomName}</div> : ''}

      <RandomSelectButton getRandomName={getRandomName} />
      <Form names={names} handleNameCreate={handleNameCreate} />
      <List
        names={names}
        handleNameRemove={handleNameRemove}
      />
    </div>
  );
}

const MapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    names: store.app.names,
    selected: store.app.selected,
    lastRandomlyPickedId: store.app.lastRandomlyPickedId
  };
};

const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  addName: (name: PayloadInterface[]) => dispatch({ type: actionConstants.ADD_NAME, payload: name }),
  deleteName: (name: string) => dispatch({ type: actionConstants.DELETE_NAME, payload: name }),
  setLastRandomlyPickedId: (id: string) => dispatch({ type: actionConstants.SET_RANDOM_ID, payload: id }),
  setSelectedName: (name: PayloadInterface[]) => dispatch({ type: actionConstants.SET_SELECTED, payload: name }),
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(AppContainer);
