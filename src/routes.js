import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import Test from './pages/test';
import Config from './pages/debt/create';
import Outcome from './pages/debt/outcome';


export default function Routes(){
    return (
    <BrowserRouter>
            <Switch>
                <Route path="/" exact  component={Config} />
                {/* <Route path="/config" exact  component={Config} /> */}
                <Route path="/outcome" exact  component={Outcome} />
                                 
            </Switch>
        </BrowserRouter>
        );
    }
