const chainMaker = {
  getLength() {
    return this.chain && Array.isArray(this.chain) ? this.chain.length : 0;
  },
  addLink(value) {
    const realValue = value === undefined ? '( )' : `( ${value} )`;
    if (!this.chain) {
      this.chain = [realValue];
    } else if (Array.isArray(this.chain)) {
      this.chain.push(realValue);
    }
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.getLength()) {
      this.finishChain();
      throw new TypeError('Invalid argument!');
    } else if (this.chain && Array.isArray(this.chain)){
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    if (this.chain && Array.isArray(this.chain)) {
      this.chain.reverse();
    }
    return this;
  },
  finishChain() {
    if (this.chain && Array.isArray(this.chain)) {
      try {
        throw this.chain.join('~~');
      } catch (finalChain) {
        return finalChain;
      } finally {
        delete this.chain;
      }
    }
  }
};

module.exports = chainMaker;
