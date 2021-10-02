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
    id: 'ribbon-bnb',
    name: 'CAKE-BNB',
    logo: 'bnb-pairs/CAKE-BNB.svg',
    token: 'CAKE-BNB LP',
    tokenDecimals: 18,
    tokenAddress: '0x36c8EA66B889353A4c062AdfA0Cc941626E1Bf08',
    tokenOracle: 'tokens',
    tokenOracleId: 'CTENA',
    earnedToken: 'CTENA',
    earnedTokenDecimals: 9,
    earnedTokenAddress: '0x8f4fc37bff97e6e7fd4355a5df76a486ac1e2e1c',
    earnContractAddress: '0x2C3545ADF550B5eA4fF86101a1a1Fbf950049f53',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'WBNB',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/beefy/beefyfinance.png',
        logoNight: 'stake/beefy/beefyfinance_night.png',
        background: 'stake/beefy/background.png',
        text: "You probably already knew that Beefy is the most trusted Yield optimizer for the Binance Smart Chain. But did you know that Beefy has its own token? $BIFI has a maximum supply of 80000 tokens and there is no way to mint more. Everyone who holds our own $BIFI token can not only do cool stuff like create and vote on proposals, they also get a share of all harvests done, every hour, every day on all our +120 vaults. That's a lot of BNB that goes straight to our $BIFI holders. All you have to do is stake your $BIFI in this vault, it’s that simple, come back and harvest your BNB whenever you need it! (You can still vote on proposals even though you have staked your $BIFI here).",
        website: 'https://app.beefy.finance',
        social: {
          telegram: 'http://t.me/beefyfinance',
          twitter: 'https://twitter.com/beefyfinance',
        },
      },
    ],
  },
  /*  {
    id: 'ribbon-bnb',
    name: 'RIBBON',
    logo: 'single-assets/BIFI.png',
    token: 'RIBBON',
    tokenDecimals: 18,
    tokenAddress: '0x32e5bE58eda6b01768E0375c3f1f451b06393460',
    tokenOracle: 'tokens',
    tokenOracleId: 'RIBBON',
    earnedToken: 'BNB',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    earnContractAddress: '0x8F7e56829b2a71CDa994b1B2e9D52fceBe3616c9',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'WBNB',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/beefy/beefyfinance.png',
        logoNight: 'stake/beefy/beefyfinance_night.png',
        background: 'stake/beefy/background.png',
        text: "You probably already knew that Beefy is the most trusted Yield optimizer for the Binance Smart Chain. But did you know that Beefy has its own token? $BIFI has a maximum supply of 80000 tokens and there is no way to mint more. Everyone who holds our own $BIFI token can not only do cool stuff like create and vote on proposals, they also get a share of all harvests done, every hour, every day on all our +120 vaults. That's a lot of BNB that goes straight to our $BIFI holders. All you have to do is stake your $BIFI in this vault, it’s that simple, come back and harvest your BNB whenever you need it! (You can still vote on proposals even though you have staked your $BIFI here).",
        website: 'https://app.beefy.finance',
        social: {
          telegram: 'http://t.me/beefyfinance',
          twitter: 'https://twitter.com/beefyfinance',
        },
      },
    ],
  }, */
];
