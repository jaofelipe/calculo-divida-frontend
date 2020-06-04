import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './firebase/Auth';

//import Test from './pages/test';
import Config from './pages/debt/create';
import Outcome from './pages/debt/outcome';
import Login from './pages/auth/login';
import PrivateRoute from './firebase/PrivateRoute';



export default function Routes(){
    return (
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <PrivateRoute path="/" exact  component={Config} />
                    <Route path="/login" exact  component={Login} />
                    <Route path="/outcome" exact  component={Outcome} />
                                    
                </Switch>
            </BrowserRouter>
        </AuthProvider>
        );
    }
