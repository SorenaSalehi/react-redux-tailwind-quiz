import React, { useEffect, useState } from "react";

import Card from "../../ui/Card";
import CategorizeItem from "./CategorizeItem";
import { useDispatch, useSelector } from "react-redux";
import { categorizeFetched, catSelected } from "./CategorySlice";
import { getCategorize } from "../../services/apiQuiz";

export default function Categorize() {
 
  //user selection
  const { allCategorize,categoryId } = useSelector((store) => store.category);
  console.log(allCategorize)

  const dispatch = useDispatch();

  useEffect(() => {
    async function categorize(){
      const data = await getCategorize();
     
      dispatch(categorizeFetched(data))
    }
    categorize()
  }, []);

  function handleSelect(e) {
    const categoryName = e.target.options[e.target.selectedIndex].text;
    const CategoryId = +e.target.value;
    console.log("name", categoryName, CategoryId);
    dispatch(catSelected(categoryName, CategoryId));
  }

  return (
    <Card>
      <h1>icon</h1>
      <button>Categorize</button>
      <select
        value={categoryId}
        onChange={handleSelect}
        
      >
        {allCategorize.length > 0 &&
          allCategorize.map((item) => (
            <CategorizeItem item={item} key={item.id} />
          ))}
      </select>
    </Card>
  );
}
