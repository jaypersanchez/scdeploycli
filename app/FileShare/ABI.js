export const ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "KYCAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "code",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "version",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "KYCAddress",
				"type": "address"
			}
		],
		"name": "ContractCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "code",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "version",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "fileID",
				"type": "string"
			}
		],
		"name": "FileAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "code",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "version",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "fileID",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "participant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isKYCNeeded",
				"type": "bool"
			}
		],
		"name": "ParticipantAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "code",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "version",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "fileID",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "participant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isKYCNeeded",
				"type": "bool"
			}
		],
		"name": "ParticipantKYCChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "code",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "version",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "fileID",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address[]",
				"name": "participants",
				"type": "address[]"
			},
			{
				"indexed": false,
				"internalType": "bool[]",
				"name": "isKYCNeededList",
				"type": "bool[]"
			}
		],
		"name": "ParticipantListAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "code",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "version",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "fileID",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address[]",
				"name": "participants",
				"type": "address[]"
			}
		],
		"name": "ParticipantListRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "code",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "version",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "fileID",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "participant",
				"type": "address"
			}
		],
		"name": "ParticipantRemoved",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "fileID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "extension",
				"type": "string"
			}
		],
		"name": "addFile",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "fileID",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "participant",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isKYCNeeded",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "extension",
				"type": "string"
			}
		],
		"name": "addParticipant",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "fileID",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "participants",
				"type": "address[]"
			},
			{
				"internalType": "bool[]",
				"name": "isKYCNeededList",
				"type": "bool[]"
			}
		],
		"name": "addParticipantList",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "fileID",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "participant",
				"type": "address"
			}
		],
		"name": "checkAccess",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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
				"internalType": "string",
				"name": "fileID",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "participant",
				"type": "address"
			}
		],
		"name": "removeParticipant",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "fileID",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "participants",
				"type": "address[]"
			}
		],
		"name": "removeParticipantList",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "fileID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "extension",
				"type": "string"
			}
		],
		"name": "setFileExtension",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "fileID",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "participant",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "extension",
				"type": "string"
			}
		],
		"name": "setParticipantExtension",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "fileID",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "participant",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isKYCNeeded",
				"type": "bool"
			}
		],
		"name": "setParticipantKYC",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

