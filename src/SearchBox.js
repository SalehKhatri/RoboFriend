import React from "react";

const SearchBox = ({seachchange})=>{
    return(
        <div className="text-white">
        <input 
         type="text"
         placeholder="Search Robots"
         className="bg-black hover:bg-gray-700 active:bg-gray-700 focus:bg-gray-800 m-2 p-2 rounded-md border-2 border-gray-500"
          onChange={seachchange}
         />
        </div>
    )
}

export default SearchBox