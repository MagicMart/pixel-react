import React, { Component } from "react";
import Inputs from "./components/Inputs";
import Cell from "./components/Cell";
import Palette from "./components/Palette";
import "./App.css";

class App extends Component {
    state = {
        width: 10,
        height: 10,
        color: "black",
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
    };
    clearCells = () => {
        this.setState({ clear: true });
    };
    mouseDown = e => {
        this.setState(() => {
            return { isMouseDown: true };
        });
    };
    mouseUp = () => {
        this.setState(() => {
            return { isMouseDown: false };
        });
    };

    componentDidUpdate() {
        if (this.state.clear) {
            this.resetClear();
        }
    }
    colorChoice = e => {
        this.setState({ color: e.target.style.background });
    };

    render() {
        const cells = () => {
            let arr = [];
            for (let i = 0; i < this.state.width * this.state.height; i += 1) {
                arr = [
                    ...arr,
                    <Cell
                        isMouseDown={this.state.isMouseDown}
                        clear={this.state.clear}
                        key={i}
                        color={this.state.color}
                    />
                ];
            }
            return arr;
        };

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
                    <Palette colorChoice={this.colorChoice} />
                    <div
                        className="grid"
                        onMouseLeave={this.mouseUp}
                        onMouseUp={this.mouseUp}
                        onDragStart={e => {
                            e.preventDefault();
                        }}
                        onMouseDown={this.mouseDown}
                        style={{
                            width: this.state.width * 20 + "px",
                            height: this.state.height * 20 + "px"
                        }}
                    >
                        {cells()}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
