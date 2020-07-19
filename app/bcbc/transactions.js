import { ethers } from "ethers";

const bcbcRpcURL = "https://node2.blockcerts.com";
let provider = new ethers.providers.JsonRpcProvider(bcbcRpcURL);

const INK_ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "manager",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "version",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseApproval",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseApproval",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "remaining",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "Obtain",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Return",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousManager",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newManager",
                "type": "address"
            }
        ],
        "name": "ManagerChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "buyTokens",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "returnCoins",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newManager",
                "type": "address"
            }
        ],
        "name": "changeManager",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const INK_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000009";
let inkContract = new ethers.Contract(INK_CONTRACT_ADDRESS, INK_ABI, provider);
export function buyINK(privateKey, amount)
{
    var wallet = new ethers.Wallet(privateKey, provider);

    let contractAddress = "0xC01A59D64A79987cB711830e1E14d64B89a14b61";
    let contract = new ethers.Contract(contractAddress, ABI, wallet);
    var signer = inkContract.connect(wallet);

    let overrides = {
        gasPrice: 1,
        value: amount
    };

    return Promise.all([
        wallet.getBalance(),
        inkContract.balanceOf(wallet.address),
        wallet.getTransactionCount(),
        inkContract.estimate.buyTokens(overrides),
    ])
        .then(([bcertBalance, inkBalance, transactionCount, inkLimit]) =>
        {
            console.log(bcertBalance, inkBalance, transactionCount, inkLimit);

            if (bcertBalance.lt(amount))
            {
                throw new Error("Insufficient BCERT balance");
            }

            if (inkBalance.lt(overrides.gasPrice * inkLimit))
            {
                throw new Error("Insufficient INK balance");
            }

            return signer.buyTokens(overrides);
        });
}

export function transferINK(privateKey, to, amount, callback)
{
    var wallet = new ethers.Wallet(privateKey, provider);
    var signer = inkContract.connect(wallet);

    let overrides = {
        gasPrice: 1,
    };

    var inkValue = new ethers.utils.BigNumber(amount).mul(10 ** 5);

    return Promise.all([
        inkContract.balanceOf(wallet.address),
        wallet.getTransactionCount(),
        inkContract.estimate.transfer(to, inkValue, overrides),
    ])
        .then(([inkBalance, transactionCount, inkLimit]) =>
        {
            console.log(inkBalance, transactionCount, inkLimit);

            if (inkBalance.lt((overrides.gasPrice * inkLimit) + inkValue))
            {
                throw new Error("Insufficient INK balance");
            }

            return signer.transfer(to, inkValue, overrides);
        });
}

export function transferBCERT(privateKey, to, amount, callback)
{
    var wallet = new ethers.Wallet(privateKey, provider);

    let tx = {
        gasPrice: 1,
        to,
        value: amount,
    };

    return Promise.all([
        wallet.getBalance(),
        inkContract.balanceOf(wallet.address),
        wallet.getTransactionCount(),
        wallet.provider.estimateGas(tx)
    ])
        .then(([bcertBalance, inkBalance, transactionCount, inkLimit]) =>
        {
            console.log(bcertBalance, inkBalance, transactionCount, inkLimit);

            if (bcertBalance.lt(amount))
            {
                throw new Error("Insufficient BCERT balance");
            }

            if (inkBalance.lt(tx.gasPrice * inkLimit))
            {
                throw new Error("Insufficient INK balance");
            }

            return wallet.sendTransaction(tx);
        });
}

//check if the users public address is kyc authorized
//BlockcertsKycQuery
// GET
//     / v{ apiVersion } /kyc/{ address } /authorized

export const HASH_ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "_counter",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_accountId",
                "type": "string"
            },
            {
                "name": "_hashId",
                "type": "string"
            },
            {
                "name": "_hashType",
                "type": "string"
            },
            {
                "name": "_hash",
                "type": "string"
            },
            {
                "name": "_version",
                "type": "uint256"
            }
        ],
        "name": "addHashData",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_counter",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_accountId",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_hashId",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_hashType",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_hash",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_version",
                "type": "uint256"
            }
        ],
        "name": "HashAdded",
        "type": "event"
    }
]

export function addHashData(privateKey, accountId, hashId, type, hash, version)
{
    var wallet = new ethers.Wallet(privateKey, provider);
    let contractAddress = "0x1dA96988677eA0A8647EA65051cD3FC7Ed2FfFeD";
    let hashContract = new ethers.Contract(contractAddress, HASH_ABI, wallet);

    let overrides = {
        gasPrice: 1,
    };

    return Promise.all([
        inkContract.balanceOf(wallet.address),
        wallet.getTransactionCount(),
        hashContract.estimate.addHashData(accountId, hashId, type, hash, version, overrides),
    ])
        .then(([inkBalance, transactionCount, inkLimit]) =>
        {
            console.log(inkBalance, transactionCount, inkLimit);

            if (inkBalance.lt(overrides.gasPrice * inkLimit))
            {
                throw new Error("Insufficient INK balance");
            }

            return hashContract.addHashData(accountId, hashId, type, hash, version, overrides);
        });
}

export function getTransactionReceipt(transactionHash)
{
    return provider.getTransactionReceipt(transactionHash);
}

export function getTransaction(transactionHash)
{
    return provider.getTransaction(transactionHash);
}