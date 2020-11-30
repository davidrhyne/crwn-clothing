import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state; 

        if(password !== confirmPassword) {
            alert('passwords do not match, please re-enter them')
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState ({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }, () => console.log(this.state));  
        } catch (error) {
            console.log(error);
        }

    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state; 
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className={'sign-up-form'} onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName' 
                        type='text' 
                        label='display name'
                        value={displayName} 
                        required 
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='email'
                        value={email} 
                        required 
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='password'
                        value={password} 
                        required 
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        name='confirmPassword' 
                        type='password' 
                        label='confirm password'
                        value={confirmPassword} 
                        required 
                        handleChange={this.handleChange}
                    />
                    
                    <CustomButton type='submit'> SIGN UP </CustomButton>                        
                    
                </form>
            </div>

        )
    }

}


export default SignUp;