import { ContractFactory, providers, Web3Provider } from 'ethers';


const provider = new providers.Web3Provider(window.ethereum)
const signer = provider.getSigner();
// If your contract requires constructor args, you can specify them here

const factory = new ContractFactory(contractAbi, contractByteCode, signer);

const contract = await factory.deploy(deployArgs);

console.log(contract.address);
console.log(contract.deployTransaction);