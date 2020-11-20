import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({email: '', password: ''}, 
                () => console.log(this.state))

        } catch (error) {
            console.log("error logging in: ", error);
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }


    render() {
        const { email, password } = this.state;

        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
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
                    <div className="buttons">
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>

        )
    }

}

export default SignIn;