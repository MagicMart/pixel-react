import React from "react";

function PaletteCells(props) {
    return (
        <div
            className="cell"
            onClick={e => props.colorChoice(e)}
            style={{ background: props.color }}
        />
    );
}

export default PaletteCells;
