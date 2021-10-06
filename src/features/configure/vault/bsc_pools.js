export const bscPools = [
  {
    id: 'venus-bnb',
    logo: 'single-assets/BNB.png',
    name: 'BNB',
    token: 'BNB',
    tokenDescription: 'Venus',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'CtenaVenusBNB',
    earnedTokenAddress: '0xD2125956f237F1c496f4c4aa34448F384BaEBeF7',
    earnContractAddress: '0xD2125956f237F1c496f4c4aa34448F384BaEBeF7',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'WBNB',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Venus',
    assets: ['BNB'],
    withdrawalFee: '0.05%',
  },
  {
    id: 'cakev2-cake-bnb',
    name: 'CAKE-BNB LP',
    token: 'CAKE-BNB LP2',
    tokenDescription: 'PancakeSwap',
    tokenAddress: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'ribbonCakeV2CAKE-BNB',
    earnedTokenAddress: '0x36c8EA66B889353A4c062AdfA0Cc941626E1Bf08',
    earnContractAddress: '0x36c8EA66B889353A4c062AdfA0Cc941626E1Bf08',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cakev2-cake-bnb',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'PancakeSwap',
    assets: ['CAKE', 'BNB'],
    addLiquidityUrl:
      'https://pancakeswap.finance/add/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/BNB',
    buyTokenUrl:
      'https://pancakeswap.finance/swap?outputCurrency=0x5B6DcF557E2aBE2323c48445E8CC948910d8c2c9',
  },
  {
    id: 'cakev2-link-bnb',
    logo: 'bnb-pairs/LINK-BNB.svg',
    name: 'LINK-BNB LP',
    token: 'LINK-BNB LP2',
    tokenDescription: 'PancakeSwap',
    tokenAddress: '0x824eb9faDFb377394430d2744fa7C42916DE3eCe',
    tokenDecimals: 18,
    earnedToken: 'Ctena Cake LINK-BNB Vault',
    earnedTokenAddress: '0xA510d419993d4FEbDC36F04727f33064Db0D64c2',
    earnContractAddress: '0xA510d419993d4FEbDC36F04727f33064Db0D64c2',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cakev2-link-bnb',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'PancakeSwap',
    assets: ['LINK', 'BNB'],
    addLiquidityUrl:
      'https://pancakeswap.finance/add/BNB/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    buyTokenUrl:
      'https://pancakeswap.finance/swap?outputCurrency=0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
  },
];
