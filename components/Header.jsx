"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { useStore } from "@/lib/store";
import { CiMenuKebab } from "react-icons/ci";
import Basecontent from "@/components/basecontent"
import { useQuery } from "@tanstack/react-query"
import { getQuery } from "./ProductList";

function HeaderSection() {
  const { cart, productName, price } = useStore();
  const [search, setSearch] = useState("")


  const { data, isLoading, error } = useQuery({
    querykey: ["product"],
    queryFn: getQuery
  })

  const handleSearch = (e) => {
    setSearch(e)
  }

  const dataContent = data?.data

  const resultSearch = _.filter(dataContent, (item) => {
    return item.title.toLowerCase().includes(search.toLowerCase())
  })

  console.log(resultSearch)
  return (
    <div>
      <div className="bg-color-main">
        <div className="wrapper">
          <div className="flex justify-between items-center py-5">
            <Link href="/" className="text-white text-2xl font-extrabold">
              MyCommerce
            </Link>
            <div className="lg:block">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 px-3 rounded-lg min-w-[300px]"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <div className="flex">
              <Link href="/cart" className="text-3xl text-white relative">
                <IoMdCart />
                <div className="absolute text-[10px] top-0 right-0 bg-black text-white w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </div>
              </Link>
              <div className="text-white text-2xl lg:hidden block">
                <CiMenuKebab />
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        search ? <div className="bg-white shadow-lg max-w-[900px] mx-auto my-3 p-7">
          <strong>Ditemukan item yang berkaitan : {resultSearch.length}</strong>
          <ul>
            {
              resultSearch?.map((item) => {
                return (
                  <li key={item.id}><Link href={`/product/${item.id}`}>{item.title}</Link></li>
                )
              })
            }
          </ul>
        </div> : null
      }
    </div>
  )
}

export default function Header() {
  return (
    <Basecontent>
      <HeaderSection />
    </Basecontent>
  );
}
