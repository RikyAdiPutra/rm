"use client"

import Image from "next/image"
import React, { useEffect } from 'react'
import { useStore } from "@/lib/store";
import _ from "lodash";
import { useState } from "react";

export default function CartPage() {
  const [totalCart, setTotalCart] = useState(0)
  const { cart } = useStore()

  console.log(cart)
  useEffect(() => {
    const total = _.sumBy(cart, "totalPriceItem")
    setTotalCart(total)
  }, [cart])
  return (
    <div className="bg-gray-100">
      <div className="wrapper py-11">
        <div className="relative max-w-[700px] mx-auto">
          <h4 className="text-3xl font-bold mb-5">Keranjang</h4>
          <div className="bg-white rounded-lg p-5">
            {
              cart.length > 0 ?
                <div>
                  <div className="flex flex-col gap-4">
                    {
                      cart?.map((item) => {
                        return (
                          <div className="flex justify-between w-full">
                            <div className="flex gap-4">
                              <div className="max-w-[100px]">
                                <Image src={item.img} width={500} height={500} alt="no image" />
                              </div>
                              <div>
                                <div className="relative text-lg ">
                                  {item.name}
                                </div>
                                <div className="text-sm">x{item.total}</div>
                              </div>
                            </div>
                            <div className="relative font-bold">${item.price}</div>
                          </div>)
                      })
                    }


                  </div>
                  <div className="flex justify-between mt-10 text-3xl font-bold">
                    <div>Total</div>
                    <div>${totalCart}</div>
                  </div>
                  <div className="btn mt-5 p-3 cursor-pointer">Checkout</div>
                </div>
                : "Keranjang belanja kosong"
            }
          </div>
        </div>
      </div>
    </div>
  )
}