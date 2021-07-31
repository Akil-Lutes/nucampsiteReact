import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { CAMPSITES } from '../shared/campsites';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import CampsiteInfo from './CampsiteInfo'
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

// setting up the brains of react-router, to know where to send users when links are clicked

// campsites is a prop, campsite is mapped
// I made selectedCampsite state null so a card wouldn't be selected yet.
// then made a method to where I setState to selectedCampsite prop.


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Redirect to='/home' />
                    <Directory campsites={this.state.campsites} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;