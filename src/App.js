import React, { Component } from "react";
import Inputs from "./components/Inputs";
import Cell from "./components/Cell";
import "./App.css";

class App extends Component {
    state = {
        width: 10,
        height: 10,
        clear: false
    };
    gridWidth = width => {
        if (width >= 0 && width <= 30) {
            this.setState({ width, clear: true });
            setTimeout(() => {
                console.log("Is it clear", this.state.clear);
                this.resetClear();
            }, 0);
        }
    };
    gridHeight = height => {
        if (height >= 0 && height <= 30) {
            this.setState({ height, clear: true });
            setTimeout(() => {
                this.resetClear();
            }, 0);
        }
    };
    resetClear = () => {
        if (this.state.clear) {
            this.setState({ clear: false });
            console.log("clear set to false");
        }
    };
    clearCells = () => {
        this.setState({ clear: true });
        setTimeout(() => {
            this.resetClear();
        }, 0);
    };

    render() {
        console.log("App");
        const arr1 = [];
        for (let i = 0; i < this.state.width * this.state.height; i += 1) {
            arr1.push(
                <Cell
                    clear={this.state.clear}
                    resetClear={this.resetClear}
                    key={i}
                />
            );
        }

        return (
            <div className="App">
                <div className="container">
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
