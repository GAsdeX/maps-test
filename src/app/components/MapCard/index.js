import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { selectMap } from '../../actions/index';
import './Card.css';
import SimpleMap from "../MapPreview";


class MapCard extends Component {

    render() {
        var data = this.props.data;

        return (
            <Card className="card">
                <SimpleMap data={data}/>

                <CardBody>
                    <CardTitle>{data.name}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button
                    >
                        Button
                    </Button>
                </CardBody>
            </Card>

        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectMap: selectMap
    }, dispatch);
}

export default connect(matchDispatchToProps)(MapCard);