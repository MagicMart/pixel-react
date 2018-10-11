import React, { Component } from "react";
import Cell from "./components/Cell";
import "./App.css";

class App extends Component {
    render() {
        const arr1 = [];
        for (let i = 0; i < 100; i += 1) {
            arr1.push(<Cell />);
        }
        return (
            <div className="App">
                <div className="container">
                    <h1>Pixel Art Maker</h1>
                    {arr1}
                </div>
            </div>
        );
    }
}

export default App;
