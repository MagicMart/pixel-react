import React, { Component } from "react";
import Inputs from "./components/Inputs";
import Cell from "./components/Cell";
import "./App.css";

class App extends Component {
    state = {
        width: 10,
        height: 10,
        clear: false,
        isMouseDown: false
    };

    gridWidth = width => {
        if (width >= 0 && width <= 30) {
            this.setState({ width, clear: true });
        }
    };
    gridHeight = height => {
        if (height >= 0 && height <= 30) {
            this.setState({ height, clear: true });
        }
    };
    resetClear = () => {
        this.setState({ clear: false });
        console.log("clear set to false");
    };
    clearCells = () => {
        this.setState({ clear: true });
    };
    mouseDownUp = () => {
        console.log("MouseDown");
        this.setState(
            prevState =>
                prevState.isMouseDown
                    ? { isMouseDown: false }
                    : { isMouseDown: true }
        );
    };

    componentDidUpdate() {
        if (this.state.clear) {
            this.resetClear();
        }
    }

    render() {
        console.log("App");
        const arr1 = [];
        for (let i = 0; i < this.state.width * this.state.height; i += 1) {
            arr1.push(
                <Cell
                    isMouseDown={this.state.isMouseDown}
                    clear={this.state.clear}
                    key={i}
                />
            );
        }

        return (
            <div className="App">
                <div className="container" onMouseUp={this.mouseDownUp}>
                    <h1 id="heading">Pixel Art Maker</h1>
                    <Inputs
                        width={this.state.width}
                        height={this.state.height}
                        gridWidth={this.gridWidth}
                        gridHeight={this.gridHeight}
                        clearCells={this.clearCells}
                    />
                    <div
                        className="grid"
                        onMouseDown={this.mouseDownUp}
                        style={{
                            width: this.state.width * 20 + "px",
                            height: this.state.height * 20 + "px"
                        }}
                    >
                        {arr1}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
