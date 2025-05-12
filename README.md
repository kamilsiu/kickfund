# Kickstart – Decentralized Campaign Management

Kickstart is a decentralized smart contract that enables users to create and manage fundraising campaigns on the Ethereum blockchain. This project demonstrates the process of compiling, deploying, and testing a smart contract on the Sepolia testnet. The frontend is built using **Next.js** with **Semantic UI React** for styling and routing, allowing users to interact with the deployed contract.
 
## Overview 

This project demonstrates how to:

- Deploy a smart contract to the Sepolia testnet .
- Compile the smart contract using Truffle .
- Run tests to verify the contract’s functionality (optional but recommended) .
- Build the frontend using **Next.js** and **Semantic UI React** for user interaction with the smart contract

## Technologies Used

- **Web3.js** – Library to interact with the Ethereum blockchain
- **HDWalletProvider** – Securely manage private keys and connect to Ethereum nodes
- **Solidity** – Programming language for smart contracts
- **Truffle** – Development framework for compiling, testing, and deploying contracts
- **Infura** – Provides access to the Ethereum network without running a full node
- **Next.js** – React framework for building the frontend and routing
- **Semantic UI React** – React component library for UI elements

## Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (version 7 or higher)
- **Truffle** globally installed:
  
  ``bash
  npm install -g truffle
  ``

**A Sepolia testnet wallet address (you can get one from MetaMask or similar wallet).**

**Some Sepolia testnet ETH for deploying the contract (use faucets like Sepolia faucet).**

## Setup

## 1. Clone the Repository
Start by cloning this repository to your local machine:

```bash
git clone https://github.com/your-username/kickstart.git
cd kickstart

```
## 2. Install Backend Dependencies
Inside the project directory, install all the required npm packages for the backend (Truffle and Web3):

```bash
npm install
```
## 3. Install Frontend Dependencies
Now, let's set up the frontend using Next.js and Semantic UI React:

```bash
cd frontend
npm install
```
## 4. Start the Frontend Development Server

After the installation is complete, you can start the Next.js frontend development server:

```bash
npm run dev
Your application will be available at http://localhost:3000.
```
## 5. Testing the Contract

To ensure the functionality of the contract, tests have been written using Truffle. These tests cover the basic operations of the contract, such as creating campaigns and contributing to them.
Running Tests
You can run the tests using the following command:

```bash
truffle test
Sample Test File: ethereum/test/campaign.test.js

```

The tests include basic functionality like:

**Tests which are Useful to understanding if the contract is working exactly as we want it to.*
**Functions are working perfectly .**


## 6. Deploying the Smart Contract
1. Update deploy.js with Your Wallet Details
   
In the ethereum/deploy.js file, replace the placeholders with your own wallet mnemonic and Infura project ID:

```bash
const provider = new HDWalletProvider(
  'your wallet mnemonic here',
  'https://sepolia.infura.io/v3/your-infura-project-id' 
);
```

2. Running the Deployment Script
Once you've set up your wallet details, you can deploy the smart contract by running:

```bash

node ethereum/deploy.js
Example Output:
Attempting to deploy from account 0x1234567890abcdef1234567890abcdef12345678
Contract deployed to: 0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef
```

This will deploy the smart contract to the Sepolia testnet and display the contract address once the deployment is successful.

## 7. Project Directory Structure
To help you navigate the project, here’s the folder structure:

```bash

kickstart/
│   ├── components/     # Reusable components (UI elements)
│   ├── ContributeForm.json
│   ├── Header.js
│   ├── Layout.js
│   ├── RequestRow.js
├── test/
│     ├── Campaign.test.js             # Tests for the smart contract
├── ethereum/
│   ├── contracts/
│     ├── Campaign.sol
│   ├── deploy.js
│   ├── compile.js
│   ├── web3.js
│   ├── campaign.js
│   ├── factory.js
│   ├── pages/                # Pages and routes for Next.js (automatic routing)
│     ├── new.js
│     ├── show.js
│     ├── campaign /
│       ├── requests /
│       ├── index.js
│       ├── new.js
│   ├── index.js                                
├── package.json                   # Frontend dependencies
│── next.config.js                 # Next.js configuration file               
├── node_modules/                  # Installed dependencies via npm
├── routes.js                      # All routes for the app (use Next.js dynamic routing)
├── server.js                      # Custom server configuration (if needed)
├── package.json                       # Root package dependencies and scripts
├── README.md                          # Project overview and instructions
└── truffle-config.js                  # Truffle configuration for deploying contracts
```
## 8. Frontend Routing and UI
The frontend is built with Next.js and Semantic UI React for easy routing and modern UI components. Here’s a brief overview of how the frontend is structured:

Pages: All the frontend pages are stored inside the pages directory. Each page corresponds to a route in the Next.js app (e.g., index.js for the homepage and campaign.js for campaign management).

Components: Reusable UI components (e.g., buttons, forms) are located in the components directory.

Routing: Next.js handles routing automatically based on file names inside the pages directory. Dynamic routes can be handled through routes.js.

## 9. Troubleshooting
If you encounter any issues:

**Double-check your wallet mnemonic and Infura project ID.**

**Ensure you have Sepolia ETH from a faucet for contract deployment.**

**Verify the Infura endpoint for Sepolia.**

**Ensure the server is running for frontend to fetch data from the contract.**

## 10. License

This project is open-source and available under the MIT License.
