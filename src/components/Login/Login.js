import React from 'react';
import ReactSignupLoginComponent from 'react-signup-login-component';

const LoginPage = (props) => {
    const signupWasClickedCallback = (data) => {
        console.log(data);
        alert('Signup callback, see log on the console to see the data.');
    };
    const loginWasClickedCallback = (data) => {
        console.log(data);
        alert('Login callback, see log on the console to see the data.');
    };
    const recoverPasswordWasClickedCallback = (data) => {
        console.log(data);
        alert('Recover password callback, see log on the console to see the data.');
    };

    return (
        <div>
            <ReactSignupLoginComponent 
                title="To Do List" 
                handleSignup={signupWasClickedCallback} 
                handleLogin={loginWasClickedCallback} 
                handleRecoverPassword={recoverPasswordWasClickedCallback}
            />
        </div>
    );
};

// class SignUp extends React.Component {
//     render() {
//         return (
//             <div className="form-inline">
//                 <h2>Sign Up</h2>
//                 <div className="form-group">
//                     <input 
//                         className="form-control" 
//                         type="text"
//                         placeholder="email" 
//                     />
//                     <input 
//                         className="form-control" 
//                         type="password"
//                         placeholder="password" 
//                     />
//                     <button 
//                         className="btn btn-primary" 
//                         type="button"
//                     >
//                         Sign Up
//                     </button>
//                 </div>
//             </div>
//         )
//     }
// };

export default LoginPage;
