import { ethers } from "ethers";
import { ABI } from "./ABI";

const bcbcRpcURL = "https://node2.blockcerts.com";
let provider = new ethers.providers.JsonRpcProvider(bcbcRpcURL);

const privateKey = "DB206DB4DD74CC1757CEDEBFAA7AE019DAB874A746465D838ED3264E2DF8C0C5";
let wallet = new ethers.Wallet(privateKey, provider);

export const SimpleStorageSmartContract_getValue = () =>
{
    let contractAddress = "0x22C0b40991c2DbAc876070674ca2CFb06De9c8Fa";
    let contract = new ethers.Contract(contractAddress, ABI, wallet);
    contract.getValue()
        .then(currentValue =>
        {
            console.log(currentValue);
        })
        .catch(error =>
        {
            console.log(error);
        });
}

export const SimpleStorageSmartContract_setValue = (value) =>
{
    let contractAddress = "0x22C0b40991c2DbAc876070674ca2CFb06De9c8Fa";
    let contract = new ethers.Contract(contractAddress, ABI, wallet);

    //override since this value is higher by default and bcbc uses diff protocol
    let overrides = {
        gasPrice: 1
    };

    contract.setValue(value, overrides)
        .then(tx =>
        {
            console.log(tx);
        })
        .catch(error =>
        {
            console.log(error);
        });
}

// export default { SimpleStorageSmartContractFunctions }