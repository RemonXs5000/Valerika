import model1 from "../../assets/model-9.png";
import model2 from "../../assets/clothing.png";
import model3 from "../../assets/model-11.jpg";

export default function NewCollection() {
  return (
    <section className="w-[85%] mx-auto min-h-[50vh] my-10 py-10">
      <h3 className="title my-10 text-center">New Collections</h3>

      <div className="flex gap-5 items-center">
        <div className="flex-1">
          <img
            src={model1}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <img
            src={model2}
            alt=""
            className="w-full h-[280px] object-cover rounded-xl"
          />

          <img
            src={model3}
            alt=""
            className="w-full h-[280px] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
