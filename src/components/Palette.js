import React from "react";
import PaletteCells from "./PaletteCells";

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
            "white",
            "gray"
        ];
        for (let i = 0; i <= 9; i += 1) {
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
    return <div className="palette">{paletteCells()}</div>;
}

export default Palette;
