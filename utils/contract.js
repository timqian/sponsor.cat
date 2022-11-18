import {
  solidityCompiler,
  getCompilerVersions,
} from "@agnostico/browser-solidity-compiler";
import { ContractFactory, providers, Web3Provider } from "ethers";

export async function compileAndDeploy({ name }) {
  const versions = await getCompilerVersions();
  // alert(JSON.stringify(versions.releases, null, 2))
  const contractSource = `
		pragma solidity ^0.8.0;

		contract ${name} {
				uint256 private _value;

				// Emitted when the stored value changes
				event ValueChanged(uint256 value);

				// Stores a new value in the contract
				function store(uint256 value) public {
						_value = value;
						emit ValueChanged(value);
				}

				// Reads the last stored value
				function retrieve() public view returns (uint256) {
						return _value;
				}
		}
	`;

  // const input = {
  //   language: "Solidity",
  //   sources: {
  //     "contract.sol": {
  //       content: contractSource,
  //     },
  //   },
  //   settings: {
  //     outputSelection: {
  //       "*": {
  //         "*": ["*"],
  //       },
  //     },
  //   },
  // };

  function findImports(path) {
    if (path === "lib.sol")
      return {
        contents:
          "library L { function f() internal returns (uint) { return 7; } }",
      };
    else return { error: "File not found" };
  }

  // New syntax (supported from 0.5.12, mandatory from 0.6.0)
  // const output = JSON.parse(
  //   solc.compile(JSON.stringify(input), { import: findImports })
  // );
  const output = await solidityCompiler(
    {
      version: `https://binaries.soliditylang.org/bin/soljson-v0.8.17+commit.8df45f5f.js`,
      contractBody: contractSource,
    },
    { import: findImports }
  );
  console.log(output.contracts["Compiled_Contracts"][name]);

  const provider = new providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  // If your contract requires constructor args, you can specify them here
  const contractAbi = output.contracts["Compiled_Contracts"][name].abi;
  const contractByteCode =
    output.contracts["Compiled_Contracts"][name].evm.bytecode.object;
  const factory = new ContractFactory(contractAbi, contractByteCode, signer);

  const contract = await factory.deploy();

  console.log(contract.address);
  console.log(contract.deployTransaction);
  return contract.address;
}
