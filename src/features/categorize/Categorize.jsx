import React, { lazy, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

// const FontAwesomeIcon = lazy(() => import("@fortawesome/react-fontawesome"));
// const faLayerGroup = lazy(() => import("@fortawesome/react-fontawesome"));
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

import { categorizeFetched, catSelected } from "./CategorySlice";
import { getCategorize } from "../../services/apiQuiz";

// const Card = lazy(() => import("../../ui/Card"));
// const CategorizeItem = lazy(() => import("./CategorizeItem"));
import Card from '../../ui/Card'
import CategorizeItem from './CategorizeItem'

export default function Categorize() {
  //user selection
  const { allCategorize, categoryId } = useSelector(store => store.category)

  const dispatch = useDispatch();

  useEffect(() => {
    async function categorize() {
      const data = await getCategorize();

      dispatch(categorizeFetched(data));
    }
    categorize();
  }, []);

 
  function handleSelect(e) {
    const categoryName = e.target.options[e.target.selectedIndex].text;
    const CategoryId = +e.target.value;
    console.log("name", categoryName, CategoryId);
    dispatch(catSelected(categoryName, CategoryId));
  }

  return (
    <Card>
      <div className="text-6xl">
        <FontAwesomeIcon icon={faLayerGroup} />
      </div>
      <div className="tracking-widest text-slate-400">Categorize</div>
      <select
        className="bg-transparent text-center w-1/2 backdrop-blur-lg text-wrap  text-sm "
        value={categoryId}
        onChange={handleSelect}
      >
        {/* //loading category */}
        {allCategorize.length === 0 && <option>Loading ...</option>}

        {/* //category fetched*/}

        {allCategorize.length > 0 &&
          allCategorize.map((item) => (
            <CategorizeItem item={item} key={item.id} />
          ))}
      </select>
    </Card>
  );
}
