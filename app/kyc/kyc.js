import { ethers } from "ethers";
import { BYTE_CODE } from "./ByteCode";
import { ABI } from "./ABI";
var Web3 = require('web3');

const bcbcRpcURL = "https://node2.blockcerts.com";
let provider = new ethers.providers.JsonRpcProvider(bcbcRpcURL);

const privateKey = "DB206DB4DD74CC1757CEDEBFAA7AE019DAB874A746465D838ED3264E2DF8C0C5";
let wallet = new ethers.Wallet(privateKey, provider);
var web3 = new Web3( new Web3.providers.HttpProvider(bcbcRpcURL) );

const KycSmartContract = () =>
{
    console.log("KycSmartContract");
    wallet.getBalance()
        .then(balance =>
        {
            var etherString = balance.toString();
            console.log("Balance - ", etherString);
        })
        .catch(error => 
        {
            console.error(error);
        });

    let overrides = {
        gasPrice: 1
    };

    let factory = new ethers.ContractFactory(ABI, BYTE_CODE.object, wallet);
    factory.deploy()
        // factory.deploy("Hello Smart Contract", overrides)
        .then(contract =>
        {
            console.log(contract.address);
            console.log(contract.deployTransaction.hash);

            var paymentInstance = new web3.eth.Contract(ABI,contract.address);
            console.log( "KYC Instance Created" );

        })
        .catch(error =>
        {
            console.log("Error", error);
        });

    
}

export default KycSmartContract;