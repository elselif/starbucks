import { title } from 'process'
import React from 'react'
import GreenButton from '../Buttons/GreenButton'
import WhiteButton from '../Buttons/WhiteButton'
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
                    <GreenButton title={buttonText}></GreenButton>

                    {buttonText2 ?
                        (<WhiteButton title={buttonText2}></WhiteButton>)
                        : null
                    }
                </div>
            </div>

        </>
    )
}

export default AddCard