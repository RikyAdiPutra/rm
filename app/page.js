"use client";
import FilterData from "@/components/FilterData";
import Basecontent from "@/components/basecontent";
import ProductList from "@/components/ProductList";
import SortData from "@/components/SortData";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="wrapper">
      <Basecontent>
        <div className="my-7">
          <div className="flex justify-between items-center">
            <FilterData onSelectCategory={setSelectedCategory} />
            <SortData />
          </div>
          <ProductList shouldDisplay={!selectedCategory} />
        </div>
      </Basecontent>
    </div>
  );
}
