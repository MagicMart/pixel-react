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
    clearCell = () => {
        if (this.state.background !== "white") {
            console.log("componentdid update");
            this.setState({ background: "white" });
        }

        this.props.resetClear();
    };

    componentDidUpdate() {
        if (this.props.clear) {
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
            />
        );
    }
}

Cell.propTypes = {
    clear: PropTypes.bool.isRequired,
    resetClear: PropTypes.func.isRequired
};

export default Cell;
