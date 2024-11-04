import React, { lazy, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

import { categorizeFetched, catSelected } from "./CategorySlice";
import { getCategorize } from "../../services/apiQuiz";
import Card from "../../ui/Card";
import CategorizeItem from "./CategorizeItem";

export default function Categorize() {
  //user choice
  const { allCategorize, categoryId } = useSelector((store) => store.category);
  const dispatch = useDispatch();

  //fetching categorize on mount
  useEffect(() => {
    async function categorize() {
      const data = await getCategorize();

      dispatch(categorizeFetched(data));
    }
    categorize();
  }, []);

  function handleSelect(e) {
    //for option text
    const categoryName = e.target.options[e.target.selectedIndex].text;
    //for option value
    const CategoryId = +e.target.value;
    dispatch(catSelected(categoryName, CategoryId));
  }

  return (
    <Card>
      <div className="text-6xl">
        <FontAwesomeIcon icon={faLayerGroup} />
      </div>
      <div className="tracking-widest text-slate-400">Categorize</div>
      <select
        className="w-1/2 text-sm text-center bg-transparent cursor-pointer backdrop-blur-lg text-wrap sm:w-max sm:text-lg"
        value={categoryId}
        onChange={handleSelect}
      >
        {/* //loading categorize */}
        {allCategorize.length === 0 && <option>Loading ...</option>}

        {/* //categorize fetched*/}
        {allCategorize.length > 0 &&
          allCategorize.map((item) => (
            <CategorizeItem item={item} key={item.id} />
          ))}
      </select>
    </Card>
  );
}
