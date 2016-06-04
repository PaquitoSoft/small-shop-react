import React from 'react';
import events from '../../plugins/events-bus';

class Popup extends React.Component {

	constructor() {
		super();

		this.state = {
			visible: false,
			title: '',
			message: ''
		};

		this.onShowModal = this.onShowModal.bind(this);
		this.hide = this.hide.bind(this);
	}

	onShowModal(message, title = 'Oops! There was a problem') {
		this.setState({
			visible: true,
			title,
			message
		});
	}

	hide() {
		this.setState({ visible: false });
	}

	componentDidMount() {
		events.bus.on(events.types.SHOW_MODAL, this.onShowModal);
	}

	render() {
		const visibilityStyle = {
			display: this.state.visible ? 'block': 'none'
		};

		return (
			<div>
				<div className="modal-backdrop fade in" style={visibilityStyle}></div>

				<div className="modal fade in" id="popup" style={visibilityStyle}>
					<div className="modal-dialog">
						<div className="modal-body">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close" onClick={this.hide}>×</button>
									<h4 className="modal-title">{this.state.title}</h4>
								</div>
								<div className="modal-body">
									<p className="nobottommargin">{this.state.message}</p>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-default" onClick={this.hide}>Close</button>
									{/* <button type="button" className="btn btn-primary">Save changes</button> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Popup;
