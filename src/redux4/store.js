// src/store.js
import { configureStore } from '@reduxjs/toolkit';

// Import slices here
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your reducers here
  },
});

export default store;
