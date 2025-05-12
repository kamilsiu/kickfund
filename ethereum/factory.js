import web3 from './web3';
import CampaignFactory from '../build/CampaignFactory.json';
if(!web3){
    throw new Error("Web3 not installed")
}
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xa8BBa2cE15525DB8f1E7E0DC69Ebede3CcA0B1f6'
)
export default instance;