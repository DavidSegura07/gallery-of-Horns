import React from "react";
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
    render() {
        // console.log(this.props.beast.image_url)
        return(
            <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.beast.image_url} alt={this.props.beast.title} style={{ width: '100%' }} />
                    <p>{this.props.beast.description}</p>
                </Modal.Body>
            </Modal>
        );
    }
}

export default SelectedBeast;