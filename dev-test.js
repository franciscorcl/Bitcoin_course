const Block = require('./block');
const Blockchain = require('./blockchain');

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString());

/*
const buuBlock = Block.mineBlock(fooBlock, 'buu');
console.log(buuBlock.toString());
*/

