// Import dependencies
import * as React from "react";

// Import ListItem
import ListItem from "./ListItem";

// Import interfaces
import { DataListInterface } from "../types/interfaces";

// List component
const List = (props: DataListInterface) => {
    return (
        <div className="app-list">
            <ul>
                {props.names.map(name => (
                    <li key={name.id}>
                        <ListItem
                            name={name}
                            handleNameRemove={props.handleNameRemove}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
