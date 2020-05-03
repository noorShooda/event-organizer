import React from 'react';
import { BrowserRouter, Switch, Route,Redirect} from 'react-router-dom';
import { HomePage } from './homePage/HomePage';
import { Admin } from './admin/Admin';
import { Table } from './table/Table';
import { Header } from './header/Header';

export const Root = () => {

    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/admin" component={Admin} exact/>
                <Route path="/table" component={Table} exact/>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
        
    );
}