import PermissionSmartContract from "./app/Permission/PermissionSmartContract";
import AltCoinSmartContract from "./app/AltCoin/AltCoinSmartContract";
import FileShare from "./app/FileShare/FileShare";
import Payment from "./app/Payments/Payment";
import Script from "./app/scripts/script"
import BCBC from "./app/BCBCSmartContract/bcbc"
import
{
    AltCoinSmartContract_getAltCoinInfo,
    AltCoinSmartContract_getPoolBalance,
    AltCoinSmartContract_balanceOf,
    AltCoinSmartContract_transfer
} from "./app/AltCoin/AltCoinSmartContractFunctions";
import { ABI } from "./app/AltCoin/ABI";
import Web3 from 'web3';
const web3 = new Web3("ws://node2.blockcerts.com");


/*BCBC( function() {
    console.log("[BCBC Smart Contract: " + BCBC.contractDeployedAddress + "]");
});*/

Script( function() {
    console.log("[Script Smart Contract: " + Script.contractDeployedAddress + "]");
});

/*AltCoinSmartContract(function() {
    console.log("[AltCoin Smart Contract: " + AltCoinSmartContract.contractDeployedAddress + "]");
});*/


// AltCoinSmartContract_getAltCoinInfo();

//AltCoinSmartContract_balanceOf("0xB4974728A226702dA7d9a6B9892699aC917D82cF");

// AltCoinSmartContract_transfer("DDE7807AB670DFE7FE97017E5303361DA21C26AFB7203B81A77E3CD8F965AE14", "0xB4974728A226702dA7d9a6B9892699aC917D82cF", 1);

// AltCoinSmartContract_getPoolBalance("0xA33A67a581a3deAf6eA9709DbBa658DD8E39B9b9");

// SimpleStorageSmartContract_setValue("A new value - 1234");

// AltCoinSmartContract(function() {
//     console.log("[AltCoin Smart Contract: " + AltCoinSmartContract.contractDeployedAddress + "]");
// });

// PermissionSmartContract(function() {
//     console.log("[Permission Contract: " + PermissionSmartContract.contractDeployedAddress + "]");
// });

// FileShare(function() {
//     console.log("[FileShare Contract: " + FileShare.contractDeployedAddress + "]");
// });

// Payment(function() {
//     console.log("Payment Contract: " + Payment.contractDeployedAddress + "]");
// });

//interface