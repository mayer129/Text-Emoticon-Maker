import { useEffect, useState } from 'react'
import Greeting from '../components/Greeting'
import History from '../components/History'
import Input from '../components/Input'

import { supabase } from "../utils/supabaseClient"

export default function GratitudeApp({user}) {
  const [gratitudes, setGratitudes] = useState([])
  const [hasSubmittedToday, setSubmittedToday] = useState(false)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // error and loading consts

  useEffect(() => {
    // run the fetchGratitudes() function
    // after the initial render of the app
    // so we have access to the logged in user
    fetchGratitudes()
  }, [])

  const fetchGratitudes = async () => {
    // get the gratitudes data from supabase
    // set the value of the gratitudes state to that data

    let { data: gratitudes, error } = await supabase
    .from('gratitudes')
    .select('entry, date_insert_ts')

    if (!error) {
      let currentTime = new Date()
      let mostRecentRecordTime = Math.abs(new Date(gratitudes.slice(-1)[0]['date_insert_ts']).getTime())
      let hoursSinceLastSubmission = (mostRecentRecordTime - currentTime) / 3600000
      let didSubmitToday = hoursSinceLastSubmission < 24
      setSubmittedToday(didSubmitToday)


      setGratitudes(gratitudes)
      setLoading(false)
    } else {
      console.log(error)
      setLoading(false)
      setError(error)
    }
  }

  const addGratitude = async (entry) => {
    const { data, error } = await supabase
    .from('gratitudes')
    .insert([
    { id: user.id, entry: entry },
  ])

    if (error) {
      console.log(error)
      setError(error)
      } else {
      setGratitudes([...gratitudes, {'entry': entry, 'date_insert_ts': null}])
      setSubmittedToday(true)
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
    <div className="bg-gray-700 min-w-screen">
      <main className="container mx-auto max-w-prose ">
        <Greeting 
          user={user}
          gratitudes={gratitudes}
          hasSubmittedToday={hasSubmittedToday}
        ></Greeting>
        {
          !hasSubmittedToday && <Input handleSubmit={addGratitude}></Input>
        }
        {
          gratitudes.length > 0 && 
          <History gratitudes={gratitudes}></History>
        }
      </main>
      <style jsx>{`

      `}</style>
    </div>

  )
}