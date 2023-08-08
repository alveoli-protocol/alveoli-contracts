import * as dotenv from 'dotenv';
import { HardhatUserConfig, task } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import 'hardhat-contract-sizer';

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    compilers: [
      {
        version: '0.7.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          metadata: {
            // do not include the metadata hash, since this is machine dependent
            // and we want all generated code to be deterministic
            // https://docs.soliditylang.org/en/v0.7.6/metadata.html
            bytecodeHash: 'none',
          },
        },
      },
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
    overrides: {
      '@uniswap/v3-core/contracts/libraries/Position.sol': { version: '0.7.6' },
      '@uniswap/v3-core/contracts/libraries/SqrtPriceMath.sol': {
        version: '0.7.6',
      },
      '@uniswap/v3-core/contracts/libraries/SwapMath.sol': { version: '0.7.6' },
      '@uniswap/v3-core/contracts/libraries/FullMath.sol': { version: '0.7.6' },
      '@uniswap/v3-core/contracts/libraries/Oracle.sol': { version: '0.7.6' },
      '@uniswap/v3-core/contracts/libraries/Tick.sol': { version: '0.7.6' },
      '@uniswap/v3-core/contracts/libraries/TickMath.sol': { version: '0.7.6' },
      '@uniswap/v3-core/contracts/libraries/TickBitmap.sol': {
        version: '0.7.6',
      },
      '@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol': {
        version: '0.7.6',
      },
      '@uniswap/lib/contracts/libraries/AddressStringUtil.sol': {
        version: '0.7.6',
      },
      '@uniswap/lib/contracts/libraries/SafeERC20Namer.sol': {
        version: '0.7.6',
      },
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    ropsten: {
      chainId: 3,
      url: process.env.ROPSTEN_URL || '',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    mainnet: {
      chainId: 1,
      url: process.env.MAINNET_URL || '',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    polygon: {
      chainId: 137,
      url: process.env.POLYGON_URL || '',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    optimism: {
      chainId: 10,
      url: process.env.OPTIMISM_URL || '',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    arbitrum: {
      chainId: 42161,
      url: process.env.ARBITRUM_URL || '',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    baobab: {
      chainId: 1001,
      url: 'https://public-en-baobab.klaytn.net',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    cypress: {
      chainId: 8217,
      url: 'https://public-en-cypress.klaytn.net',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    // coinmarketcap: "COINMARKETCAP_API_KEY",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
