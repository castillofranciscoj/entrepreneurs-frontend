import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const login = () => {
    const {data: session} = useSession()


    if (session){
        return(
            <div>
                <p>Welcome, {session.user.name}</p>
                <p><button onClick={() => signOut()}>Sign out</button></p>
            </div>
        )

    } else {
        return(
            <>
            <div>
                <p>You are not signed in.</p>
                <button onClick={() => signIn()}>Sign in</button>
            </div>
            </>
        )
    }
}

export default login