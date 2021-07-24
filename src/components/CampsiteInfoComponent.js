import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {


    renderCampsite(campsite) {
        return(
                <div className="col-md-5 and m-1">
                    <Card>
                        <CardImg top src={campsite.image} alt={campsite.name} />
                        <CardBody>
                            <CardTitle>{campsite.name}</CardTitle>
                            <CardText>{campsite.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
    }

    renderComments(comments) {
        
    }
    
        render() {
            if(this.props.campsite) {
            return (
                <div className="row">
                    <div>
                        { this.renderCampsite(this.props.campsite) }
                    </div>
                </div>
            )
        }
            return <div />;
    }
}

export default CampsiteInfo

//  <div className="row">
//                     <div className="col-md-5 m-1">
//                         {this.renderSelectedCampsite(this.state.selectedCampsite)}
//                     </div>
//                 </div> 

