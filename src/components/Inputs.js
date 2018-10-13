import React, { Component } from "react";
import PropTypes from "prop-types";

class Inputs extends Component {
    render() {
        console.log("Inputs");
        return (
            <form onSubmit={this.props.gridSize} className="inputs">
                {" "}
                <label>
                    Width:
                    {"  "}
                    <input
                        type="number"
                        style={{ width: "48px" }}
                        value={this.props.width}
                        onChange={e => this.props.gridWidth(e.target.value)}
                    />
                </label>
                <label>
                    {"  "}
                    Height:{" "}
                    <input
                        type="number"
                        style={{ width: "48px" }}
                        value={this.props.height}
                        onChange={e => this.props.gridHeight(e.target.value)}
                    />{" "}
                </label>
                <input type="submit" style={{ width: "68px" }} value="Submit" />
            </form>
        );
    }
}

Inputs.protoTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    gridWidth: PropTypes.func.isRequired,
    gridHeight: PropTypes.func.isRequired
};

export default Inputs;
