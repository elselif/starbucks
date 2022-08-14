import React from "react";

export default function Sticky() {

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="basis-2/5"  >
      <div className="w-[578px] h-full border-r-2 shadow-xl mix-blend-multiply  relative " >
        <img src="../../images/mainleft.jpeg" className="w-[359px] h-[650px] items-center mx-auto py-2 " />
        <div className="text-xl font-semibold w-[400px] p-8">
          {hour > 12 ? hour >= 16 ? <h3>Good Afternoon</h3> : <h3>Good Afternoon</h3> : <h3>Good Morning</h3>}
        </div>
      </div>

    </div>
  );
}
