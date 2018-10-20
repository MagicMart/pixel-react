import React from "react";
import PaletteCells from "./PaletteCells";
import PropTypes from "prop-types";

function Palette(props) {
    const paletteCells = () => {
        let arr = [];
        const colors = [
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "indigo",
            "violet",
            "black",
            "#ffffff",
            "gray"
        ];
        for (let i = 0; i < colors.length; i += 1) {
            arr = [
                ...arr,
                <PaletteCells
                    colorChoice={props.colorChoice}
                    color={colors[i]}
                    key={i}
                />
            ];
        }
        return arr;
    };
    return (
        <div className="palette">
            {paletteCells()}{" "}
            <div
                className="cell"
                onClick={e => props.colorChoice(e)}
                style={{
                    margin: "0 0 0 5px",
                    background: "white",
                    border: "2px solid black"
                }}
            >
                E
            </div>
        </div>
    );
}

Palette.propTypes = {
    colorChoice: PropTypes.func.isRequired
};

export default Palette;
