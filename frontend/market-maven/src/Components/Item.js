import React from "react";
import { useState } from "react";

import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';

const Item = (props) => {
  return (
    <>
      <div className="p-4 my-2 rounded-lg flex flex-col items-center">
        <div className="overflow-hidden rounded-xl shadow-xl my-4">
          {!props.image ?
            <div className="w-[300px] h-[350px] flex justify-center items-center hover:scale-110 duration-300">
              <PhotoOutlinedIcon className="flex justify-center scale-300"/>
            </div>
            :
            <img
              className="w-[300px] h-[350px] object-cover bg-blue-500 hover:scale-110 duration-300"
              src={props.image}
              alt={props.name}
            />
          }
          <div className="bg-white w-[300px] p-2">
            <h1 className="text-3xl text-black text-center">{props.name}</h1>
            <h2 className="text-2xl">{props.price}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
