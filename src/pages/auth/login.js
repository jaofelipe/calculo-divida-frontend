
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from '../../firebase/base';
import { AuthContext } from "../../firebase/Auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();

      const { email, password } = event.target.elements;
      
        
        if (email.value !== process.env.REACT_APP_FIREBASE_LOGIN 
            && password.value !== process.env.REACT_APP_FIREBASE_PASSWORD )
        {
            alert("Login ou senha errados!");
            return;
        }
        //Sign-up and Login
        await app.auth().createUserWithEmailAndPassword(email.value, password.value)
            .catch((error) =>{
            var errorCode = error.code;
            var errorMessage = error.message;
            switch (errorCode)
            {
                case "auth/email-already-in-use":
                     app
                    .auth().signInWithEmailAndPassword(email.value, password.value);
                    history.push("/");
                break;
                case "auth/weak-password":
                    alert("Senha é fraca");
                    break;
                default:
                    alert(errorMessage);

            }           
            console.log(error);
            return;
        });

        try{
            await app.auth().signInWithEmailAndPassword(email.value, password.value);
        
            history.push("/");
        
        } catch (error) {
            alert(error);
        }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
        
    <div className="container content">
      <p>
        <strong>Login</strong>
      </p>
    
      <form onSubmit={handleLogin}>

        <label>Email </label>
        <input 
          name="email" 
          type="email" 
          placeholder="Email"
        />
      
        <label>
          Password
        </label>
          <input name="password" type="password" placeholder="Password" />
        
        <button className="btn" type="submit">Log in</button>

      </form>
    </div>
  )
};

export default withRouter(Login);
