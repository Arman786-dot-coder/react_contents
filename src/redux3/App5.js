import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import StoreProducts from './StoreProducts'

const App5 = () => {
  return (
    // <div>App5</div>

    <>
    <Provider store={store}>
<StoreProducts/>
    </Provider>
    </>
  )
}

export default App5