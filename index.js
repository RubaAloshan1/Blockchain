import { Blockchain } from "./Blockchain.js";

// create an instance of the blockchain
const blockchain = new Blockchain();

for (let i = 1; i < 10; i++) {
    blockchain.addBlock("block " + i)
}

blockchain.addBlock("block 0")
blockchain.addBlock("block 1")
blockchain.addBlock("block 2") 
console.log(blockchain.validateBlockchain())
blockchain.print() 

