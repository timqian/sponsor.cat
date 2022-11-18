var solc = require('solc');
const boxSol = `
pragma solidity ^0.8.0;

contract Box {
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
var input = {
  language: 'Solidity',
  sources: {
    'box.sol': {
      content: boxSol
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};

function findImports(path) {
  if (path === 'lib.sol')
    return {
      contents:
        'library L { function f() internal returns (uint) { return 7; } }'
    };
  else return { error: 'File not found' };
}

// New syntax (supported from 0.5.12, mandatory from 0.6.0)
var output = JSON.parse(
  solc.compile(JSON.stringify(input), { import: findImports })
);

console.log(output.contracts['box.sol'].Box.evm)
// `output` here contains the JSON output as specified in the documentation
// for (var contractName in output.contracts['test.sol']) {
//   console.log(
//     contractName +
//       ': ' +
//       output.contracts['test.sol'][contractName].evm.bytecode.object
//   );
// }