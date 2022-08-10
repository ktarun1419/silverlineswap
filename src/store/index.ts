import { createStore } from 'vuex'

export default createStore({
  state: {
    topbarAcc:'Connect',
    provider:'',
    walletAddress:'',
    chainId:'',
    usdtbalance:0

  },
  getters: {
  },
  mutations: {
    set_TopbarAcc(state, payload){
      state.topbarAcc=payload
    },
    set_Provider(state,payload){
      state.provider=payload
    },
    set_WalletAddress(state,payload){
      state.walletAddress=payload
    },
    set_chainId(state,payload){
      state.chainId=payload
    },
    set_usdtBalance(state,payload){
      state.usdtbalance=payload/100000000000000000
    }
  },
  actions: {
  },
  modules: {
  }
})
