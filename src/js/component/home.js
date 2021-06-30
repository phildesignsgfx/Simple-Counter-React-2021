import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	return (
		<div className="text-center mt-5 mx-auto col-2 bg-dark text-light">
			<div className="row d-flex justify-content-center">
				<div className="col-2">
					<i class="fas fa-clock"></i>
				</div>
				<div className="col-1">0</div>
				<div className="col-1">0</div>
				<div className="col-1">0</div>
				<div className="col-1">{props.digit3 % 10}</div>
				<div className="col-1">{props.digit2 % 10}</div>
				<div className="col-1">{props.digit1 % 10}</div>
			</div>
		</div>
	);
}

Home.propTypes = {
	digit1: PropTypes.number,
	digit2: PropTypes.number,
	digit3: PropTypes.number
};
