import { ethers } from "ethers";
import { BYTE_CODE } from "./ByteCode";
import { ABI } from "./ABI";


const bcbcRpcURL = "https://node2.blockcerts.com";
let provider = new ethers.providers.JsonRpcProvider(bcbcRpcURL);

const privateKey = "30b821f3d04cc818bf795540e4715fd450e64082a13e09bc32c744e6e93d38b3";
let wallet = new ethers.Wallet(privateKey, provider);

export const HashContract = () =>
{
    console.log("HashContract");
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

export const addHash = (accountId, hashId, type, hash, version) =>
{
    let contractAddress = "0x1dA96988677eA0A8647EA65051cD3FC7Ed2FfFeD";
    let contract = new ethers.Contract(contractAddress, ABI, wallet);

    //override since this value is higher by default and bcbc uses diff protocol
    let overrides = {
        gasPrice: 1
    };

    contract.addHashData(accountId, hashId, type, hash, version, overrides)
        .then(tx =>
        {
            console.log(tx);
            // var info = ethers.utils.defaultAbiCoder.decode(['string', 'string', 'string', 'string', 'string'], tx.data);
            // console.log(info);




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
address 0x7DDd353245E3e708eD0FCB9E5f79f35B9086Cb0e
hash 0x749d7020fd937448d1f283614c9d1d845ec8a4987e8f241d7fb848e0de6c4943
*/