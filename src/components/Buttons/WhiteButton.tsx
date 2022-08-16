import React from 'react'

interface Props {
    title: string
    color?: string
}
const WhiteButton: React.FC<Props> = ({ title, color }) => {
    return (
        <>
            {color ?
                (<button type="button" className="text-black bg-white hover:text-black border border-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-0">{title}</button>
                )
                : <button type="button" className="text-green-700 bg-white hover:text-green-700 border border-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-0">{title}</button>

            }
        </>
    )
}

export default WhiteButton