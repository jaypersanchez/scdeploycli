export const ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
<<<<<<< HEAD
				"indexed": false,
				"internalType": "string",
				"name": "_accountId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_hashId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_hashType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_version",
				"type": "string"
			}
		],
		"name": "HashAdded",
		"type": "event"
=======
				"indexed": true,
				"internalType": "address",
				"name": "_accountId",
				"type": "address"
			}
		],
		"name": "AttestationCreated",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "accountIds",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
>>>>>>> b844d973df4ac8d104b905614a914ccc6f629bf2
	},
	{
		"constant": false,
		"inputs": [
			{
<<<<<<< HEAD
				"internalType": "string",
				"name": "_accountId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_hashId",
				"type": "string"
=======
				"internalType": "address",
				"name": "_accountId",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_hashId",
				"type": "uint256"
>>>>>>> b844d973df4ac8d104b905614a914ccc6f629bf2
			},
			{
				"internalType": "string",
				"name": "_hashType",
				"type": "string"
			},
			{
<<<<<<< HEAD
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_version",
				"type": "string"
			}
		],
		"name": "addHashData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
=======
				"internalType": "uint256",
				"name": "_hash",
				"type": "uint256"
			}
		],
		"name": "createAttestationData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_accountId",
				"type": "address"
			}
		],
		"name": "getAttestationData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

>>>>>>> b844d973df4ac8d104b905614a914ccc6f629bf2
