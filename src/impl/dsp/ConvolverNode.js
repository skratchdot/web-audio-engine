"use strict";

const AudioNode = require("../AudioNode");

class ConvolverNode extends AudioNode {
  dspProcess() {
    const outputBus = this.outputs[0].bus;

    outputBus.zeros();
    outputBus.sumFrom(this.inputs[0].bus);
  }
}

module.exports = ConvolverNode;
