import { useEffect, useState } from 'react'
import { supabase } from "../utils/supabaseClient"

export default function Friends() {
    const[friendFavorites, setFriendFavorites] = useState([])

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    let submitForm = e => {
        e.preventDefault()
        retreiveFriend(query)
    }

    const retreiveFriend = async (username) => {
        const { data, error } = await supabase
        .from('favofites')
        .select('entry')
        .eq('id',username);
        setDataType(data);

        
    }
    return ( /* gray background    min size is the height and width of screen */
        <div className="min-h-screen min-w-screen home">
            <p>Hello there</p>
        </div>
    )
    
}