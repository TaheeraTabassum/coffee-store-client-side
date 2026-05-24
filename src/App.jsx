import { Link, useLoaderData } from "react-router";
import Coffee from "./componants/Coffee";
import cup from "./assets/cup.png";
import img from "./assets/restaurant.png";

function App() {
  const coffees = useLoaderData();
  return (
    <div className="bg-white relative py-12 h-100vh text-center">
      <div>
        <img className="absolute" src={cup} alt="" />
      </div>
      <div>
        <img className="absolute z-10 -right-14 bottom-0" src={img} alt="" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold my-2">Our Popular Products</h1>
        <button className="bg-[#E3B577] border border-[#331A15] py-1 px-2 rounded-sm">
          <Link to="/addcoffee">add coffee</Link>
        </button>
      </div>

      <div className="grid z-20  px-78 py-8  gap-12 grid-cols-2 w-full ">
        {coffees.map((coffee) => (
          <Coffee key={coffee._id} coffee={coffee}></Coffee>
        ))}
      </div>
    </div>
  );
}

export default App;
