import React from 'react';
import {Switch, Route} from 'react-router-dom';

export default (
    <Switch>
        <Route render={() => <main>404 Not Found</main>} />
    </Switch>
)