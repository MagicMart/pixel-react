import React, { Component } from "react";

class Cell extends Component {
    state = { background: "white" };
    changeColor = () => {
        this.setState(function(state) {
            return state.background === "red"
                ? { background: "white" }
                : { background: "red" };
        });
    };
    render() {
        return (
            <div
                className="cell"
                style={{
                    background: this.state.background,
                    border:
                        this.state.background === "white"
                            ? "black solid 1px"
                            : `${this.state.background} solid 1px`
                }}
                onClick={() => this.changeColor()}
            />
        );
    }
}

export default Cell;
