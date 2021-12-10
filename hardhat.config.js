require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require("@openzeppelin/hardhat-upgrades");
require('hardhat-contract-sizer');

require('dotenv').config();

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
    defaultNetwork: "hardhat",
    solidity: {
        version: '0.8.4',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
            outputSelection: {
                "*": {
                    "*": ["storageLayout"]
                }
            }
        },
    },
    networks: {
        mainnet: {
            chainId: 1,
            gasPrice: 125000000000,
        },
        rinkeby: {
            chainId: 4,
            gasPrice: 2000000000
        },
    },
    etherscan: {
        apiKey: process.env.ETH_KEY
    },
    paths: {
        tests: "./test"
    },
    contractSizer: {
        alphaSort: true,
        runOnCompile: true,
        disambiguatePaths: false,
    },
};

if (INFURA_API_KEY != undefined && PRIVATE_KEY != undefined) {
    module.exports.networks.rinkeby = {
        url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
        accounts: [PRIVATE_KEY],
        gasPrice: 2000000000
    };

    module.exports.networks.mainnet = {
        url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
        accounts: [PRIVATE_KEY]
    };
}
