import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'

import Register from './auth/Register';
import Landing from './layout/Landing';
import Login from './auth/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
        </BrowserRouter>
    )
}