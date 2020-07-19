npm init

npm install --save-dev babel-cli babel-register babel-preset-es2015 babel-preset-stage-2 

npm install babel-preset-env

--execue es6 modules
npm run serve
# Install and use MySQL
npm install mysql --save-dev

To create a username to use in mysql Ver 8.0.12
* mysql -u root -p <if there is a password>
* GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' IDENTIFIED BY 'password';
* GRANT ALL ON *.* TO 'username@localhost' WITH GRANT OPTION;
* mysql -u username -p
* CREATE DATABASE blockcert;
* USE blockcert;
* CREATE TABLE smart_contracts (id int auto_increment, contract_name varchar(50), abi blob,bin blob, deployed_address blob, deployed_txhash blob, primary key(id));

#Deploy contract and interface with alt coin in Geth
1. Must get both ABI and Binary of contract.  Use solc command
        solc -o ../AbiBin --bin --abi ./BlockcertAltCoin.sol /Users/jaypersanchez/BlockCerts_ICO/contracts/Utils.sol /Users/jaypersanchez/BlockCerts_ICO/contracts/interfaces/IERC20Token.sol /Users/jaypersanchez/BlockCerts_ICO/contracts/Owned.sol /Users/jaypersanchez/BlockCerts_ICO/contracts/interfaces/IOwned.sol
2. Clone https://gitlab.1to1core.com/1to1core/blockcerts-smart-contracts
        i. Copy content from the ABI output and paste in the the ABI.js
        ii. Copy content from BIN output and paste in the ByteCode.js file
        iii. from blockcerts-smart-contracts, run "npm start".  This will deploy the smart contract in the BCBC network.  Make sure to note the contract address and contract deployed hash
        iiii. Open terminal and run geth command: geth attach http://node2.blockcerts.com:6111
3. Create instance of BlockcertAltCoin smart contract in Geth
        i. On the geth command console create the following
                var BlockcertAltCoin = web3.eth.contract(<copy and paste the ABI from the ABI file>)
                var altCoinInstance = BlockcertAltCoin.at(<paste the contract deployed address>)
                altCoinInstance.getAltCoinInfo.call() //you should get an output of the alt coin info passed from the constructor

### Developer API Key for development purposes

A wallet address must be certified in the BCBC network and must go through KYC process.  Below is the wallet address that's been certified in the BCBC network that can be used for development purposes.

Wallet Address: 0xB4974728A226702dA7d9a6B9892699aC917D82cF
Private Key: DB206DB4DD74CC1757CEDEBFAA7AE019DAB874A746465D838ED3264E2DF8C0C5

Wallet Address: 0x71b7330971044867EC3534b4997eea365e55c3BC
Private Key: 678bd406de816db51a3ca2f132053aadbe6b7ed984b3bde244800b88fe610c80

apiKey: CBD21B31-FE54-4459-8BB9-75E31CF3DB31

### Deploy contract and interface with alt coin in Geth

1. Must get both ABI and Binary of contract.  Use solc command
        solc -o ../AbiBin --bin --abi ./BlockcertAltCoin.sol /Users/jaypersanchez/BlockCerts_ICO/contracts/Utils.sol /Users/jaypersanchez/BlockCerts_ICO/contracts/interfaces/IERC20Token.sol /Users/jaypersanchez/BlockCerts_ICO/contracts/Owned.sol /Users/jaypersanchez/BlockCerts_ICO/contracts/interfaces/IOwned.sol
2. Clone https://gitlab.1to1core.com/1to1core/blockcerts-smart-contracts
        i. Copy content from the ABI output and paste in the the ABI.js
        ii. Copy content from BIN output and paste in the ByteCode.js file
        iii. from blockcerts-smart-contracts, run "npm start".  This will deploy the smart contract in the BCBC network.  Make sure to note the contract address and contract deployed hash
        iiii. Open terminal and run geth command: geth attach http://node2.blockcerts.com:6111
3. Create instance of BlockcertAltCoin smart contract in Geth
        i. On the geth command console create the following
                var BlockcertAltCoin = web3.eth.contract(<copy and paste the ABI from the ABI file>)
                var altCoinInstance = BlockcertAltCoin.at(<paste the contract deployed address>)
                altCoinInstance.getAltCoinInfo.call() //you should get an output of the alt coin info passed from the constructor

### JDevAltCoin Pragma5

trulle version 5 is installed locally.  Local Truffle commands is located in based directory:
        ./node_modules/truffle/build/cli.bundled.js
To migrate using local Truffle:  ./node_modules/truffle/build/cli.bundled.js migrate --compile-all --reset --network ganache_ui


### Pragma5 Compile Error Changes

* the address reference of "this" needed to be explicitly converted to address data type with syntax address(this)
* Pragma line required to change to: pragma solidity ^0.5.11;
* Required to enable the ABI v2 Coder: pragma experimental ABIEncoderV2;
* Previous declaration errors from interface contracts:
        /Users/jaypersanchez/blockcerts_pragma5/BlockCerts_ICO/contracts/BlockcertAltCoin.sol:15:2: DeclarationError: Identifier already declared.
        string public name;
        ^----------------^
        
        "/blockcerts_pragma5/BlockCerts_ICO/contracts/interfaces/IERC20Token.sol:8:5: The previous declaration is here:
    function name() public pure returns (string memory) {}"
    ^----------------------------------------------------^
* /blockcerts_pragma5/BlockCerts_ICO/contracts/Converter.sol:24:9: TypeError: "send" and "transfer" are only available for objects      of type "address payable", not "address".
        _to.transfer(_value);
        ^----------^

## Truffle Console Commands

### Create Smart Contract Instance

```
BlockcertAltCoin.deployed().then(function(instance){script=instance;})
```

### Get wallet address balance
```
(await script.getPoolBalance.call(WALLET_ADDRESS)).toNumber()
web3.eth.getBalance(smartcontract.address);
(await script.getContractOwnerBsalance.call(script.address)).toNumber()
```

truffle(ganache_cli)> (await script.getPoolBalance.call('0xEf676be27d61B66DCA9e44edAB51551DAC3C07Ba')).toNumber()
1000000
truffle(ganache_cli)> (await script.getPoolBalance.call('0x86CAC31a4B144C55466e2114DABd1889B6abc1BE')).toNumber()
2000000
truffle(ganache_cli)> (await script.getContractOwnerBalance.call(script.address)).toNumber()
2085000000
truffle(ganache_cli)> await script.transferFrom('0xEf676be27d61B66DCA9e44edAB51551DAC3C07Ba', '0x86CAC31a4B144C55466e2114DABd1889B6abc1BE',525)


### from Geth

```
web3.fromWei(eth.getBalance(eth.coinbase),'ether')
web3.eth.getBalance(accounts[0])
```

### Setup for Infura on Ropsten Network 

1. Install Metamask in Chrome
2. Go to https://faucet.metamask.io and choose "request 1 ether from faucet".  Follow instruction here on how to get 1 Ether to test, https://blog.bankex.org/how-to-buy-ethereum-using-metamask-ccea0703daec


