import React from "react";

import model1 from "../../assets/model-9.png";
// import model2 from "../../assets/model-10.png";
// import model3 from "../../assets/clothing.png";

export default function NewCollection() {
  return (
    <section className=" w-[85%] mx-auto min-h-[50vh] my-15 py-10">
      <h3 className="title my-10">New Collections</h3>
      <div className="flex gap-3">
        <div className="flex-1 ">
          <img src={model1} alt="" />
        </div>
        <div className="flex-1 bg-blue-500">d</div>
      </div>
    </section>
  );
}
