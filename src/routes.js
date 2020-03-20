import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Repository from './pages/Repository';

function Routes() {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" exact component={Main} />
                <Route path="/Repository" component={Repository} />
            </switch>
        </BrowserRouter>
    );
}

export default Routes;
