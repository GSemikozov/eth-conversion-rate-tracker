import { PUFETH_CONTRACT_ADDRESS, RPC_URL } from 'config';
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider(RPC_URL);
const contractAddress = PUFETH_CONTRACT_ADDRESS;
const abi = [
  'function totalAssets() public view returns (uint256)',
  'function totalSupply() public view returns (uint256)',
];

const contract = new ethers.Contract(contractAddress, abi, provider);

export async function getConversionRate() {
  const totalAssets = await contract.totalAssets();
  const totalSupply = await contract.totalSupply();
  return parseFloat(ethers.formatUnits(totalAssets)) / parseFloat(ethers.formatUnits(totalSupply));
}
