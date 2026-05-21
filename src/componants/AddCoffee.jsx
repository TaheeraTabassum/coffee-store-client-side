import React from "react";

export default function AddCoffee() {
  return (
    <div className="h-screen  bg-white">
      <div className="w-full flex justify-center py-12">
        <h1 className="font-semibold text-amber-700 text-xl"> Add New Coffee</h1>
      </div>
      <div>
        <form>
          <div className="md:flex py-20 mx-24 bg-[#F4F3F0] ">
            <div className="w-1/2 mx-12 md:ml-24 lg:ml-74">
            <div className="flex  flex-col">
              <span >Name</span>
              <input
                className=" p-1 mt-2 bg-white rounded-sm"
                type="text"
                name="name"
                placeholder="name"
                id=""
              />
            </div>
            <div className="flex  my-2 flex-col">
              <span >Supplier</span>
              <input
                className=" p-1 mt-2 bg-white rounded-sm"
                type="text"
                name="supplier"
                placeholder="enter supplier"
                id=""
              />
            </div>
            <div className="flex  flex-col">
              <span >Category</span>
              <input
                className=" p-1 mt-2 bg-white rounded-sm"
                type="text"
                name="category"
                placeholder="enter category"
                id=""
              />
            </div>
            
            </div>
            <div className="flex w-1/2 mx-12 md:mr-24 lg:mr-74 flex-col">
              
             <div className="flex flex-col" >
               <span>Quantity</span>
              <input
                className=" mt-2 p-1 bg-white rounded-sm"
                type="text"
                name="quantity"
                placeholder="available quantity"
                id=""
              />
             </div>
             <div className="flex my-2 flex-col" >
               <span>Taste</span>
              <input
                className=" mt-2 p-1 bg-white rounded-sm"
                type="text"
                name="taste"
                placeholder="enter taste"
                id=""
              />
             </div>
             <div className="flex flex-col" >
               <span>Details</span>
              <input
                className=" mt-2 p-1 input input-warning bg-white rounded-sm"
                type="text"
                name="details"
                placeholder="enter details"
                id=""
              />
             </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
