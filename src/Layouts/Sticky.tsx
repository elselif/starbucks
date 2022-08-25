import React from "react";

export default function Sticky() {

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="basis-2/5 "  >
      <div className="w-[578px] h-[100%] border-r-2 shadow-xl mix-blend-multiply  relative " >
        <img src="../../images/mainleft.jpeg" className="w-[350px] h-[615px] items-center mx-auto pt-10 mb-10 " />
        <div className="text-4xl w-[400px] p-8 pt-3">
          {
            hour > 12 ? hour >= 16 ? <h1>Good Afternoon</h1> : <h1>Good Afternoon</h1> : <h1>Good Morning</h1>

          }
        </div>
      </div>

    </div>
  );
}
