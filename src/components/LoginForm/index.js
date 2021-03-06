import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { myInput } from '../../components/Field';
import { requiredInput, correctInput } from '../../validation';

class LoginForm extends Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit} >
                <Field 
                    name="username"
                    component={myInput}
                    type="text"
                    placeholder="Username"
                    validate={[requiredInput, correctInput]}
                />
                <Field 
                    name="password"
                    component={myInput}
                    type="password"
                    placeholder="Password"
                    validate={[requiredInput]}
                />
                <button type="submit" label="Submit">Submit</button>
            </form>
        );
    }
}

LoginForm = reduxForm({
    form: 'Login'
})(LoginForm);

export default LoginForm;