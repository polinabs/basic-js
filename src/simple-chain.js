const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === null) {
      this.chain.push('(null)');
    } else if (typeof value === 'function') {
      this.chain.push(`( ${value.toString()} )`);
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (
      position <= 0 ||
      typeof position !== 'number' ||
      position > this.chain.length ||
      !Number.isInteger(position)
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.map((link) => {
      return link === '( )' ? '()' : link;
    }).join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker
};
