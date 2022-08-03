import { Vue, Options } from "vue-class-component";
import Web3 from "web3/dist/web3.min.js";
@Options({})
export default class data extends Vue {
    /**
     * dataread
     */
    public dataread() {
        var url = "wss://young-still-pine.discover.quiknode.pro/d67ede507589258d59aeb18400ca735721c88eaa/";
        console.log('f called')
        var options = {
            timeout: 30000,
            clientConfig: {
                maxReceivedFrameSize: 100000000,
                maxReceivedMessageSize: 100000000,
            },
            reconnect: {
                auto: true,
                delay: 5000,
                maxAttempts: 15,
                onTimeout: false,
            },
        };
        var web3 = new Web3(new Web3.providers.WebsocketProvider(url, options));
        const subscription = web3.eth.subscribe("pendingTransactions", (err, res) => {
            if (err) console.error(err);
        });
        var init = function () {
            subscription.on("data", (txHash) => {
                        console.log('int1')
                        let tx = web3.eth.getTransaction(txHash);
                        console.log(tx) 
            });
        };

        init();
    }
}