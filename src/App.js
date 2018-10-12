import React, { Component } from "react";
import Inputs from "./components/Inputs";
import Cell from "./components/Cell";
import "./App.css";

class App extends Component {
    render() {
        const arr1 = [];
        for (let i = 0; i < 100; i += 1) {
            arr1.push(<Cell key={i} />);
        }
        return (
            <div className="App">
                <div className="container">
                    <h1 id="heading">Pixel Art Maker</h1>
                    <Inputs />
                    <div className="grid">{arr1}</div>
                </div>
            </div>
        );
    }
}

export default App;
