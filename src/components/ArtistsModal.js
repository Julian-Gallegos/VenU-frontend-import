import React from 'react';
import {Modal, Card} from 'react-bootstrap';

class ArtistsModal extends React.Component{
	render(){
		return(
			<>
			<Modal show={this.props.showModalTrue} onHide={this.props.setShowModalFalse}>
				
			</Modal>
			</>
		)
	}
}