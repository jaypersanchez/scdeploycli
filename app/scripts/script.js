import { ethers } from "ethers";
var Web3 = require('web3');
var fs = require('fs');
var path = require('path');
var solc = require('solc');
var FileReader = require('filereader');
// private geth network
//const bcbcRpcURL = "http://localhost:8545";
// bcbc node
//const bcbcRpcURL = "https://node2.blockcerts.com";
const bcbcRpcURL = "http://af0526e28df4.ngrok.io";
let provider = new ethers.providers.JsonRpcProvider(bcbcRpcURL);
import { BYTE_CODE } from "./ByteCode";
import { ABI } from "./ABI";
//private geth network private key
//cons privateKey = "";
//bcbc KYCd
const privateKey = "DB206DB4DD74CC1757CEDEBFAA7AE019DAB874A746465D838ED3264E2DF8C0C5";
//bcbc not KYCd
//const privateKey = "0x8abd01e8c170fd3ac608a9c5e5ab7be376108dec011075f7e94dc789668fcd17";
let wallet = new ethers.Wallet(privateKey, provider);
var contractDeployedAddress;
var contractDeployedHash;
var web3 = new Web3( new Web3.providers.HttpProvider(bcbcRpcURL) );

const script = () => {
    
    //use solc to get contract ABI and Byte.  Get contract path
    /*const input = fs.readFileSync("../BlockCerts_ICO/contracts/Script.sol", 'UTF-8');
    const output = solc.compile(input,1);
    console.log(output.toString())*/
    //const bytecode = output.contracts['Script'].bytecode;
    //const abi = JSON.parse(output.contracts['Script'].interface);

    //console.log('\nBytecode: ', bytecode, '\nABI: ', abi);

    let factory = new ethers.ContractFactory(ABI, BYTE_CODE.object, wallet);
    factory.deploy()
        .then(contract =>
        {

            //get file content ABI and BYTE_CODE
            var reader = new FileReader();
            var abi = ABI;
            var bin = BYTE_CODE.object;
            console.log(contract.address);
            console.log(contract.deployTransaction.hash);
        })
        .catch(error =>
        {
            console.log("Error", error);
        });
}

export default script;
