import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { selectMap } from '../../actions/index';
import './Card.css';


class MapCard extends Component {

    render() {
        var data = this.props.data;

        return (
            <Card className="card">
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{data}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button
                        onClick={this.props.selectMap(1)}
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