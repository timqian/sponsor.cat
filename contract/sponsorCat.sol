// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract SponsorCat is ERC1155, Ownable, ERC1155Supply {
    // Creators' addresses, index is creator's id
    address[] public creators = [ address(this) ];
    mapping(address => uint256) public creatorId;
    constructor() ERC1155("https://sponsor.cat/api/member/") {}

    uint256 public unitPrice = 0.00001 ether;

    function updateUnitPrice(uint256 price) public onlyOwner {
        unitPrice = price;
    }

    function creatorsCount() public view returns (uint count) {
        return creators.length;
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    // Free to push yourself to the creators list
    function addCreator() public {
        require(creatorId[msg.sender] == 0, "Creator already added");
        creators.push(msg.sender);
        creatorId[msg.sender] = creators.length - 1;
    }

    // function addCreators(address[] calldata creatorList) public onlyOwner {
    //     for(uint i = 0; i < creatorList.length; i++) {
    //         address creator = creatorList[i];
    //         if (creatorId[creator] == 0) {
    //             creators.push(msg.sender);
    //             creatorId[msg.sender] = creators.length - 1;
    //         }
    //     }
    // }

    // receive ether, mint NFT and send ether to creator
    function sponsor(address creator) public payable {
        require(msg.value > unitPrice, "Sponsor amount too small");
        if (creatorId[creator] == 0) {
            creators.push(creator);
            creatorId[creator] = creators.length - 1;
        }
        if (creator != address(this)) payable(creator).transfer(msg.value);
        _mint(msg.sender, creatorId[creator], msg.value/unitPrice, "");
    }

    function withdraw(address payable to) external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0 wei, "No balance to withdraw");
        to.transfer(balance);
    }

    function uri(uint256 _id) public view virtual override returns (string memory){
        return string(abi.encodePacked(super.uri(_id), Strings.toString(_id)));
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Supply) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}
