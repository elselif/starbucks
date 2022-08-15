import { title } from 'process'
import React from 'react'

interface Props {
    title: string,
    description: string,
    image : string,
    buttonText: string,
    buttonText2?: string,

}

const AddCard : React.FC<Props>= ({image,title,description,buttonText,buttonText2}) => {
    return (
        <>
            <div className='p-10 inline-flex'>
                <img src={image} className="w-[390px] h-[350px]" />
                <div className='text-left text-2xl font-semibold  pl-5'>
                    {title}
                    
                    <p className='text-base font-light mt-6'>{description}</p>
                    <button type="button" className="mt-4 text-white bg-green-700  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-0 ">{buttonText}</button>
                    {buttonText2 ? (<button type="button" className="mt-4 text-green-700	 bg-white-100   border-emerald-600 border-2	 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-0 ">{buttonText2}</button>) 
                    
                    : null
                
                }
                    

                </div>
            </div>

        </>
    )
}

export default AddCard