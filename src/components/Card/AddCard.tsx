import React from 'react'

function AddCard() {
    return (
        <>
            <div className='p-10 inline-flex'>
                <img src="../../images/homeP2.jpeg" className="w-[390px] h-[350px]" />
                <div className='text-left text-2xl font-semibold  pl-5'>
                    Yazına renk katacak Starbucks® ürünleri Hepsiburada’da!
                    <p className='text-base font-light mt-6'>Birbirinden farklı renk ve tasarımları ile Starbucks® kupa ve termosları Hepsiburada’da seni bekliyor!</p>
                    <button type="button" className="mt-4 text-white bg-green-700 hover:text-white border  hover:bg-green-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-0 ">Hemen Katıl</button>

                </div>
            </div>

        </>
    )
}

export default AddCard