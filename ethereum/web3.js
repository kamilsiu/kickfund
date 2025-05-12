import Web3 from 'web3';
let web3;
if(typeof window !== 'undefined' && window.ethereum !== 'undefined'){
    window.ethereum.request({method:'eth_requestAccounts'});
    web3 = new Web3(window.ethereum);
}
else{
    const provider = new Web3.providers.HttpProvider(
        'https://sepolia.infura.io/v3/2ff4959de1694f42b96a7547de988be1'
    );
    web3 = new Web3(provider); 
}
export default web3;