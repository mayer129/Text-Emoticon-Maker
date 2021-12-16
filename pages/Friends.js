import { useEffect, useState } from 'react'
import { supabase } from "../utils/supabaseClient"
import ToolGroup from '../components/ToolGroup'

export default function Friends() {
    const[friendFavorites, setFriendFavorites] = useState([])
    const[value, setValue] = useState("")

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const printButtonLabel = (event) => {
        console.log(event.target.name);
        navigator.clipboard.writeText(event.target.name)
    }


    let submitForm = e => {
        e.preventDefault()
        retreiveFriend(value)
    }

    const retreiveFriend = async (username) => {
        const { data, error } = await supabase
        .from('favofites')
        .select('entry')
        .eq('id',username);

        
    }
    return ( /* gray background    min size is the height and width of screen */
        <div className="min-h-screen min-w-screen home">
            <p>Hello there</p>
            <form onSubmit={submitForm} className="form ml-6">
                    <input type="text" value={value}
                        onChange={e => setValue(e.target.value)} 
                        className="rounded px-20 py-4 mt-6">
                    </input>
                    <div className="buttons">
                        <button type="submit" className="bg-pink-300 rounded px-12 py-2 m-1 focus:bg-blue-300">Search</button>
                    </div>
                </form>

                <ToolGroup buttons={friendFavorites.map(g => g.entry)} doOnClick={printButtonLabel}/>
        </div>

    )
    
}