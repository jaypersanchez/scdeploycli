export const ABI = [
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