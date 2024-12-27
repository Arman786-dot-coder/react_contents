import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import StoreProducts from './StoreProducts'

const App4 = () => {
  return (
    // <div>App4</div>
    <>
    <Provider store={store}>
        <StoreProducts/>
    </Provider>
    </>
  )
}

export default App4