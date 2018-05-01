import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMap } from '../../actions/index';

import { Modal } from 'react-bootstrap';
import { FieldGroup } from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './AddMap.css';
import { addMap } from "../../actions/index";


class AddMap extends Component {

    constructor(props) {
        super(props);

        this.lat = 0;
        this.lng = 0;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log(e.target.valur);
    }

    handleSubmit(e) {
        console.log(333);
    }

    closeModal(e, action) {
        let modalMindow = document.querySelector('.modal-wrapper');

        if (action == "button") {
            modalMindow.classList.remove('active');

        } else {

            if (!e.target.closest('.modal-wrapper .modal-dialog')) {
                modalMindow.classList.remove('active');
            }
        }
    }

    addPoint(newMap) {
        console.log(3333);
        addMap(this.props.MapStore, newMap);
        console.log(this.props.MapStore);
        console.log(newMap);
    }

    componentDidMount() {
        console.log(this.props.MapStore);
    }

    render() {

        return (
            <div className="modal-wrapper" onClick={(e) => this.closeModal(e, "modal")}>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Add map</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Enter coordinates of the point.</p>

                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="exampleEmail">Longitude</Label>
                                <Input type="number" value={this.lat} ref={this.lat} name="lat"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Latitude</Label>
                                <Input type="number" value={this.lng} ref={this.lng} onChange={this.handleChange} ref={this.lng} name="lag"/>
                            </FormGroup>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={(e) => this.closeModal(e, "button")} >Close</Button>
                        <Button bsStyle="primary" type="submit" >Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        MapStore: state.MapStore
    }
}

export default connect(mapStateToProps, { addMap })(AddMap);
