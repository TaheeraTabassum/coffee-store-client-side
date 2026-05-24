import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

export default function Coffee({ coffee }) {
  const { _id, name, supplier, taste, details, photo } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        fetch(`http://localhost:5000/coffee/${id}`, {
      method:'DELETE'
      })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
    });
  };
  return (
    <div className="flex shadow-sm  justify-between p-6 rounded-md bg-[#F5F4F1]">
      <div>
        <img className="p-8" src={photo} alt="" />
      </div>
      <div className="flex gap-4 flex-col justify-center ">
        <p>
          {" "}
          <span className="font-semibold text-md">Name :</span> {name}
        </p>
        <p>
          <span className="font-semibold text-md"> Chef :</span> {supplier}
        </p>
        <p>
          <span className="font-semibold text-md">Taste :</span> {taste}
        </p>
        <p>
          <span className="font-semibold text-md">Details :</span> {details}
        </p>
      </div>
      <div className="flex gap-8 flex-col justify-center ">
        <button className="btn btn-accent">view</button>
        <button className="btn btn-primary"><Link to={`/updatecoffee/${_id}`}>edit</Link></button>
        <button onClick={() => handleDelete(_id)} className="btn btn-error ">
          delete
        </button>
      </div>
    </div>
  );
}
