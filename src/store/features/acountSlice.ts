import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import store from '@/store'
import * as mainApi from '@/api'
import { UserInfo } from '@/types'

export interface AccountState {
  token: string
  user: UserInfo
}

export interface Account {
  refreshUserInfo(): Promise<UserInfo>
  getToken(): string
  isLogin(): boolean
}

export const accountSlice = createSlice({
  name: 'account',
  initialState: <AccountState>{
    token: '',
    user: {}
  },
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    updateUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.user = Object.assign(state.user, action.payload)
    },
    logout: (state) => {
      state.token = ''
      state.user = {} as UserInfo
    }
  }
})

const { setToken, updateUserInfo, logout } = accountSlice.actions

const accountApi: Account = {
  getToken(): string {
    return store.getState()?.account?.token ?? ''
  },
  refreshUserInfo(): Promise<UserInfo> {
    if (!this.isLogin()) return Promise.reject('not fount token')
    return new Promise<UserInfo>((resolve, reject) => {
      mainApi.userService
        .fetchAdmin()
        .then((res) => {
          store.dispatch(updateUserInfo(res.result))
          resolve(res.result)
        })
        .catch(reject)
    })
  },
  isLogin(): boolean {
    return this.getToken()?.length > 0
  }
}

export { setToken, accountApi, logout, updateUserInfo }
