import React from 'react'
import { CollectionImage } from '../../components/buy/Collectionimage';
import { Collectioninfo } from '../../components/buy/Collectioninfo';
type Props = {}
function index({}: Props) {
  return (
    <div className='max-w-7xl mx-auto relative'>
         <div className='p-4 md:p-10'>
   <div className='flex flex-col md:flex-row gap-10 relative mb-6'>
   <CollectionImage imageUrl='nft/11.jpg' />
   <Collectioninfo />

   </div>
         </div>

    </div>
  )
}

export default index