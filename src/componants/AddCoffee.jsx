import { useEffect } from "react";

export default function AddCoffee() {

  const handleAddCoffee = event =>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name, quantity, supplier, taste, category, details, photo}
    console.log(newCoffee);
   
    fetch('http://localhost:5000/coffees', {
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      
  })
  }
  
  return (
    <div className="h-screen  bg-white">
      <div className="w-full flex justify-center py-12">
        <h1 className="font-bold text-amber-700 text-xl"> Add New Coffee</h1>
      </div>
      <div>
        <form onSubmit={handleAddCoffee} className="  bg-[#F4F3F0] mx-24 py-20 ">
          <div className="md:flex     ">
            <div className="w-1/2 md:ml-32 ">
            <div className="flex  flex-col">
              <span className = "ml-4 lg:ml-12">Name</span>
              <input
                className=" w-[88%] mx-auto flex p-1 mt-2 input input-warning bg-white rounded-sm"
                type="text"
                name="name"
                placeholder="name"      
                id=""
              />
            </div>
            <div className="flex  my-2 flex-col">
              <span className = "ml-4 lg:ml-12">Supplier</span>
              <input
                className=" w-[88%] mx-auto flex p-1 mt-2 input input-warning bg-white rounded-sm"
                type="text"
                name="supplier"
                placeholder="enter supplier"
                id=""
              />
            </div>
            <div className="flex  flex-col">
              <span className = "ml-4 lg:ml-12">Category</span>
              <input
                className=" w-[88%] mx-auto flex p-1 mt-2 input input-warning bg-white rounded-sm"
                type="text"
                name="category"
                placeholder="enter category"
                id=""
              />
            </div>
            
            </div>
            <div className=" w-1/2  md:mr-32">
              
             <div className="flex flex-col" >
               <span className = "ml-4 lg:ml-12">Quantity</span>
              <input
                className="  w-[88%] mx-auto flex mt-2 p-1 input input-warning bg-white rounded-sm"
                type="text"
                name="quantity"
                placeholder="available quantity"
                id=""
              />
             </div>
             <div className="flex my-2 flex-col" >
               <span className = "ml-4 lg:ml-12">Taste</span>
              <input
                className=" w-[88%] mx-auto flex mt-2 p-1 input input-warning bg-white rounded-sm"
                type="text"
                name="taste"
                placeholder="enter taste"
                id=""
              />
             </div>
             <div className="flex flex-col" >
               <span className = "ml-4 lg:ml-12">Details</span>
              <input
                className=" w-[88%] mx-auto flex mt-2 p-1 input input-warning bg-white rounded-sm"
                type="text"
                name="details"
                placeholder="enter details"
                id=""
              />
             </div>
            </div>
            
          </div>
          <input type="text" name="photo" placeholder="photo URL " className="my-5 p-1 input input-warning bg-white rounded-sm w-[88%] md:w-[80%] mx-auto flex" id="" />
          <input type="submit" value="add coffee" className=" border border-[#774b42] rounded-sm bg-[#d1ae81] py-2
          w-[88%] md:w-[80%] mx-auto flex  "  />
        </form>
      </div>
    </div>
  );
}
