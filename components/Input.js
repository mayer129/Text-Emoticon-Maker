import { useState } from "react"
import ToolGroup from "./ToolGroup"
import History from "./History"

export default function Input({handleSubmit}) {
    const [value, setValue] = useState("")
    
    const printButtonLabel = (event) => {
        console.log(event.target.name);
        setValue(value + event.target.name);
    }

    let submitForm = e => {
        e.preventDefault()
        if(value !== "") {
            handleSubmit(value)
            {/*setValue("")*/}
        }  
    }

    return (
        <>
        <body className="gallery">
            <div className="tools">
                
                
                <div className = "eyesWrapper">
                    <div className = "eyesTitle">
                        <h1>Eyes</h1>
                    </div>
                    <div className = "eyes">
                        <ToolGroup buttons={["◕", "˘", "ↀ", " ͡⚆", "ꉺ", "￢","ට","⊙","ಠ ","ಥ"," ͡°","༎ຶ","⇀","↼","◔","≖","•̀","•́","-","•᷄","ಠಿ"]} doOnClick={printButtonLabel}/>
                    </div>
                </div>

                
                
                <div className = "armsWrapper">
                    <div className = "armsTitle">
                        <h1>Arms</h1>
                    </div>
                    <div className= "arms" >
                        <ToolGroup buttons={["╰","╯", "ԅ", "و", "ﾉ", "ε","з", "☞","┗","┓","ヾ(",")ﾉ彡","ᕕ", "ᕗ","ง","づ"]} doOnClick={printButtonLabel}/>
                    </div>
                </div>

                <div className = "accWrapper">
                    <div className = "accTitle">
                        <h1>Accessories</h1>
                    </div>
                    <div className="acc">
                        <ToolGroup buttons={["♡", "˶", "✿", ".", "ʕ", "ʔ","╬"]} doOnClick={printButtonLabel}/>
                    </div>
                </div>
                

                
                <div className = "facesWrapper">
                    <div className = "facesTitle">
                        <h1>Faces</h1>
                    </div>
                    <div className="faces">
                        <ToolGroup buttons={[" ͜ʖ", "‿", "Ｕ", "ᴥ", "3", "△","﹏","ᆺ","ᐛ","ཀ","𓋰"," ͟ʖ","‸","︿","Д","╭╮"]} doOnClick={printButtonLabel}/>
                    </div>
                </div>
                

                
                <div className = "miscWrapper">
                    <div className = "miscTitle">
                        <h1>--- Miscellaneous ---</h1>
                    </div>
                    <div className="misc">
                        <ToolGroup buttons={["ততততত", "𓆏", "❅", "✂", "ଘ", "ლ"," ҉","♪"]} doOnClick={printButtonLabel}/>
                    </div>
                </div>
                
            </div>
            <div className = "userInputs">
                <form onSubmit={submitForm} className="form ml-6">
                    <input type="text" value={value}
                        onChange={e => setValue(e.target.value)} 
                        className="rounded px-20 py-4 mt-6">
                    </input>
                    <div className="buttons">
                        <button type="submit" className="bg-pink-300 rounded px-12 py-2 m-1 focus:bg-blue-300">Save</button>
                        <button type="button" className="bg-pink-300 rounded px-12 py-2 m-1 focus:bg-blue-300" onClick={() => {navigator.clipboard.writeText(value)}}>Copy</button>
                    </div>
                </form>
            </div>
            

        </body>
        <style jsx>{`
            
            .gallery {
                height: 80%;
                display: grid;
                /*justify-content: center;*/
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(1, 1fr);
                grid-template-areas: 
                    "a b";
            }

            


            .tools {
                overflow:hidden;
                grid-area: a;
                display: grid;
                /*justify-content: center;*/
                gap: 30px;
                padding: 50px;
                grid-template-columns: repeat(6, 1fr);
                grid-template-rows: repeat(2, 200px);
                grid-template-areas: 
                    "a a b b c c"
                    "d d d e e e"
            }

            .eyes {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex-wrap: wrap;
                

            }

            .arms {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex-wrap: wrap;
            }

            .faces {
                display: flex;
                flex-direction: column;
                justify-content: center;
                flex-wrap: nowrap;
            }

            .misc {
                
                display: flex;
                flex-direction: column;
                justify-content: center;
                flex-wrap: wrap;

            }

            .acc {
                
                display: flex;
                flex-direction: column;
                justify-content: center;
                flex-wrap: wrap;
            }

            .form,.intput {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content:center;
                height: 40%;
                margin:auto;
                

            }
            .buttons {
                display: flex;
                flex-direction: row;

                
            }

            h1 {
                text-align: center;
                color: white;
                font-size: 1.5em;

            }

            .userInputs{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content:center;
                display:inline-block;
                margin-top:20%;

            }

            input {
                text-align: center;
                height:50%;
                
            }

            .eyesWrapper {
                grid-area: a;
                overflow:scroll;
                padding: 30px;
                border-radius: 9px;
                background: #e0e0e0;
                box-shadow: inset 5px 5px 8px #bababa,
                inset -5px -5px 8px #ffffff;

            }
            .armsWrapper {
                grid-area: b;
                overflow: scroll;
                padding: 30px;
                border-radius: 9px;
                background: #e0e0e0;
                box-shadow: inset 5px 5px 8px #bababa,
                inset -5px -5px 8px #ffffff;

                
            }
            .miscWrapper {
                grid-area: e;
                overflow: scroll;
                padding: 30px;
                border-radius: 9px;
                background: #e0e0e0;
                box-shadow: inset 5px 5px 8px #bababa,
                inset -5px -5px 8px #ffffff;

            }
            .facesWrapper {
                grid-area: d;
                overflow: scroll;
                padding: 30px;
                border-radius: 9px;
                background: #e0e0e0;
                box-shadow: inset 5px 5px 8px #bababa,
                inset -5px -5px 8px #ffffff;

            }
            .accWrapper {
                grid-area: c;
                overflow: scroll;
                padding: 30px;
                border-radius: 9px;
                background: #e0e0e0;
                box-shadow: inset 5px 5px 8px #bababa,
                inset -5px -5px 8px #ffffff;

            }


            .eyesTitle {
                
            }
            
            .armsTitle {
                
            }

            .miscTitle {
                

            }
            .facesTitle {
               
            }
            .accTitle{
                

            }

        `}</style>
        </>
    )
}


