import React from 'react'
import Addtodo from './components/Addtodo'
import Printtodo from './components/Printtodo'
import { Provider } from 'react-redux'
import {store} from './app/store'

export default function App() {
  return (
    <Provider store={store}>
      <Addtodo/>
      <Printtodo/>
      </Provider>
    
  )
}
