/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.27",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        "0x1c3b2a3dcefbd06cd08e89ba25fa0bdbc26c41e9f8452241c9f0736d12ae7a82", // Private key 2
        "0x9369b0b0e582c2714b67a9c2ff76474193803762985d350f455e3853e160716c"  // Private key 1
      ],
    },
  },
};
