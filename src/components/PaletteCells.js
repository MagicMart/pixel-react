import React from "react";
import PropTypes from "prop-types";

function PaletteCells(props) {
    return (
        <div
            className="cell"
            onClick={e => props.colorChoice(e)}
            style={{ background: props.color }}
        />
    );
}

PaletteCells.propTypes = {
    colorChoice: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired
};

export default PaletteCells;
