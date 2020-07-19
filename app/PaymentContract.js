import { PaymentABI } from "./app/Payments/ABI";

var Web3 = require('web3');
const bcbcRpcURL = "https://node2.blockcerts.com";
let provider = new ethers.providers.JsonRpcProvider(bcbcRpcURL);

const privateKey = "DB206DB4DD74CC1757CEDEBFAA7AE019DAB874A746465D838ED3264E2DF8C0C5";
let wallet = new ethers.Wallet(privateKey, provider);
var web3 = new Web3( new Web3.providers.HttpProvider(bcbcRpcURL) );

function paymentContract(contractAbi, contractAddress) {
    var paymentInstance = new web3.eth.Contract(ABI,contract.address);
    console.log( "Payment Instance Created" );
}

paymentContract(PaymentABI, "0xF4D7489e0B472ee96f3AaC657674640E3D754D16");

export default PaymentContract