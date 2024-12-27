import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import CounterApp from './CounterApp'

const App7 = () => {
  return (
    <div>
        <Provider store={store}>
<CounterApp/>
            </Provider>
</div>
  )
}

export default App7