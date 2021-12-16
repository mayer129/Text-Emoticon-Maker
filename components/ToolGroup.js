import React, { useState } from "react";

const ToolGroup = ({buttons, doOnClick}) => {

    const [clickedId, setClickedId] = useState(-1);

    const handleClick = (event, id) => {
        setClickedId(id);
        doOnClick(event);
    }

    return (
        <>
            {buttons.map((buttonLabel, i) => (
                <button key={i} name={buttonLabel} onClick={(event) => handleClick(event, i)} className={i=== clickedId ? "clicked" : "unClicked"}>
                    {buttonLabel}
                </button>
            ))}
            <style jsx>{`
                .clicked{
                    margin:10px;
                    padding:5px;
                    border-radius: 9px;
                    background: #e0e0e0;
                    box-shadow: inset 2px 2px 8px #bababa,
                    inset -2px -2px 8px #ffffff;
                }

                .unClicked{
                    margin:10px;
                    padding:5px;
                    border-radius: 9px;
                    background: #e0e0e0;
                    box-shadow:  5px 5px 8px #bababa,
                    -5px -5px 8px #ffffff;
                }
            `}</style>
        </>
        
    )
}

export default ToolGroup;