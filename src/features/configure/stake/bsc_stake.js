import { govPoolABI } from '../abi';

const moonpot = {
  logo: 'stake/moonpot/logo.png',
  background: 'stake/moonpot/bg.png',
  text: 'Moonpot is a win-win savings game on Binance Smart Chain powered by Beefy Finance. By depositing crypto into a Moonpot, users gain interest on their assets and enter into a prize draw at the same time. There’s a chance to win weekly prizes paid out in crypto from each Moonpot entered — as well as an exclusive monthly prize draw for $POTS stakers.',
  website: 'https://moonpot.com/',
  social: {
    telegram: 'https://t.me/moonpotdotcom',
    twitter: 'https://twitter.com/moonpotdotcom',
  },
};

export const bscStakePools = [
  {
    id: 'cdefi',
    name: 'CDEFI',
    logo: 'single-assets/CTENA.png',
    token: 'CDEFI',
    tokenDecimals: 18,
    tokenAddress: '0x44cb68887e90744dC781d7a230d6876C7A503eC4',
    tokenOracle: 'tokens',
    tokenOracleId: 'CTENA',
    earnedToken: 'CTENA',
    earnedTokenDecimals: 9,
    earnedTokenAddress: '0x612d9c579CF09248b01adA6038f920739B8e8667',
    earnContractAddress: '0x612d9c579CF09248b01adA6038f920739B8e8667',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'CTENA',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/beefy/CTENA.png',
        logoNight: 'stake/beefy/CTENA.png',
        background: 'stake/beefy/background.png',
        text: 'is a token on Binance Smart Chain boasting a number of impressive features. It is the first token with a Black Hole design that exponentially cuts the total supply in circulation by massive amounts. CTENA combines this with an innovative Auto-Liquidity feature that increases liquidity of the token rapidly. And finally, CTENA has massive decentralization on a scale rarely seen in other tokens. Combine these three together and you get a power house token out of the hands of anyone, except the community as a whole. The Black Hole owned over 45% of supply at launch. The Black Hole counts as one of the wallet holders that 4% of transactions are distributed to. This results in exponential growth of the black hole and exponential burn of the token supply. At the time of this writing, the black hole has already grown to 46% percent ownership of the total supply.',
        website: 'https://ctena.finance',
        social: {
          telegram: 'http://t.me/catenaprotocol',
          twitter: 'https://twitter.com/catenaprotocol',
        },
      },
    ],
  },
  {
    id: 'calt',
    name: 'CALT',
    logo: 'single-assets/CTENA.png',
    token: 'CALT',
    tokenDecimals: 18,
    tokenAddress: '0x1FaED0440329b383F7eEfFfE7d0DfdEd87328289',
    tokenOracle: 'tokens',
    tokenOracleId: 'CTENA',
    earnedToken: 'CTENA',
    earnedTokenDecimals: 9,
    earnedTokenAddress: '0xfCCddbCE51e13e492Fd73be29c9c32e06616cc2c',
    earnContractAddress: '0xfCCddbCE51e13e492Fd73be29c9c32e06616cc2c',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'CTENA',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/beefy/CTENA.png',
        logoNight: 'stake/beefy/CTENA.png',
        background: 'stake/beefy/background.png',
        text: 'is a token on Binance Smart Chain boasting a number of impressive features. It is the first token with a Black Hole design that exponentially cuts the total supply in circulation by massive amounts. CTENA combines this with an innovative Auto-Liquidity feature that increases liquidity of the token rapidly. And finally, CTENA has massive decentralization on a scale rarely seen in other tokens. Combine these three together and you get a power house token out of the hands of anyone, except the community as a whole. The Black Hole owned over 45% of supply at launch. The Black Hole counts as one of the wallet holders that 4% of transactions are distributed to. This results in exponential growth of the black hole and exponential burn of the token supply. At the time of this writing, the black hole has already grown to 46% percent ownership of the total supply.',
        website: 'https://ctena.finance',
        social: {
          telegram: 'http://t.me/catenaprotocol',
          twitter: 'https://twitter.com/catenaprotocol',
        },
      },
    ],
  },
  {
    id: 'nakamoto',
    name: 'NAKAMOTO',
    logo: 'single-assets/CTENA.png',
    token: 'NAKAMOTO',
    tokenDecimals: 18,
    tokenAddress: '0xc3A00434bC67ea5a890F939F141252397FcE1Ebf',
    tokenOracle: 'tokens',
    tokenOracleId: 'CTENA',
    earnedToken: 'CTENA',
    earnedTokenDecimals: 9,
    earnedTokenAddress: '0x28C0a69b5B685753C2bD33E22D5B42FC0FEAa4C8',
    earnContractAddress: '0x28C0a69b5B685753C2bD33E22D5B42FC0FEAa4C8',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'CTENA',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/beefy/CTENA.png',
        logoNight: 'stake/beefy/CTENA.png',
        background: 'stake/beefy/background.png',
        text: 'is a token on Binance Smart Chain boasting a number of impressive features. It is the first token with a Black Hole design that exponentially cuts the total supply in circulation by massive amounts. CTENA combines this with an innovative Auto-Liquidity feature that increases liquidity of the token rapidly. And finally, CTENA has massive decentralization on a scale rarely seen in other tokens. Combine these three together and you get a power house token out of the hands of anyone, except the community as a whole. The Black Hole owned over 45% of supply at launch. The Black Hole counts as one of the wallet holders that 4% of transactions are distributed to. This results in exponential growth of the black hole and exponential burn of the token supply. At the time of this writing, the black hole has already grown to 46% percent ownership of the total supply.',
        website: 'https://ctena.finance',
        social: {
          telegram: 'http://t.me/catenaprotocol',
          twitter: 'https://twitter.com/catenaprotocol',
        },
      },
    ],
  },
  {
    id: 'cstable',
    name: 'CSTABLE',
    logo: 'single-assets/CTENA.png',
    token: 'CSTABLE',
    tokenDecimals: 18,
    tokenAddress: '0xA4B7037513184b5848fb7B8d8B4abE7E4633Da60',
    tokenOracle: 'tokens',
    tokenOracleId: 'CTENA',
    earnedToken: 'CTENA',
    earnedTokenDecimals: 9,
    earnedTokenAddress: '0x1d76546f986eB2126d63361d65d255d46C858EEF',
    earnContractAddress: '0x1d76546f986eB2126d63361d65d255d46C858EEF',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'CTENA',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/beefy/CTENA.png',
        logoNight: 'stake/beefy/CTENA.png',
        background: 'stake/beefy/background.png',
        text: 'is a token on Binance Smart Chain boasting a number of impressive features. It is the first token with a Black Hole design that exponentially cuts the total supply in circulation by massive amounts. CTENA combines this with an innovative Auto-Liquidity feature that increases liquidity of the token rapidly. And finally, CTENA has massive decentralization on a scale rarely seen in other tokens. Combine these three together and you get a power house token out of the hands of anyone, except the community as a whole. The Black Hole owned over 45% of supply at launch. The Black Hole counts as one of the wallet holders that 4% of transactions are distributed to. This results in exponential growth of the black hole and exponential burn of the token supply. At the time of this writing, the black hole has already grown to 46% percent ownership of the total supply.',
        website: 'https://ctena.finance',
        social: {
          telegram: 'http://t.me/catenaprotocol',
          twitter: 'https://twitter.com/catenaprotocol',
        },
      },
    ],
  },
  {
    id: 'cake-bnb',
    name: 'CAKE-BNB',
    logo: 'bnb-pairs/CAKE-BNB.svg',
    token: 'CAKE-BNB LP',
    tokenDecimals: 18,
    tokenAddress: '0x36c8EA66B889353A4c062AdfA0Cc941626E1Bf08',
    tokenOracle: 'tokens',
    tokenOracleId: 'WBNB',
    earnedToken: 'CTENA',
    earnedTokenDecimals: 9,
    earnedTokenAddress: '0x8f4fc37bff97e6e7fd4355a5df76a486ac1e2e1c',
    earnContractAddress: '0x2C3545ADF550B5eA4fF86101a1a1Fbf950049f53',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'CTENA',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/beefy/CTENA.png',
        logoNight: 'stake/beefy/CTENA.png',
        background: 'stake/beefy/background.png',
        text: 'is a token on Binance Smart Chain boasting a number of impressive features. It is the first token with a Black Hole design that exponentially cuts the total supply in circulation by massive amounts. CTENA combines this with an innovative Auto-Liquidity feature that increases liquidity of the token rapidly. And finally, CTENA has massive decentralization on a scale rarely seen in other tokens. Combine these three together and you get a power house token out of the hands of anyone, except the community as a whole. The Black Hole owned over 45% of supply at launch. The Black Hole counts as one of the wallet holders that 4% of transactions are distributed to. This results in exponential growth of the black hole and exponential burn of the token supply. At the time of this writing, the black hole has already grown to 46% percent ownership of the total supply.',
        website: 'https://ctena.finance',
        social: {
          telegram: 'http://t.me/catenaprotocol',
          twitter: 'https://twitter.com/catenaprotocol',
        },
      },
    ],
  },
];
