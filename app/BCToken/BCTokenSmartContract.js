import { ethers } from "ethers";
var MongoClient = require('mongodb').MongoClient;
var mongoURL = 'mongodb://localhost:27017/blockcert';
import { BYTE_CODE } from "./ByteCode";
import { ABI } from "./ABI";
var Web3 = require('web3');
var fs = require('fs');
var path = require('path');
var solc = require('solc');
var mysql = require('mysql');
var FileReader = require('filereader');
const bcbcRpcURL = "https://node2.blockcerts.com";
let provider = new ethers.providers.JsonRpcProvider(bcbcRpcURL);

const privateKey = "DB206DB4DD74CC1757CEDEBFAA7AE019DAB874A746465D838ED3264E2DF8C0C5";
let wallet = new ethers.Wallet(privateKey, provider);
var contractDeployedAddress;
var contractDeployedHash;
var effectiveTime = Math.floor(Date.now() / 1000) + (60 * 60 * 24 * (365 + 1));// (in the future a year and a day);
var web3 = new Web3( new Web3.providers.HttpProvider(bcbcRpcURL) );

const BCTokenSmartContract = () =>
{
    console.log("BCTokenSmartContract");
    let overrides = {
        gasPrice: 1
    };

    let factory = new ethers.ContractFactory(ABI, BYTE_CODE.object, wallet);
    
    factory.deploy(
        "0xDe3fab52db68b661ffe42B1123770f2c77a30c27",
        "0x543E94abC312b63b1136A16e0928EBDe8f3CEDd3",
        "0x86136Abb4af28a18d4e857A1513B0df722078d05",
        "0x9960eE65550da5ec7054f307b161eD69E9D47a77",
        overrides)
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

export default BCTokenSmartContract;

/*
address - 0x124B1E120ed110532eF38E7f576d33c366efD398
tx hash - 0x2b90e141c3320e100261852ec1996d8428e5c4e5361c32fedcda61de176bf96d
*/

/*
address - 0xDaFE8b4A66F118aFc5E31cfD92eE1F884FB16d96
tx hash - 0x9350ef22ef73b7c69ee29f756820bb2418f0049d45bddf1de35e1890c0304d96
*/