import React, { Component } from "react";
import Inputs from "./components/Inputs";
import Cell from "./components/Cell";
import "./App.css";

class App extends Component {
    state = { width: 10, height: 10, clear: false };
    gridWidth = width => {
        console.log("gridwidth", width);
        this.setState({ width: width, clear: true });
    };
    gridHeight = height => {
        this.setState({ height: height, clear: true });
    };
    resetClear = () => {
        this.setState({ clear: false });
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
