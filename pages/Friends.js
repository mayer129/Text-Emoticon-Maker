import { useEffect, useState } from 'react'
import { supabase } from "../utils/supabaseClient"
import ToolGroup from '../components/ToolGroup'
import FriendHistory from '../components/FriendHistory'
import Link from 'next/link'

export default function Friends(user) {
    const[friendFavorites, setFriendFavorites] = useState([])
    const[value, setValue] = useState("")

    //const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)



    let submitForm = e => {
        e.preventDefault()
        retreiveFriend(value)
    }

    const retreiveFriend = async (username) => {
        const { data, error } = await supabase
        .from('favorites','user')
        .select('entry')
        .eq('user.',username);
        console.log(data)
        if (!error) {
            setFriendFavorites(data)
            //setLoading(false)
          } else {
            console.log(error)
            //setLoading(false)
          } 
    }

    if(error) {
        return <p>{ error }</p>
      }


    return ( /* gray background    min size is the height and width of screen */
        <div className="min-h-screen min-w-screen friends">
            <>
              <Link href="/">
                <button type="button" className="text-pink-300 border-2 border-pink-300 rounded p-1 hover:border-blue-300 hover:text-blue-300 mt-8">
                  Home
                </button>
              </Link>
            </>
            <form onSubmit={submitForm} className="form ml-6">
                    <input type="text" value={value}
                        onChange={e => setValue(e.target.value)} 
                        className="rounded px-20 py-4 mt-6">
                    </input>
                    <div className="buttons">
                        <button type="submit" className="bg-pink-300 rounded px-12 py-2 m-1 focus:bg-blue-300">Search</button>
                    </div>
                </form>
                {
                friendFavorites.length > 0 && 
                <FriendHistory friendFavorites={friendFavorites}></FriendHistory>
                }
       
            <style jsx>{`
                .friends, .buttons {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }
    
            `}</style>
        </div>

    )
    
}