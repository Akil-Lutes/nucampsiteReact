import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';

// Campsite info component with text

    function RenderCampsite({campsite}) {
        return(
                <div className="col-md-5 m-1">
                    <Card>
                        <CardImg top src={campsite.image} alt={campsite.name} />
                        <CardBody>
                            <CardText>{campsite.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
    }

    function RenderComments({comments}) {
        if (comments){
        return(
            <div className="col-md-5 m-1">
            <h4>Comments</h4>
            {comments.map((comment) => {
                return <div key={comment.id}> 
                {comment.text}
                <br></br>
                --{comment.author}, {' '}
                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                <br></br>
                <br></br>
                </div>
            })}
            <CommentForm />
            </div>
            
            )
        }
        <div/>
    }
    
    function CampsiteInfo(props) {
        if (props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>{props.campsite.name}</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            );
        }
        return <div />;
    }
    
    
    export class CommentForm extends Component {

        toggleModal() {
            this.props.toggleModal({isModalOpen: !this.props.isModalOpen})
        }
        
        render() {
            return (
                <div>
                    <Button className="success" outline onClick={this.props.toggleModal}><i className="fa fa-pencil" />Submit Comment
                    <Modal isOpen={this.toggleModal} toggle={this.props.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}></ModalHeader>
                            <ModalBody>

                            </ModalBody>

                    </Modal>
                    </Button>
                </div>
            )
        }
    }
    
    
    export default CampsiteInfo;
