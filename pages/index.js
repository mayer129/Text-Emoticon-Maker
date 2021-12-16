import Head from 'next/head'
import { Auth } from '@supabase/ui'
import { useState } from 'react'

import { supabase } from "../utils/supabaseClient"
import EmoticonApp from '../components/EmoticonApp'

export default function Home() {
  // gets the logged in user from Auth.UserContextProvider
  // if no user is logged in, user will be null
  // if a user is logged in, user will be an object with user info
  const { user } = Auth.useUser()

  return ( /* gray background    min size is the height and width of screen */
    <div className="bg-gray-700 min-h-screen min-w-screen">
      <Head>
        <title>Text Emoticon Maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-auto ">
        {
          user ? (<div>
            <EmoticonApp user={user}/>
            <button onClick={async () => {
              let { error } = await supabase.auth.signOut()
              if (error) { console.log(error) }
            }}
            className="text-pink-300 border-2 border-pink-300 rounded p-1 hover:border-blue-300 hover:text-blue-300">
              Logout
            </button>
            </div>
          ) : (
            <div className="bg-white">
              <Auth supabaseClient={supabase} socialLayout="horizontal" socialButtonSize="xlarge" />
            </div>
          )
        }
      </main>
      <style jsx>{`
      
      `}</style>
    </div>

  )
}