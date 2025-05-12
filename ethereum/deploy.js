const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory  = require('../build/CampaignFactory.json');
const provider = new HDWalletProvider(
'blue pitch swift tool tennis ten catalog orchard aim mouse spy penalty',
  'https://sepolia.infura.io/v3/2ff4959de1694f42b96a7547de988be1'
);
const web3 = new Web3(provider);

const deploy = async () => {
  try{
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '2000000', from: accounts[0] });
    console.log('Contract deployed to:', result.options.address);
  }
  catch(err){
    console.log('Deployement error :',err.message||err);
  }
  finally{
    provider.engine.stop();
  }
};
deploy();
