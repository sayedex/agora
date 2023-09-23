export const NFT_CONTRACT = "0xF8B709762639A398cE0AD2cf6b7751f7f7976B42";
export const NFT_PRICE = "0.001";

export const categories = [
  "Common",
  "Battle Ready",
  "Jed's Journey",
  "After Dark",
  "Aaron Miller",
  "Founder's Mint",
];

export const rarity = [
  "Secret Rare",
  "Uncommon",
  "Ultra Rare",
  "Rare",
  "Common",
];

export const RareColor = {
  SecretRare: "#E431FF",
  Uncommon: "#318DFF",
  UltraRare: "#31FF5D",
  Rare: "#FFD131",
  Common: "#D9D9D9",
};

const rarityStrings = {
  Common: "Common",
  Uncommon: "Uncommon",
  Rare: "Rare",
  UltraRare: "Ultra rare",
  SecretRare: "Secret rare",
};

export const depositInfo1 = [
  "To purchase digital collectables on AGORA you first need to deposit funds into the escrow wallet.",
  "Once transferred your credit balance will update in the 'My AGORA' section within 1-5 minutes. You can then use your balance to purchase any of the NFTs available on AGORA.",
];

export const depositInfo2 = [
  "Supported networks: Ethereum, Polygon, Binance Smart Chain",
  "To deposit funds into your account send one of the accepted currencies to wallet address:",
];

export const Impotancede = [
  "IMPORTANT: YOU MUST TRANSFER THE CURRENCY FROM THE SAME WALLET YOU LOG IN WITH. DO NOT TRANSFER IN FROM AN EXCHANGE OR HOSTED WALLET.",
];

export const Bost = [
  {
    trait_type: "Silvervolt Bid Boost",
    traits_info:
      "Gives you additional weekly auction bids. Up to 5 / week for a Secret rare.",
    type: "Serge",
    name: "BID BOOST",
    dyamicInfo: "Additional Bids per week.",
    showcondition: false,
    unavailable: [],
  },
  {
    trait_type: "Silvervolt Mining Boost",
    traits_info: "Boosts your VOLT mining power. Up to 10% for a Secret rare.",
    type: "Might",
    name: "MINING BOOST",
    dyamicInfo: "Boost to VOLTS Mining Power.",
    showcondition: false,
    unavailable:[],
  },
  {
    trait_type: "TIER BOOST    ",
    traits_info:
      "Instant access to Diamond-Tier Auctions for a Secret rare.    ",

    type: "",
    name: "TIER BOOST",
    dyamicInfo: "Access to Diamond tier auctions. ",
    showcondition: true,
    unavailable: [rarityStrings.Common],
  },
  {
    trait_type: "Silvervolt Referral Boost",
    traits_info:
      "Boosts your referral VOLT bonus. Up to 4% extra for a Secret rare. ",
    type: "Resilience",
    name: "REFERRAL BOOST",
    dyamicInfo: "extra VOLTS from Referrals.",
    showcondition: false,
    unavailable:[],
  },
  {
    trait_type: "Silvervolt Wheel Spin Diamond Discount",
    traits_info:
      "Cheaper Wheel Spins! (Coming Soon) Up to 80% off wheel spins for a Secret rare.    ",
    type: "Wit",
    name: "WHEEL SPIN BOOST",
    dyamicInfo: "as your special pricing",
    showcondition: false,
    unavailable:[],
  },
  {
    trait_type: "Silvervolt Lottery Diamond Discount",
    traits_info:
      "Cheaper Lottery Tickets! Up to 80% off Lottery tickets for a Secret rare.    ",
    type: "Luck",
    name: "LOTTERY TICKET BOOST",
    dyamicInfo: "as your special pricing",
    showcondition: false,
    unavailable:[],
  },
  {
    trait_type: "HIGH ROLLER ACCESS    ",
    traits_info: "Coming Soon.    ",
    type: "",
    name: "HIGH ROLLER ACCESS",
    dyamicInfo: "Coming Soon. ",
    showcondition: true,
    unavailable: [
      rarityStrings.Uncommon,
      rarityStrings.Common,
      rarityStrings.UltraRare,
      rarityStrings.Rare,
    ],
  },
  {
    trait_type: "CUSTOM NAME ",
    traits_info:
      "Update your handle to be a custom name! Ultra-Rare NFTs and above.    ",
    name: "CUSTOM NAME",
    dyamicInfo: "Access to Custom Name: Yes",
    showcondition: true,
    unavailable: [
      rarityStrings.Uncommon,
      rarityStrings.Common,
      rarityStrings.Rare,
    ],
  },
  {
    trait_type: "CUSTOM AVATAR ",
    traits_info:
      "Update your handle to be a custom name! Ultra-Rare NFTs and above.    ",
    name: "CUSTOM AVATAR    ",
    dyamicInfo: "Access to Custom Avatar: Yes",
    showcondition: true,
    unavailable: [rarityStrings.Uncommon, rarityStrings.Common],
  },
];
