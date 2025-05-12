import web3 from './web3';
import CampaignFactory from '../build/CampaignFactory.json';
if(!web3){
    throw new Error("Web3 not installed")
}
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    'deployed-address-of-your-contract'
)
export default instance;
