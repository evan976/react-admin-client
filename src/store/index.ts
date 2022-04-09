import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { accountSlice } from '@/store/features/acountSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const rootReducer = combineReducers({
  account: accountSlice.reducer
})

const persistConfig = {
  key: 'nestpress',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof rootReducer>

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultRootState extends RootState {}
}
