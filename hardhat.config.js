
/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
const dotenv = require("dotenv");
dotenv.config({path: __dirname + '/.env'});
const { API_URL, PRIVATE_KEY } = process.env;

console.log('the key is ----------')
console.log(process.env.privateKey)
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
 //unused configuration commented out for now
//  mumbai: {
//    url: "https://rpc-mumbai.maticvigil.com",
//    accounts: [process.env.privateKey]
//  }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}