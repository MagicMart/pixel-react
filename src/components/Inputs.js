import React, { Component } from "react";

class Inputs extends Component {
    render() {
        console.log("Inputs");
        console.log("gridwifth func", this.props.gridWidth);
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

export default Inputs;
