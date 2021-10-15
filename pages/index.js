import Head from 'next/head'
import { useState } from 'react'
import Greeting from '../components/Greeting'
import History from '../components/History'
import Input from '../components/Input'

export default function Home() {
  /* dictionary */
  const [user, setUser] = useState({
    "name": "Travis", 
    "email": "traviswillmayer@gmail.com",
  })
  /* array of gratitudes */
  const [gratitides, setGratitudes] = useState(["tacos", "blankets"])
  const [hasSubmittedToday, setSubmittedToday] = useState(false)

  const addGratitude = (entry) => {
    let newGratitudes = [...gratitides, entry]
    setGratitudes(newGratitudes)
    setSubmittedToday(true)
  }

  return ( /* gray background    min size is the height and width of screen */
    <div className="bg-gray-700 min-h-screen min-w-screen">
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-prose ">
        <Greeting 
          user={user}
          gratitudes={gratitides}
          hasSubmittedToday={hasSubmittedToday}
        ></Greeting>
        {
          !hasSubmittedToday && <Input handleSubmit={addGratitude}></Input>
        }
        {
          gratitides.length > 0 && 
          <History gratitudes={gratitides}></History>
        }
      </main>
      <style jsx>{`

      `}</style>
    </div>

  )
}