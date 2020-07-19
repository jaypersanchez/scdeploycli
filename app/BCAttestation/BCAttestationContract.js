import { ethers } from "ethers";
import { BYTE_CODE } from "./ByteCode";
import { ABI } from "./ABI";


const bcbcRpcURL = "https://node2.blockcerts.com";
let provider = new ethers.providers.JsonRpcProvider(bcbcRpcURL);

const privateKey = "DB206DB4DD74CC1757CEDEBFAA7AE019DAB874A746465D838ED3264E2DF8C0C5";
let wallet = new ethers.Wallet(privateKey, provider);

export const BCAttestationContract = () =>
{
    console.log("BCAttestationContract");
    // wallet.getBalance()
    //     .then(balance =>
    //     {
    //         var etherString = balance.toString();
    //         console.log("Balance - ", etherString);
    //     })
    //     .catch(error => 
    //     {
    //         console.error(error);
    //     });

    let overrides = {
        gasPrice: 1
    };

    let factory = new ethers.ContractFactory(ABI, BYTE_CODE.object, wallet);
    factory.deploy(overrides)
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

export const createAttestationData = (accountId, hashId, hashType, hash, version) =>
{
    let contractAddress = "0xeDa44C87299663A058745E2aC9f7EE160EA893fF";
    let contract = new ethers.Contract(contractAddress, ABI, wallet);

    //override since this value is higher by default and bcbc uses diff protocol
    let overrides = {
        gasPrice: 1
    };

    contract.createAttestationData(accountId, hashId, hashType, hash, version, overrides)
        .then(tx =>
        {
            console.log(tx);
            var info = ethers.utils.defaultAbiCoder.decode(['string', 'string', 'string', 'string', 'string'], tx.data);
            console.log(info);




            // getLogs.then((logs) =>
            // {
            //     logs.forEach((log) =>
            //     {
            //         console.log(iface.parseLog(log));
            //     });
            // });

        })
        .catch(error =>
        {
            console.log(error);
        });
}

// export default BCAttestationContract;

/*
address 0xeDa44C87299663A058745E2aC9f7EE160EA893fF
hash 0x6b955a1e16f80845ab4a2d83369fa088d708ba5409f2988c68170405859847f1
*/