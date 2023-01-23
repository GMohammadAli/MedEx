const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("MedEx", () => {
  let medEx;
  let deployer, owner1;

  const DOC_NAME = "Ali";
  const DOC_SPECIALIZATION = "MD Surgeon";

  beforeEach(async () => {
    [deployer, owner1] = await ethers.getSigners();

    const MedEx = await ethers.getContractFactory("medEx");
    medEx = await MedEx.deploy();
  });

  describe("Doctor Registration", () => {
    it("has a name", async () => {
      const result = await medEx.docs.DocName();
      expect(result).to.equal(DOC_NAME);
    });

    it("has a symbol", async () => {
      const result = await medEx.docs.Doc_spec();
      expect(result).to.equal(DOC_SPECIALIZATION);
    });

    it("Sets the owner", async () => {
      const result = await medEx.owner();
      expect(result).to.equal(deployer.address);
    });

    // it("Returns the maxSupply", async () => {
    //   const result = await medEx.maxSupply();
    //   expect(result).to.equal(1);
    // });

    // it("Returns the totalSupply", async () => {
    //   const result = await medEx.totalSupply();
    //   expect(result).to.equal(0);
    // });
  });

  // describe("Domain", () => {
  //   it("Returns domain attributes", async () => {
  //     let domain = await ethDaddy.getDomain(1);
  //     expect(domain.name).to.be.equal("jack.eth");
  //     expect(domain.cost).to.be.equal(tokens(10));
  //     expect(domain.isOwned).to.be.equal(false);
  //   });
  // });
  
});
