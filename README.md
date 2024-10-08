# Entorno Hardhat

## Descripción

Entorno [Hardhat](https://hardhat.org/) configurado para publicar y verificar el contrato Solidity de la bóveda tokenizada ERC-4626 [_Dim Sum Vault_](https://github.com/ccalvarez/dim-sum-vault):rice:, en la red de pruebas Ethereum Sepolia Testnet.

## Referencias

El entorno Hardhat se configuró siguiendo las instrucciones descritas en los siguientes enlaces:

- [Despliegue de un contrato en Hardhat](https://eth-kipu.gitbook.io/ethereum-developer-pack/modulo-4/toolkit-para-desarrollo-ethereum/toolkit/hardhat/despliegue-de-un-contrato-en-hardhat)
- [Despliegue de un contrato en una red pública](https://eth-kipu.gitbook.io/ethereum-developer-pack/modulo-4/toolkit-para-desarrollo-ethereum/toolkit/hardhat/despliegue-de-un-contrato-en-una-red-publica)

## Instrucciones para publicar y verificar el contrato Solidity

1. Instalar las dependencias:

```sh
npm install
```

2. Establecer el valor de su API Key de Alchemy:

```sh
npx hardhat vars set ALCHEMY_API_KEY
```

Solicitará ingresar la API Key de Alchemy.

3. Establecer el valor de la clave privada de su wallet en Sepolia, necesaria para firmar la transacción de creación del contrato en Sepolia:

```sh
npx hardhat vars set SEPOLIA_PRIVATE_KEY
```

Solicitará ingresar la clave privada de la wallet.

4. Establecer el valor de la API Key de Etherscan, necesaria para publicar y verificar el contrato en la red de pruebas Sepolia. Esta llave se obtiene creando una cuenta en [Etherscan](https://etherscan.io/login), y generando la llave en la sección [API Keys](https://etherscan.io/myapikey). 

```sh
npx hardhat vars set ETHERSCAN_API_KEY
```

Solicitará ingresar la API Key de Etherscan.

5. Desplegar y verificar el contrato ```DimSumVault.sol``` en la red de pruebas Sepolia:

```sh
npx hardhat ignition deploy ignition/modules/DimSumVault.js --network sepolia --verify
```


## Licencia

Este proyecto cuenta con licencia conforme a los términos de la licencia [MIT](https://github.com/ccalvarez/entorno-hardhat/blob/main/LICENSE).
