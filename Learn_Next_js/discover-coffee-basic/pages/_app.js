import '@/styles/globals.css'
import { createContext, useReducer } from 'react'

export const StoreContext = createContext()


export const actionTypes = {
  SET_LATLONG: "SET_LAT_LONG"
}

const storeReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_LATLONG:
      return {...state, latLong: action.payload.latLong}
  
    default:
      throw new Error(`Unhandled action type `)
  }
}


const StoreProvider = ({children}) => {
  const initialState = {
    latLong: ""
  }
  const [state, dispatch ] = useReducer(storeReducer, initialState)
  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
