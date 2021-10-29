import 'tailwindcss/tailwind.css'
import { Auth } from '@supabase/ui'
import { supabase } from "../utils/supabaseClient"

function MyApp({ Component, pageProps }) {
  return ( //wrapping entire app in usercontextprovider
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />
    </Auth.UserContextProvider> 
  )
}

export default MyApp
