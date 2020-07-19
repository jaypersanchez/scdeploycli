# Remix Ethereum

## For Windows

```
remixd -s /Users/jaypersanchez --remix-ide https://remix.ethereum.org
```

## For Linux/MacOS

```
remixd -s ~/blockcerts --remix-ide https://remix.ethereum.org
```

## Remix

Note if you use "http" then in remix browser you use "http".  Or "https" make sure in browser you also use "https"
From https://remix.ethereum.org project explorer pain should now connect to localhost
From "Home" tab of remix.ethereum, click on "Connect to LocalHost"

## Interacting with Smart Contract using deployed smart contract address on Geth

```
var contractInstance = eth.contract(abi).at(<smart contract address>)
```