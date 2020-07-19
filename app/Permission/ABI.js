export const ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "KYCAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "metadata",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "extension",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
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
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "metadata",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "id",
				"type": "string"
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
				"internalType": "string",
				"name": "extension",
				"type": "string"
			}
		],
		"name": "ExtensionSet",
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
				"name": "metadata",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"name": "MetadataChanged",
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
				"name": "participant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isKYCNeeded",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "id",
				"type": "string"
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
				"internalType": "address",
				"name": "participant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isKYCNeeded",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "extension",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "id",
				"type": "string"
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
				"internalType": "address",
				"name": "participant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "extension",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"name": "ParticipantExtended",
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
				"name": "participant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isKYCNeeded",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "id",
				"type": "string"
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
				"internalType": "address[]",
				"name": "participants",
				"type": "address[]"
			},
			{
				"indexed": false,
				"internalType": "bool[]",
				"name": "isKYCNeededList",
				"type": "bool[]"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "id",
				"type": "string"
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
				"internalType": "address[]",
				"name": "participants",
				"type": "address[]"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "id",
				"type": "string"
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
				"internalType": "address",
				"name": "participant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"name": "ParticipantRemoved",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
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
		"inputs": [],
		"name": "contractKYC",
		"outputs": [
			{
				"internalType": "contract KYC",
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
		"name": "getMetadata",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
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
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address[]",
				"name": "participants",
				"type": "address[]"
			}
		],
		"name": "removeListParticipant",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
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
				"name": "extension",
				"type": "string"
			}
		],
		"name": "setExtension",
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
				"name": "metadata",
				"type": "string"
			}
		],
		"name": "setMetadata",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
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
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "whitelist",
		"outputs": [
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
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

