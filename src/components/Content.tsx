import React from 'react'
import AddCard from './Card/AddCard'

function Content() {
    return (
        <>
            <div className="ml-96">
                <div className="bg-slate-50 basis-3/5 ml-48">
                    <img src="../../images/homeP.jpeg" className="p-8" />
                    <div className="static z-0">
                        <h3 className="text-left mx-20 font-semibold antialiased text-lg	">Starbucks®’ta yaz b aşk a! ❤️🏖️</h3>
                        <p className="mx-20 text-sm	font-normal	 text-left my-5 antialiased">Yaza keyif katan, baristalarımız tarafından özenle hazırlanan yeni cool lezzetlerimizle tanış! 😎 Banana Split Frappuccino® Blended Beverage ile çikolata ve muzun enfes birleşimi, Passionfruit Raspberry Frappuccino® Blended Beverage ile çarkıfelek meyvesi ve ahududunun muhteşem uyumu mağazalarımızda seni bekliyor! 😋🥳🏃🏻‍♀️</p>
                    </div>
                    <AddCard />
                    <AddCard />
                    <AddCard />
                    <AddCard />
                </div>
            </div>
        </>
    )
}

export default Content