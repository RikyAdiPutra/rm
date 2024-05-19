"use client";

import Image from "next/image";
import React from "react";
import { useStore } from "@/lib/store";

export default function CartPage() {
  const { cart } = useStore();
  return (
    <div className="bg-gray-100">
      <div className="wrapper py-11">
        <div className="relative max-w-[700px] mx-auto">
          <h4 className="text-3xl font-bold mb-5">Keranjang</h4>
          <div className="bg-white rounded-lg p-5">
            {cart.length > 0 ? cart.map((item) => (
              <div className="my-14 flex flex-col gap-4" id={item.id}>
                <div className="flex justify-between w-full">
                  <div className="flex gap-4">
                    <div className="max-w-[100px]">
                      <Image
                        src={item.img}
                        width={500}
                        height={500}
                        alt="no image"
                      />
                    </div>
                    <div className="relative text-lg flex flex-col justify-between">
                      <div>{item.name}</div>
                      <b className="flex justify-end">( X {item.total} )</b>
                    </div>
                  </div>
                  <div className="relative font-bold">{item.price}</div>
                </div>
                <div className="flex justify-between mt-10 text-3xl font-bold">
                  <div>Total</div>
                  <div>$ {item.price * item.total}</div>
                </div>
              </div>
            )) : <div className="text-white font-extrabold text-[15px] h-[200px] bg-blue-500 flex justify-center items-center rounded-lg">Upss..Looks like you haven't added any items yet</div>}
            <div className="btn mt-5 p-3 cursor-pointer">Checkout</div>
          </div>
        </div>
      </div>
    </div>
  );
}
