const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

try {
  console.log(`Using solc version: ${solc.version()}`);
  const buildPath = path.resolve(__dirname, '..', 'build');
  const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
  fs.removeSync(buildPath);
  if (!fs.existsSync(campaignPath)) {
    throw new Error(`Solidity file not found at ${campaignPath}`);
  }
  const source = fs.readFileSync(campaignPath, 'utf-8');
  const output = solc.compile(source, 1);
  if (output.errors) {
    output.errors.forEach((err) => {
      console.error(err);
    });
    if (output.errors.some((err) => err.includes('Error'))) {
      throw new Error('Compilation failed with errors');
    }
  }
  fs.ensureDirSync(buildPath);
  for (let contract in output.contracts) {
    const contractName = contract.replace(/^:/, '');
    fs.outputJsonSync(
      path.resolve(buildPath, `${contractName}.json`),
      output.contracts[contract],
      { spaces: 2 }
    );
    console.log(`Saved ${contractName}.json to build directory`);
  }
  console.log('Compilation successful!');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}