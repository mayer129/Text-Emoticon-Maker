import { useEffect, useState } from 'react'
import { supabase } from "../utils/supabaseClient"
import History from '../components/History'
import Input from '../components/Input'

export default function EmoticonApp({user}) {
    const [favorites, setFavorites] = useState([])
  
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
  
    // error and loading consts
  
    useEffect(() => {
      // run the fetchGratitudes() function
      // after the initial render of the app
      // so we have access to the logged in user
      fetchFavorites()
    }, [])
  
    const fetchFavorites = async () => {
      // get the gratitudes data from supabase
      // set the value of the gratitudes state to that data
  
      let { data: favorites, error } = await supabase
      .from('favorites')
      .select('entry, date_insert_ts')
  
      if (!error) {
  
  
        setFavorites(favorites)
        setLoading(false)
      } else {
        console.log(error)
        setLoading(false)
        setError(error)
      }
    }
  
    const addFavorite = async (entry) => {
      const { data, error } = await supabase
      .from('favorites')
      .insert([
      { id: user.id, entry: entry },
    ])
  
      if (error) {
        console.log(error)
        setError(error)
        } else {
        setFavorites([...favorites, {'entry': entry, 'date_insert_ts': null}])
      }
      setLoading(false)
    }
  
    if(loading) {
      return <p> Loading... </p>
    }
  
    if(error) {
      return <p>{ error }</p>
    }

    return ( /* gray background    min size is the height and width of screen */
      <div className="min-w-screen" className = "background">
        <main className="container mx-auto max-w-auto " className = "mainLayout">
            <div className="text-white text-6xl">
                <h1>
                    Hello, <span className="text-pink-300">{user.email}</span>!
                </h1>
            </div>
            <Input handleSubmit={addFavorite}></Input>
            {
                favorites.length > 0 && 
                <History favorites={favorites}></History>
            }

        </main>
        <style jsx>{`

  
        `}</style>
      </div>
  
    )
  }

