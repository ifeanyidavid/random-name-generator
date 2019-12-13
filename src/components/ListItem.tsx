// Import dependencies
import * as React from 'react'

// Import interfaces
import { ListItemInterface } from "../types/interfaces";

// ListItem component
const ListItem = (props: ListItemInterface) => {
    return (
        <div className='list-item'>
            <div className="list-item-input-wrapper">
                <div>
                    <h4>{props.name.text}</h4>
                </div>
            </div>

            <div className="item-remove" onClick={() => props.handleNameRemove(props.name.id)}>
                &#x02A2F;
      </div>
        </div>
    )
}

export default ListItem
