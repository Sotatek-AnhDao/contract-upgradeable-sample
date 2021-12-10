const hre = require("hardhat");
const { upgrades } = hre;

async function main() {
  const Box = await hre.ethers.getContractFactory("Box");
  const box = await upgrades.deployProxy(Box, [69]);

  await box.deployed();

  console.log("Box deployed to:", box.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
