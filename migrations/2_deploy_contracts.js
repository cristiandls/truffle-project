var DemoSupplyChain = artifacts.require("./DemoSupplyChain.sol");

module.exports = function(deployer) {
  deployer.deploy(DemoSupplyChain);
};
