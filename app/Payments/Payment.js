import { ethers } from "ethers";
import { BYTE_CODE } from "./ByteCode";
import { ABI } from "./ABI";
var Web3 = require('web3');

const bcbcRpcURL = "https://node2.blockcerts.com";
let provider = new ethers.providers.JsonRpcProvider(bcbcRpcURL);

const privateKey = "DB206DB4DD74CC1757CEDEBFAA7AE019DAB874A746465D838ED3264E2DF8C0C5";
let wallet = new ethers.Wallet(privateKey, provider);
var web3 = new Web3( new Web3.providers.HttpProvider(bcbcRpcURL) );

const PermissionSmartContract = () =>
{
    console.log("PaymentSmartContract");
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
    factory.deploy("0x000000000000000000000000000000000000000a", overrides)
        // factory.deploy("Hello Smart Contract", overrides)
        .then(contract =>
        {
            console.log(contract.address);
            console.log(contract.deployTransaction.hash);

            var paymentInstance = new web3.eth.Contract(ABI,contract.address);
            console.log( "Payment Instance Created" );

        })
        .catch(error =>
        {
            console.log("Error", error);
        });

    // let balance = await wallet.getBalance();
    // console.log("Balance - ", etherString);

    // (async () =>
    // {
    //     // Create an instance of a Contract Factory
    //     let factory = new ethers.ContractFactory(abi, bytecode, wallet);

    //     // Notice we pass in "Hello World" as the parameter to the constructor
    //     let contract = await factory.deploy("Hello World");

    //     // The address the Contract WILL have once mined
    //     // See: https://ropsten.etherscan.io/address/0x2bd9aaa2953f988153c8629926d22a6a5f69b14e
    //     console.log(contract.address);
    //     // "0x2bD9aAa2953F988153c8629926D22A6a5F69b14E"

    //     // The transaction that was sent to the network to deploy the Contract
    //     // See: https://ropsten.etherscan.io/tx/0x159b76843662a15bd67e482dcfbee55e8e44efad26c5a614245e12a00d4b1a51
    //     console.log(contract.deployTransaction.hash);
    //     // "0x159b76843662a15bd67e482dcfbee55e8e44efad26c5a614245e12a00d4b1a51"

    //     // The contract is NOT deployed yet; we must wait until it is mined
    //     await contract.deployed()

    // })();
}

export default PermissionSmartContract;