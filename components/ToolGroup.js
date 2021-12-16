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
                <button key={i} name={buttonLabel} onClick={(event) => handleClick(event, i)} className={i=== clickedId ? "text-blue-300 border-2 border-blue-300 rounded p-1 m-px" : "text-pink-300 border-2 border-pink-300 rounded p-1 m-px"}>
                    {buttonLabel}
                </button>
            ))}
            <style jsx>{`
            `}</style>
        </>
        
    )
}

export default ToolGroup;