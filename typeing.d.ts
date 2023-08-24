export interface nftData  {
name:string,
price:number,
totalmint:number,
rarity:number,
image:string,
cetagory:string
}


export interface NFTMetadata {
    // Define the structure of your NFT metadata here
    name: string;
    image: string;
    character_traits:{},
    attributes:[{
      max_value:any,
      trait_type:string,
      value:string
    }],
    last_generation_time:Number
  
    // ... other fields
  }