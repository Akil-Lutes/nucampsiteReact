import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import CampsiteInfo from './CampsiteInfoComponent'
import Home from './HomeComponent';
import About from './AboutComponent'
import Contact from './ContactComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// setting up the brains of react-router, to know where to send users when links are clicked

// campsites is a prop, campsite is mapped
// I made selectedCampsite state null so a card wouldn't be selected yet.
// then made a method to where I setState to selectedCampsite prop.

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    };
};


class Main extends Component {
    

    render() {
        // Used arrow function bc this keyword inherits from parent scope. Function declartion would not point to state of parent class (undefined)
        const HomePage = () => {
            return (
                <Home
                    campsite={this.props.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                />
            );
        };

        const AboutPage = () => {
            return (
                <About
                    partners={this.props.partners}
                />
            )
        }

        const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo campsite={this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]} 
                  comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)} />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} />
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

export default withRouter(connect(mapStateToProps)(Main));


// <Directory campsites={this.state.campsites} />
