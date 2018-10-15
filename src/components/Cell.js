import React, { Component } from "react";
import PropTypes from "prop-types";

class Cell extends Component {
    state = { background: "white" };
    changeColor = () => {
        this.setState(function(state) {
            return state.background === "red"
                ? { background: "white" }
                : { background: "red" };
        });
    };
    mousePaint = () => {
        this.setState(function(state) {
            if (state.background !== "red") {
                return { background: "red" };
            }
        });
    };
    clearCell = () => {
        console.log("function clearCell called");
        this.setState({ background: "white" });
    };

    componentDidUpdate() {
        if (this.props.clear && this.state.background !== "white") {
            this.clearCell();
        }
    }

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
                onMouseLeave={() => {
                    if (this.props.isMouseDown) {
                        this.mousePaint();
                    }
                }}
                onMouseEnter={() => {
                    if (this.props.isMouseDown) {
                        this.mousePaint();
                    }
                }}
            />
        );
    }
}

Cell.propTypes = {
    clear: PropTypes.bool.isRequired
};

export default Cell;
