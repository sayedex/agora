import React from "react";

type Props = {
  description:string
};

export function Description({description}: Props) {
  return (
    <div>
      <div>
        <p className="uppercase globaldarktext py-3">Description</p>
        <p>
          She is striking, beautiful, and brilliant with a unique charm. Khali,
          is nothing short of intoxicating - but proceed with caution - for her
          claws dig deep. She has dedicated her life to the pursuit of knowledge
          and history. Khali spend most of her time searching for the greatest
          treasures of the galaxy while flaunting her deadly charm to an
          unsuspecting foe no collection is safe.
        </p>
      </div>

      <div className="flex flex-col gap-y-4">
        <p className="uppercase globaldarktext py-3">Attributes & utilities</p>
        <p>
          <span className="font-bold">What is an ATTRIBUTE?:</span> When your
          GENESIS NFT is minted, your Character will be assigned random
          attribute bonuses, across 5 possible attributes; SERGE, MIGHT,
          RESILIENCE, WIT and LUCK. Each Attribute will have a bonus value
          between 1 to 100.
        </p>
        <p>
          <span className="font-bold">How many ATTRIBUTE Bonuses?</span> A Rarer
          GENESIS NFT will get more randomly generated Attribute bonuses than a
          common GENESIS NFT (1 for a Common, 2 for an Uncommon, 3 for a Rare, 4
          for an Ultra-Rare and all 5 for a Secret-Rare!). This means that a
          Common NFT will pick one Attribute at random to allocate your score
          to, whereas a Secret-Rare will have scores in all 5 Attributes.
        </p>
        <p>
          <span className="font-bold">Utility:</span> The Attribute scores will
          directly correlate with increased power, buffs and features in JEDSTAR
          Games! Scroll down to see what these effects might be.
        </p>
      </div>
    </div>
  );
}
