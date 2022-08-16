import React from 'react'

interface Props {
    title: string
}
const BlackButton: React.FC<Props> = ({ title }) => {
    return (
        <>
            <button type="button" className="text-white bg-black hover:text-white border border-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-0 ">{title}</button>
        </>
    )
}

export default BlackButton