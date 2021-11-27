import React,{createContext, useState} from 'react'


export const FirebaseContext=createContext(null)

export const AuthContext =createContext(null)


export default function Context({children}){
    const [user,setUser]=useState(null)
console.log(user)
    return(
      <AuthContext.Provider value={{user,setUser}}>
          {children}
      </AuthContext.Provider>
    )
}