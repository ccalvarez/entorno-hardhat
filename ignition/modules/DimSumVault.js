const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const STRANGE_TOKEN_ADDRESS = "0x7edde69d363fce3a8b39f9531daf44dd20f46c09";

const DimSumVaultModule = buildModule("DimSumVaultModule", (m) => {
  const vault = m.contract("DimSumVault", [STRANGE_TOKEN_ADDRESS]);

  return { vault };
});

module.exports = DimSumVaultModule;
