export const bscPools = [
  {
    id: 'cakev2-ctena-bnb',
    logo: 'bnb-pairs/CTENA-BNB.png',
    name: 'CTENA-BNB',
    token: 'CTENA-BNB LP',
    tokenDescription: 'Ctena.finance',
    tokenAddress: '0xbcE2a84CED47b7f29c5a29e4d158294772cbA272',
    tokenDecimals: 18,
    earnedToken: 'CtenaCakeCtena-BNB',
    earnedTokenAddress: '0x3ED3295fC4Db6EF534Be0d17C146E5bC7026058d',
    earnContractAddress: '0x3ED3295fC4Db6EF534Be0d17C146E5bC7026058d',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cakev2-ctena-wbnb',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Ctena.Finance',
    assets: ['CTENA', 'BNB'],
    withdrawalFee: '0',
    addLiquidityUrl:
      'https://pancakeswap.finance/add/BNB/0xbcE2a84CED47b7f29c5a29e4d158294772cbA272',
    buyTokenUrl:
      'https://dex.ctena.finance/#/BNB/CTENA',
  },
  {
    id: 'cakev2-ctena-busd',
    logo: 'bnb-pairs/CTENA-BUSD.png',
    name: 'CTENA-BUSD',
    token: 'CTENA-BUSD LP',
    tokenDescription: 'Ctena.finance',
    tokenAddress: '0x380bce6e3097E1D6b45Fef2260d8B79E5Bd21458',
    tokenDecimals: 18,
    earnedToken: 'CtenaCakeCTENA-BUSD',
    earnedTokenAddress: '0x1E5D6C9a01BFEcB25De81Dd01415F58Fa49F0FB9',
    earnContractAddress: '0x1E5D6C9a01BFEcB25De81Dd01415F58Fa49F0FB9',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cakev2-ctena-busd',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Ctena.Finance',
    assets: ['CTENA', 'BUSD',],
    withdrawalFee: '0',
    addLiquidityUrl:
      'https://pancakeswap.finance/add/BNB/0xbcE2a84CED47b7f29c5a29e4d158294772cbA272',
    buyTokenUrl:
      'https://dex.ctena.finance/#/BNB/CTENA',
  },
  {
    id: 'cakev2-wctena-bnb',
    logo: 'bnb-pairs/CTENA-BNB.png',
    name: 'wCTENA-BNB',
    token: 'WCTENA-BNB LP',
    tokenDescription: 'Ctena.finance',
    tokenAddress: '0xFfac442863b8c5F5A4321C4a14E39BF51d2E5F73',
    tokenDecimals: 18,
    earnedToken: 'CtenaCakeWCTENA-BNB',
    earnedTokenAddress: '0xBcfAbe9EF14FB3db0739EeCDE453b101b5C73fbc',
    earnContractAddress: '0xBcfAbe9EF14FB3db0739EeCDE453b101b5C73fbc',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cakev2-wctena-wbnb',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Ctena.Finance',
    assets: ['WCTENA', 'BNB'],
    withdrawalFee: '0',
    addLiquidityUrl:
      'https://pancakeswap.finance/add/BNB/0xbcE2a84CED47b7f29c5a29e4d158294772cbA272',
    buyTokenUrl:
      'https://dex.ctena.finance/#/BNB/WCTENA',
  },
  {
    id: 'cakev2-cbase-bnb',
    logo: 'bnb-pairs/CTENA-BNB.png',
    name: 'CBASE-BNB LP',
    token: 'CBASE-BNB LP',
    tokenDescription: 'Ctena.finance',
    tokenAddress: '0xf707db1526d968Bbf0B8DF0947db861cACC232dA',
    tokenDecimals: 18,
    earnedToken: 'CtenaCakeCBASE-BNB',
    earnedTokenAddress: '0x08378a12A3C766f71ecEF37C18523a7458BDb36C',
    earnContractAddress: '0x08378a12A3C766f71ecEF37C18523a7458BDb36C',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'cakev2-cbase-wbnb',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Ctena.Finance',
    assets: ['CBASE', 'BNB'],
    withdrawalFee: '0',
    addLiquidityUrl:
      'https://pancakeswap.finance/add/BNB/0xbcE2a84CED47b7f29c5a29e4d158294772cbA272',
    buyTokenUrl:
      'https://dex.ctena.finance/#/BNB/CBASE',
  },
  {
    id: 'ctena-maxi-v2',
    logo: 'single-assets/CTENA.png',
    name: 'CTENA Maxi',
    token: 'CTENA',
    tokenDescription: 'Ctena.Finance',
    tokenAddress: '0x8f4fc37bff97e6e7fd4355a5df76a486ac1e2e1c',
    tokenDecimals: 9,
    earnedToken: 'CTENAMAXI',
    earnedTokenAddress: '0x743745E7b51FDC0Ea0d17a7F734B248571025C2B',
    earnContractAddress: '0x743745E7b51FDC0Ea0d17a7F734B248571025C2B',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'CTENA',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Ctena.Finance',
    assets: ['CTENA'],
    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_SMALL',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'SingleStake',
    withdrawalFee: '0.05%',
    buyTokenUrl:
      'https://dex.ctena.finance/#/BNB/CTENA',
  },
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
    withdrawalFee: '0.1%',
    buyTokenUrl:
      'https://dex.ctena.finance/#/BNB/CAKE',
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
    withdrawalFee: '0.1%',
    addLiquidityUrl:
      'https://pancakeswap.finance/add/BNB/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    buyTokenUrl:
      'https://dex.ctena.finance/#/BNB/BTCB',
  },
  {
    id: 'banana-eth-bnb',
    name: 'ETH-BNB LP',
    token: 'ETH-BNB LP',
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
    withdrawalFee: '0.1%',
    addLiquidityUrl:
      'https://dex.apeswap.finance/#/add/ETH/0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    buyTokenUrl:
      'https://dex.ctena.finance/#/BNB/ETH',
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
    withdrawalFee: '0.1%',
    addLiquidityUrl:
      'https://pancakeswap.finance/add/BNB/0x78650b139471520656b9e7aa7a5e9276814a38e9',
    buyTokenUrl:
      'https://pancakeswap.finance/swap?outputCurrency=0x78650b139471520656b9e7aa7a5e9276814a38e9',
  },
  {
    id: 'cakev2-cake-bnb',
    name: 'CAKE-BNB LP',
    token: 'CAKE-BNB LP',
    tokenDescription: 'PancakeSwap',
    tokenAddress: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'CtenaCakeCAKE-BNB',
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
    /* risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_HIGH',
      'MCAP_LARGE',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    stratType: 'StratLP', */
    withdrawalFee: '0.1%',
    addLiquidityUrl:
      'https://pancakeswap.finance/add/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/BNB',
    buyTokenUrl:
      'https://dex.ctena.finance/#/BNB/CAKE',
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
    withdrawalFee: '0.1%',
    addLiquidityUrl:
      'https://pancakeswap.finance/add/BNB/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    buyTokenUrl:
      'https://pancakeswap.finance/swap?outputCurrency=0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
  },
];
