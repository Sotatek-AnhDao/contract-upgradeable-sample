const hre = require('hardhat');
const { upgrades } = hre;

async function main() {
    const BoxV2 = await hre.ethers.getContractFactory("Box");
    const boxV2 = await upgrades.upgradeProxy(
        "0xA83BF7F6E94E0e2a06f879B4627DC46e7256b187",
        BoxV2
    );

    await boxV2.deployed();
    console.log(`Upgraded Box to BoxV2: ${boxV2.address}`);

    console.log('Completed!');
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });