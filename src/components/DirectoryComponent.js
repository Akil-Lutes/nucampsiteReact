import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfo'

// campsites is a prop, campsite is mapped
// I made selectedCampsite state null so a card wouldn't be selected yet.
// then made a method to where I setState to selectedCampsite prop.

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite: null
        };
    }

    onCampsiteSelect(campsite) {
        this.setState({selectedCampsite: campsite});
    }

    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                    <CampsiteInfo campsite={this.state.selectedCampsite} comments={this.props.comments} />
                </div>
                
            </div>
        );
    }
}

export default Directory;
