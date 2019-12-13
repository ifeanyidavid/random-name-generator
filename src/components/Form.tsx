// Import dependencies
import * as React from 'react'
import shortid from 'shortid'

// Import interfaces
import { PayloadInterface, AppFormInterface } from "../types/interfaces"

// form component
const Form = (props: AppFormInterface) => {
    // Create ref for form input
    const inputRef = React.useRef<HTMLInputElement>(null)

    // Create new form state
    const [formState, setFormState] = React.useState('')

    // Handle  input change
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        // Update form state with the text from input
        setFormState(event.target.value)
    }

    // Handle 'Enter' in input
    function handleInputEnter(event: React.KeyboardEvent) {
        // Check for 'Enter' key
        if (event.key === 'Enter') {
            // Prepare new object
            const newName: PayloadInterface = {
                id: shortid.generate(),
                text: formState,
            }

            // Create new  item
            props.handleNameCreate(newName)

            // Reset the input field
            if (inputRef && inputRef.current) {
                inputRef.current.value = ''
            }
        }
    }

    return (
        <div className="app-form">
            <input
                ref={inputRef}
                type="text"
                placeholder='Enter new name'
                onChange={event => handleInputChange(event)}
                onKeyPress={event => handleInputEnter(event)}
            />
        </div>
    )
}

export default Form
