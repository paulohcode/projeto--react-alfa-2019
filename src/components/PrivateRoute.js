import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import fakeAuth from '../helpers/fake-auth';


const PrivateRoute = (props) => {
    const { component: Page, ...others } = props
    return (
        <Route {...others}
            render={(routeProps) => {
                return fakeAuth.getAuthenticated()
                    ? <Page {...routeProps} />
                    : <Redirect to={{
                        pathname: '/login',
                        state: { from: routeProps.location }
                    }}
                    />
            }}
        />
    )

}

export default PrivateRoute;