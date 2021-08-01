import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import CampsiteInfo from './CampsiteInfo'
import Home from './HomeComponent';
import About from './AboutComponent'
import Contact from './ContactComponent'
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

// setting up the brains of react-router, to know where to send users when links are clicked

// campsites is a prop, campsite is mapped
// I made selectedCampsite state null so a card wouldn't be selected yet.
// then made a method to where I setState to selectedCampsite prop.


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

    render() {
        // Used arrow function bc this keyword inherits from parent scope. Function declartion would not point to state of parent class (undefined)
        const HomePage = () => {
            return (
                <Home 
                    campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            );
        };

        const AboutPage = () => {
            return (
                <About
                    partners={this.state.partners}
                />
            )
        }

        const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo 
                    campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route path='/aboutus' component={AboutPage} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;


// <Directory campsites={this.state.campsites} />
