## Kickstart – Decentralized Campaign Management

Kickstart is a decentralized smart contract that enables users to create and manage fundraising campaigns on the Ethereum blockchain. This project demonstrates the process of compiling, deploying, and testing a smart contract on the Sepolia testnet. While the frontend for user interaction isn’t implemented yet, the smart contract itself provides the functionality for a trustless and transparent campaign management system .

Kickstart utilizes a decentralized smart contract to foster trust in the fundraising process. The contract implements a governance mechanism where a majority of approvers (fundraisers) must approve the contract manager's ability to deposit funds into a designated account. This ensures that the contract manager cannot unilaterally access the funds, and funds can only be transferred if at least half of the fundraisers approve the transaction.
 
By involving multiple stakeholders in decision-making, this mechanism reduces the risk of fraud and increases transparency, as all approvals are recorded immutably on the blockchain. This decentralized approach ensures that no single party, including the contract manager, has full control over the funds, thereby instilling confidence among all participants in the fundraising process.<br><br>
 
## Overview
This project demonstrates how to :

Deploy a smart contract to the Sepolia testnet

Compile the smart contract using Truffle

Run tests to verify the contract’s functionality (optional but recommended)
<br><br>

## Technologies Used 
Web3.js – Library to interact with the Ethereum blockchain

HDWalletProvider – Securely manage private keys and connect to Ethereum nodes

Solidity – Programming language for smart contracts

Truffle – Development framework for compiling, testing, and deploying contracts

Infura – Provides access to the Ethereum network without running a full node
<br><br>

## Prerequisites
Before getting started, make sure you have the following installed:

Node.js (version 14 or higher)

npm (version 7 or higher)

Truffle globally installed 
```bash
(npm install -g truffle)
```

You’ll also need:

&nbsp;A Sepolia testnet wallet address (you can get one from MetaMask or similar wallet).
&nbsp;Some Sepolia testnet ETH for deploying the contract (use faucets like Sepolia faucet).

<br><br>
## Setup
1. Clone the Repository
Start by cloning this repository to your local machine:
```bash
git clone https://github.com/your-username/kickstart.git
cd kickstart
```
## 2. Install Dependencies
Inside the project directory, install all the required npm packages:

```bash
npm install
```
<br><br>
## 3. Testing the Contract
To ensure the functionality of the contract, the tests have been written using Truffle . These tests cover the basic operations of the contract, such as creating campaigns and contributing to them.

Running Tests
You can run the tests using the following command:

truffle test
```bash

Sample Test File: ethereum/test/campaign.test.js
The tests include basic functionality like:

Deploying the contract.

Creating a campaign.

Contributing to a campaign.
```
<br><br>
## 4. Update deploy.js with Your Wallet Details
In the ethereum/deploy.js file, replace the placeholders with your own wallet mnemonic and Infura project ID:
```bash
const provider = new HDWalletProvider(
  'your wallet mnemonic here',
  'https://sepolia.infura.io/v3/your-infura-project-id' 
);
```

Running the Deployment Script
Once you've set up your wallet details, you can deploy the smart contract by running:

```bash
node ethereum/deploy.js
```
Example Output:
```bash
Attempting to deploy from account 0x1234567890abcdef1234567890abcdef12345678
Contract deployed to: 0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef
```
This will deploy the smart contract to the Sepolia testnet and display the contract address once the deployment is successful.
<br><br>

## 5. Project Directory Structure 
To help you navigate the project, here’s the folder structure:

```bash
kickstart/
├── build/
│   ├── CampaignFactory.json
│   ├── Campaign.json    # Compiled contract ABI and bytecode
├── ethereum/
│   ├── contracts/
│     ├── Campaign.sol
│   ├── deploy.js
│   ├── compile.js             # Deployment script for smart contracts
├── node_modules/                   # Dependencies installed via npm                 # Web3.js logic to interact with smart contracts
├── .gitignore                      # Git ignore file
├──  test/
│     ├── Campaign.test.js
├── package.json                    # Node.js dependencies and scripts
├── README.md                       # Project overview and instructions
└── truffle-config.js               # Truffle configuration for deploying contracts (optional)
```
<br><br>
## 6. Troubleshooting
If you encounter any issues:

  Double-check your wallet mnemonic and Infura project ID.

  Ensure you have Sepolia ETH from a faucet for contract deployment.

  Verify the Infura endpoint for Sepolia.
<br><br>



## License
This project is open-source and available under the MIT License.
<br>
