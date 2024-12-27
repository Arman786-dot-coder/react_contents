import React from 'react'
import { Provider } from 'react-redux'
import StoreProduct from './StoreProduct'
import store from './store'

const App6 = () => {
  return (
    // <div>App6</div>
    <>
    <Provider store={store}>
      
      <StoreProduct/>
    </Provider>
    </>
  )
}

export default App6