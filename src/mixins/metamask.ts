import store from "@/store";
import Web3 from "web3/dist/web3.min.js";
import Web3Modal, { CHAIN_DATA_LIST, Provider } from "web3modal";
import { Vue, Options } from "vue-class-component";
import WalletConnectProvider from "@walletconnect/web3-provider";
@Options({})
export default class Metamask extends Vue {

  public async provider() {
    
    let providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: "b50bee145172497d9576a6f79b1209aa",
          chainId:56,
          rpc: {
            // 1: "https://mainnet.infura.io/v3/b50bee145172497d9576a6f79b1209aa",
            56: "https://bsc-dataseed.binance.org",
          },
        }
      },
    };

    let web3modal: any = new Web3Modal({
      network: "mainnet",
      cacheProvider: false,
      providerOptions,

    });
    console.log('function called')
    let provider: any = await web3modal.connect();
    store.commit("set_Provider", provider);
    let web3: any = new Web3(provider);
    let account: any = web3.eth.getAccounts();
    account.then((result) => {
      store.commit("set_WalletAddress", result[0])
      let account: string;
      if (result[0] != null) {
        let nim = result[0].split("");
        account =
          nim[0] +
          nim[1] +
          nim[2] +
          nim[3] +
          "..." +
          nim[37] +
          nim[38] +
          nim[39] +
          nim[40] +
          nim[41]
        store.commit("set_TopbarAcc", account);
      }
    })
    let chain = web3.eth.getChainId();
    chain.then((result) => {
      console.log(result);

      if (result == 4) {
        store.commit("set_chainId", result)
      }
      else {
        try {
          const web3 = new Web3(window.ethereum)
          web3.currentProvider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: Web3.utils.toHex(56) }],
          });
          store.commit("set_chainId", result)
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
        }
      }
    })
  }
}
