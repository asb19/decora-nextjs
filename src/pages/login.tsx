import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'

const Login = () => {
    const {data: session} = useSession()
    if(session) {
        return (
            <div>
                <p> welcome, {session.user?.email} </p>
            <button onClick={()=> signOut()}>Sign Out</button>
            </div>
          )
    }
  return (
    <div>
        <p>
            You are not signed in
        </p>
        <button onClick={()=> signIn()}>Sign In</button>
    </div>
  )
}

export default Login