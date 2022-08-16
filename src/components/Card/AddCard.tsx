import { title } from 'process'
import React from 'react'

interface Props {
    title: string,
    description: string,
    image: string,
    buttonText: string,
    buttonText2?: string,

}

const AddCard: React.FC<Props> = ({ image, title, description, buttonText, buttonText2 }) => {
    return (
        <>
            <div className='px-10 py-8 inline-flex'>
                <img src={image} className="w-[390px] h-[340px]" />
                <div className='text-left text-2xl font-semibold  pl-5'>
                    {title}
                    <p className='text-base font-light mt-6'>{description}</p>
                    <button
                        type="button"
                        className="text-white bg-green-700 hover:text-white border border-black hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm mt-3 px-5 py-1.5 text-center mr-2 mb-0 ">
                        {buttonText}
                    </button>
                    {buttonText2 ?
                        (<button
                            type="button"
                            className="text-green-700 bg-green hover:text-green-700 border border-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-0 ">
                            {buttonText2}
                        </button>)
                        : null
                    }
                </div>
            </div>

        </>
    )
}

export default AddCard