import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapCard from './components/MapCard';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const numbers = [1,2,3,4,5,6,7,8,9];

class App extends Component {

    createListItems() {
        return this.props.maps.map((item) => {
            return (
                <Col xs={12} md={3} key={item}><MapCard data={item}></MapCard></Col>
            )
        });
    }

    render() {
        return (
            <div className="container">
                {/*should place router here*/}
                <Grid>

                    <header className="App-header">
                        <h1 className="App-title">Maps example</h1>
                    </header>
                    <div className="site-content">
                        <Row>
                            {this.createListItems()}
                        </Row>
                    </div>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        maps: state.maps
    };
}

export default connect(mapStateToProps)(App);
