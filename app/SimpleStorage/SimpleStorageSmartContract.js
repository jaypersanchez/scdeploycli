import { ethers } from "ethers";
import { BYTE_CODE } from "./ByteCode";
import { ABI } from "./ABI";


const bcbcRpcURL = "https://node2.blockcerts.com";
let provider = new ethers.providers.JsonRpcProvider(bcbcRpcURL);

const privateKey = "DB206DB4DD74CC1757CEDEBFAA7AE019DAB874A746465D838ED3264E2DF8C0C5";
let wallet = new ethers.Wallet(privateKey, provider);

const SimpleStorageSmartContract = () =>
{
    console.log("SimpleStorageSmartContract");

    //override since this value is higher by default and bcbc uses diff protocol
    let overrides = {
        gasPrice: 1
    };

    let factory = new ethers.ContractFactory(ABI, BYTE_CODE.object, wallet);
    factory.deploy("Hello Smart Contract", overrides)
        .then(contract =>
        {
            console.log(contract.address);
            console.log(contract.deployTransaction.hash);
        })
        .catch(error =>
        {
            console.log("Error", error);
        });
}

export default SimpleStorageSmartContract;

/*
0x22C0b40991c2DbAc876070674ca2CFb06De9c8Fa
0x6ddedef7dcd1eca391e535b761585e1aa8410656884d3280c4b81e82e76cf6e1
*/