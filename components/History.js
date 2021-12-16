import ToolGroup from "./ToolGroup"

const printButtonLabel = (event) => {
    console.log(event.target.name);
    navigator.clipboard.writeText(event.target.name)
}

export default function History({favorites}) {
    return (
        <div>
        <>
            <p className="text-white text-2xl">Your favorites:
            {/*<span className="font-bold">
                {favorites.map(g => ' '+g.entry).toString()}</span>*/}
            </p>
        
        <ToolGroup buttons={favorites.map(g => g.entry)} doOnClick={printButtonLabel}/>
        </>

        <style jsx>{`
            overflow: scroll;
            padding: 30px;
            border-radius: 9px;
            box-shadow: inset 5px 5px 8px #bababa,
        `}</style>
        </div>
    )

    
}