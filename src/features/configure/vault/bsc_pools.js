export const bscPools = [
  {
    id: 'cake-cakev2',
    logo: 'single-assets/CAKE.svg',
    name: 'CAKE',
    token: 'CAKE',
    tokenDescription: 'PancakeSwap',
    tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    tokenDecimals: 18,
    earnedToken: 'CtenaCakeV2',
    earnedTokenAddress: '0x426dCb8b04810050e056b3D418bB309001C321c6',
    earnContractAddress: '0x426dCb8b04810050e056b3D418bB309001C321c6',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'Cake',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'PancakeSwap',
    assets: ['CAKE'],
    withdrawalFee: '0%',
    buyTokenUrl:
      'https://pancakeswap.finance/swap?outputCurrency=0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  },
  {
    id: 'cakev2-btcb-bnb',
    logo: 'bnb-pairs/BTCB-BNB.svg',
    name: 'BTCB-BNB LP',
    token: 'BTCB-BNB LP2',
    tokenDescription: 'PancakeSwap',
    tokenAddress: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    tokenDecimals: 18,
    earnedToken: 'CtenaCakeBTCB-BNB',
    earnedTokenAddress: '0x2872BA8969083d77469a54aAa585f13677008D8c',
    earnContractAddress: '0x2872BA8969083d77469a54aAa585f13677008D8c',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cakev2-btcb-bnb',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'PancakeSwap',
    assets: ['BTCB', 'BNB'],
    addLiquidityUrl:
      'https://pancakeswap.finance/add/BNB/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    buyTokenUrl:
      'https://pancakeswap.finance/swap?outputCurrency=0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  },
  {
    id: 'banana-eth-bnb',
    name: 'ETH-BNB LP',
    token: 'ETH-BNB ALP',
    tokenDescription: 'ApeSwap',
    tokenAddress: '0xA0C3Ef24414ED9C9B456740128d8E63D016A9e11',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'CtenaApeETH-BNB',
    earnedTokenAddress: '0x3f20751FA70BD8bA275657D2fCA61A3E4d933905',
    earnContractAddress: '0x3f20751FA70BD8bA275657D2fCA61A3E4d933905',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'banana-eth-bnb',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'ApeSwap',
    assets: ['ETH', 'BNB'],
    addLiquidityUrl:
      'https://dex.apeswap.finance/#/add/ETH/0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    buyTokenUrl:
      'https://dex.apeswap.finance/#/swap?outputCurrency=0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  },
  {
    id: 'cakev2-btcst-bnb',
    logo: 'bnb-pairs/BTCST-BNB.svg',
    name: 'BTCST-BNB LP',
    token: 'BTCST-BNB LP2',
    tokenDescription: 'PancakeSwap',
    tokenAddress: '0xB2678C414ebC63c9CC6d1a0fC45f43E249B50fdE',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'CtenaCakeBTCST-BNB',
    earnedTokenAddress: '0x9b626a683ab24A97C8E1441e55EEEda1242cD431',
    earnContractAddress: '0x9b626a683ab24A97C8E1441e55EEEda1242cD431',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cakev2-btcst-bnb',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'PancakeSwap',
    assets: ['BTCST', 'BNB'],
    addLiquidityUrl:
      'https://pancakeswap.finance/add/BNB/0x78650b139471520656b9e7aa7a5e9276814a38e9',
    buyTokenUrl:
      'https://pancakeswap.finance/swap?outputCurrency=0x78650b139471520656b9e7aa7a5e9276814a38e9',
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
  /* {
    id: 'mdex-usdt-btcb-eol',
    name: 'USDT-BTCB LP',
    token: 'USDT-BTCB LP',
    tokenDescription: 'Mdex',
    tokenAddress: '0xda28Eb7ABa389C1Ea226A420bCE04Cb565Aafb85',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'CtenaMdexUSDT-BTCB',
    earnedTokenAddress: '0xb4095B25dE0F67EE0Dd5317650E67232Ff1D2Cc0',
    earnContractAddress: '0xb4095B25dE0F67EE0Dd5317650E67232Ff1D2Cc0',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'mdex-usdt-btcb',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    platform: 'Mdex',
    assets: ['USDT', 'BTCB'],
    addLiquidityUrl:
      'https://exchange.pancakeswap.finance/#/add/0x55d398326f99059fF775485246999027B3197955/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    buyTokenUrl:
      'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
  },
  {
    id: 'venus-btcb-eol',
    logo: 'single-assets/BTCB.svg',
    name: 'BTCB',
    token: 'BTCB',
    tokenDescription: 'Venus',
    tokenAddress: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'CtenaVenusBTCB',
    earnedTokenAddress: '0x78D010aA5DeB2a7A6db247dBAEa89c1D564F0f93',
    earnContractAddress: '0x78D010aA5DeB2a7A6db247dBAEa89c1D564F0f93',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'BTCB',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    platform: 'Venus',
    assets: ['BTCB'],
    buyTokenUrl:
      'https://pancakeswap.finance/swap?outputCurrency=0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
  },
  {
    id: 'venus-bnb-eol',
    logo: 'single-assets/BNB.png',
    name: 'BNB',
    token: 'BNB',
    tokenDescription: 'Venus',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'CtenaVenusBNB',
    earnedTokenAddress: '0x073d6932f5745BdC866B6fCA1Bfda2C1441F47b2',
    earnContractAddress: '0x073d6932f5745BdC866B6fCA1Bfda2C1441F47b2',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'WBNB',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    platform: 'Venus',
    assets: ['BNB'],
    withdrawalFee: '0.05%',
  },
  {
    id: 'venus-wbnb-eol',
    logo: 'single-assets/WBNB.svg',
    name: 'WBNB',
    token: 'WBNB',
    tokenDescription: 'Venus',
    tokenAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'CtenaVenusBNB',
    earnedTokenAddress: '0x073d6932f5745BdC866B6fCA1Bfda2C1441F47b2',
    earnContractAddress: '0x073d6932f5745BdC866B6fCA1Bfda2C1441F47b2',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'WBNB',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'eol',
    platform: 'Venus',
    assets: ['BNB'],
    withdrawalFee: '0.05%',
    buyTokenUrl:
      'https://pancakeswap.finance/swap?outputCurrency=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  }, */
];
