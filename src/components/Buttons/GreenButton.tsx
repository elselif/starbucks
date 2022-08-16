import React from 'react'

interface Props {
    title: string
}
const GreenButton: React.FC<Props> = ({ title }) => {
    return (
        <>
            <button type="button" className="text-white bg-green-700 hover:text-white border border-black hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm mt-3 px-5 py-1.5 text-center mr-2 mb-0 ">{title}</button>
        </>
    )
}

export default GreenButton