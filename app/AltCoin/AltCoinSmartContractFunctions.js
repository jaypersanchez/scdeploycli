import { ethers } from "ethers";
import { ABI } from "./ABI";

const bcbcRpcURL = "https://node2.blockcerts.com";
let provider = new ethers.providers.JsonRpcProvider(bcbcRpcURL);

const privateKey = "DB206DB4DD74CC1757CEDEBFAA7AE019DAB874A746465D838ED3264E2DF8C0C5";
let wallet = new ethers.Wallet(privateKey, provider);

export const AltCoinSmartContract_getAltCoinInfo = () =>
{
    let contractAddress = "0xD2cf0D2F02D451a10bFE748536C6Bae9343B6a87";
    let contract = new ethers.Contract(contractAddress, ABI, wallet);
    contract.getAltCoinInfo()
        .then(result =>
        {
            console.log(result);
        })
        .catch(error =>
        {
            console.log(error);
        });
}

export const AltCoinSmartContract_getPoolBalance = (address) =>
{
    let contractAddress = "0xD2cf0D2F02D451a10bFE748536C6Bae9343B6a87";
    let contract = new ethers.Contract(contractAddress, ABI, wallet);
    contract.getPoolBalance(address)
        .then(result =>
        {
            console.log(result);
        })
        .catch(error =>
        {
            console.log(error);
        });
}


export const AltCoinSmartContract_balanceOf = (address) =>
{
    let contractAddress = "0xD2cf0D2F02D451a10bFE748536C6Bae9343B6a87";
    let contract = new ethers.Contract(contractAddress, ABI, wallet);
    contract.balanceOf(address)
        .then(balance =>
        {
            console.log(balance)
        })
        .catch(error =>
        {
            callback(error);
        });
}

export const AltCoinSmartContract_transfer = (privateKey, to, amount) =>
{
    let contractAddress = "0xD2cf0D2F02D451a10bFE748536C6Bae9343B6a87";
    var wallet = new ethers.Wallet(privateKey, provider);
    let contract = new ethers.Contract(contractAddress, ABI, wallet);
    var signer = contract.connect(wallet);

    let overrides = {
        gasPrice: 1,
    };

    var bigAmount = new ethers.utils.BigNumber(amount);

    signer.transfer(to, bigAmount, overrides)
        .then(r => console.log(r))
        .catch(e => console.log(e));
}