import { caseStudies } from '@/constants/static'
import React from 'react'
import CaseStudyCard from './CaseStudyCard'

const CaseStudies = () => {
  return (
    <div className="w-full bg-[#2e3038]">
        {
            caseStudies.map(({tags,title,heading,sub,description,image,bg,reverse})=> (<CaseStudyCard key={title} heading={heading} bg={bg} sub={sub} tags={tags} description={description} reverse={reverse} image={image} />))
        }
            <div className='w-[80%]  py-16 bg-[#2e3038]  mx-auto'>
    <h2 className='text-center text-[#ededed] mb-5 text-5xl font-semibold'>Check out more works by Geeks Invention</h2>
    <p className='text-center text-[#f4f4f4]'>Our case studies describe design and development solutions implemented at our Geeks Invention projects. The stories are a valuable resource for those looking to develop their own mobile apps.

</p>

<div className=" w-full grid justify-center my-10 items-center">
    <button className="bg-transparent   border rounded-full border-[#ff5300] text-[#ff5300] hover:bg-[#ff5300] hover:text-white font-thin py-2 px-6  transition-colors duration-300">
  See all case studies<span className='pl-1 transition-all hover:pl-3'>&#8594;</span>
</button>
</div>
</div>


    </div>
  )
}

export default CaseStudies