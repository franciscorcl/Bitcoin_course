class Block {
    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    } 
    toString() {
        return 'Block - \n' + 'Timestamp:' + this.timestamp +'\n' +
        'Last Hash:' + this.lastHash.substring(0, 10) +'\n'+
        'Hash     :'+ this.hash.substring(0, 10) + '\n' +
        'Data     :'+ this.data;
    }
}

module.exports = Block;