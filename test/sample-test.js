const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Vyper_test");
    const greeter = await Greeter.deploy("hello");
    await greeter.deployed();

    expect(await greeter.getUserName()).to.equal("Lokesh__");

  });
});
