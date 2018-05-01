import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapCard from './components/MapCard';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import AddMap from './components/AddMap'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { selectMap } from './actions/index'

class App extends Component {

    createListItems() {
        console.log(this.props.MapStore);

        return this.props.MapStore.map((item) => {
            return (
                <Col xs={12} md={6} key={item}><MapCard data={item}></MapCard></Col>
            )
        });
    }

    showAddMapModal() {
        let modalMindow = document.querySelector('.modal-wrapper');

        modalMindow.classList.add('active');
    }

    componentDidMount() {
        selectMap();
    }

    render() {
        return (
            <div className="container">
                {/*should place router here*/}
                <AddMap></AddMap>
                <Grid>
                    <header className="App-header">
                        <h1 className="App-title">Maps example</h1>
                        <Button bsStyle="info" onClick={this.showAddMapModal}>Add new map</Button>
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
        MapStore: state.MapStore
    };
}

export default connect(mapStateToProps, { selectMap })(App);
