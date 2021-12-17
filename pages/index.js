import Head from 'next/head'
import { Auth } from '@supabase/ui'
import { useState } from 'react'
import Link from 'next/link'

import { supabase } from "../utils/supabaseClient"
import EmoticonApp from '../components/EmoticonApp'

export default function Home() {
  // gets the logged in user from Auth.UserContextProvider
  // if no user is logged in, user will be null
  // if a user is logged in, user will be an object with user info
  const { user } = Auth.useUser()

  return ( /* gray background    min size is the height and width of screen */
    <div className="min-h-screen min-w-screen home">
      <Head>
        <title>Text Emoticon Maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-auto " className = "home">
        {
          user ? (<div>
            <EmoticonApp user={user}/>
            <>
              <Link href="Friends">
                <button type="button" className="rounded p-1 navigateButtons">
                  Friend's Page
                </button>
              </Link>
            </>
            <button onClick={async () => {
              let { error } = await supabase.auth.signOut()
              if (error) { console.log(error) }
            }}
            className="rounded p-1 navigateButtons">
              Logout
            </button>
            </div>
          ) : (
            <div className="home">
              <Auth supabaseClient={supabase} socialLayout="horizontal" socialButtonSize="xlarge" />
            </div>
          )
        }
      </main>
      <style jsx>{`
        .home{
          background:#e0e0e0;
        }
        .navigateButtons {
          box-shadow:inset 0px 1px 0px 0px #ffffff;
          background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
          background-color:#ffffff;
          border-radius:6px;
          border:1px solid #dcdcdc;
          display:inline-block;
          cursor:pointer;
          color:#666666;
          font-family:Arial;
          font-size:15px;
          font-weight:bold;
          padding:6px 24px;
          text-decoration:none;
          text-shadow:0px 1px 0px #ffffff;
          margin-left:30px;
          }
          .navigateButtons:hover {
            background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
            background-color:#f6f6f6;
          }
          .navigateButtons:active {
            position:relative;
            top:1px;
          }

      
      `}</style>
    </div>

  )
}