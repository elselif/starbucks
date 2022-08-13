import React from "react";

export default function Sticky() {

  const date = new Date();
  const hour = date.getHours();

  return (
  <div className="flex">
    <div className="w-[578px] h-full border-r-2 shadow-xl mix-blend-multiply   relative " >
      <img src="../../images/mainleft.jpeg" className="w-[359px] h-[650px] items-center mx-auto py-2 " />
      <div className="text-xl font-semibold w-[400px] p-8">
        {hour>12 ? hour>=16 ? <h3>Good Afternoon</h3> : <h3>Good Afternoon</h3> : <h3>Good Morning</h3>}
      </div>
     </div>
    <div className="w-3/5 bg-slate-50 ">
      <img src="../../images/homeP.jpeg" className="p-8"/>
      <div className="static z-0">
      <h3 className="text-left mx-20 font-semibold antialiased text-lg	">Starbucks®’ta yaz b aşk a! ❤️🏖️</h3>
      <p className="mx-20 text-sm	font-normal	 text-left my-5 antialiased">Yaza keyif katan, baristalarımız tarafından özenle hazırlanan yeni cool lezzetlerimizle tanış! 😎 Banana Split Frappuccino® Blended Beverage ile çikolata ve muzun enfes birleşimi, Passionfruit Raspberry Frappuccino® Blended Beverage ile çarkıfelek meyvesi ve ahududunun muhteşem uyumu mağazalarımızda seni bekliyor! 😋🥳🏃🏻‍♀️</p>
      </div>
      <img src="../../images/homeP2.jpeg" className="w-[390px] h-[350px]"/>
      
    </div>
  </div>
  );
}
