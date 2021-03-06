import React from 'react';
import TextInputStyledComponents from 'reusable-react-comp-gurdeeps/TextInputStyledComponents';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
    render() {
        return (
            <TextInputStyledComponents
                htmlId="example-error"
                label="First Name"
                name="firstname"
                onChange={() => {}}
                required
                error="First name is required."
            />
        )
    }
}