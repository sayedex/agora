import { rarityStrings,ATTRIBUTES_COUNT_AMOUNT ,MAX_WHEEL_BOOST_PWR,MAX_MINTING_BOOST_PWR,MAX_REFERRAL_BOOST_PWR,MAX_LOTTERY_BOOST_PWR,MAX_TIER_BOOST_PWR} from "../config/index";

export const defaultBOOST = (rarity:string) => {
    //its for getting object data 
    const rarityText = String(rarity).replace(/\s/g, "");
    const ATTRIBUTES_COUNT =  ATTRIBUTES_COUNT_AMOUNT[rarityText as keyof typeof ATTRIBUTES_COUNT_AMOUNT]
   //its for show
    const rarityTextForshow = String(rarity).charAt(0).toUpperCase() + String(rarity).slice(1).toLowerCase();

  console.log(rarityTextForshow,rarity);
  
  ///all pwr gate
  const mining_PWR = MAX_MINTING_BOOST_PWR[rarityText as keyof typeof MAX_MINTING_BOOST_PWR];
  const tier_PWR = MAX_TIER_BOOST_PWR[rarityText as keyof typeof MAX_TIER_BOOST_PWR];
  const referral_PWR = MAX_REFERRAL_BOOST_PWR[rarityText as keyof typeof MAX_REFERRAL_BOOST_PWR];
  const wheel_PWR = MAX_WHEEL_BOOST_PWR[rarityText as keyof typeof MAX_WHEEL_BOOST_PWR];
  const lottery_PWR = MAX_LOTTERY_BOOST_PWR[rarityText as keyof typeof MAX_LOTTERY_BOOST_PWR];

  const BidboostText = `Gives you additional weekly auction bids. Up to ${ATTRIBUTES_COUNT} / week for a ${rarityTextForshow}.`
  const MintingboostText = `Boosts your VOLT mining power. Up to ${mining_PWR}% for a ${rarityTextForshow}.`;
  const tierboostText =`Instant access to ${tier_PWR} for a ${rarityTextForshow}.`;
  const referralboostText = `Boosts your referral VOLT bonus. Up to ${referral_PWR}% extra for a ${rarityTextForshow}. `
  const wheelboostText = `Cheaper Wheel Spins! (Coming Soon) Up to ${wheel_PWR}% off wheel spins for a ${rarityTextForshow}.  `
  const lotteryboostText  = `Cheaper Lottery Tickets! Up to ${lottery_PWR}% off Lottery tickets for a ${rarityTextForshow}.    `


  const Bost = [
    {
      trait_type: "Silvervolt Bid Boost",
      traits_info:BidboostText,
      type: "Serge",
      name: "BID BOOST",
      dyamicInfo: "Additional Bids per week.",
      showcondition: false,
      unavailable: [],
    },
    {
      trait_type: "Silvervolt Mining Boost",
      traits_info:
      MintingboostText,
      type: "Might",
      name: "MINING BOOST",
      dyamicInfo: "Boost to VOLTS Mining Power.",
      showcondition: false,
      unavailable: [],
    },
    {
      trait_type: "TIER BOOST    ",
      traits_info:
      tierboostText,
      type: "",
      name: "TIER BOOST",
      dyamicInfo: "Access to Diamond tier auctions. ",
      showcondition: true,
      unavailable: [rarityStrings.Common],
    },
    {
      trait_type: "Silvervolt Referral Boost",
      traits_info:
      referralboostText,
      type: "Resilience",
      name: "REFERRAL BOOST",
      dyamicInfo: "extra VOLTS from Referrals.",
      showcondition: false,
      unavailable: [],
    },
    {
      trait_type: "Silvervolt Wheel Spin Diamond Discount",
      traits_info:
      wheelboostText,
      type: "Wit",
      name: "WHEEL SPIN BOOST",
      dyamicInfo: "as your special pricing",
      showcondition: false,
      unavailable: [],
    },
    {
      trait_type: "Silvervolt Lottery Diamond Discount",
      traits_info:
      lotteryboostText,
      type: "Luck",
      name: "LOTTERY TICKET BOOST",
      dyamicInfo: "as your special pricing",
      showcondition: false,
      unavailable: [],
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

  return Bost;
};
