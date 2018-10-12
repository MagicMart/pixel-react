import React, { Component } from "react";

class Inputs extends Component {
    render() {
        return (
            <div className="inputs">
                {" "}
                <label>
                    Width:
                    {"  "}
                    <input type="number" style={{ width: "48px" }} />
                </label>
                <label>
                    {"  "}
                    Height: <input
                        type="number"
                        style={{ width: "48px" }}
                    />{" "}
                </label>
                <button type="submit" style={{ width: "68px" }}>
                    {" "}
                    Submit
                </button>
            </div>
        );
    }
}

export default Inputs;
