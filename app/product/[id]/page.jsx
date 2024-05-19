"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/lib/services";
import Basecontent from "@/components/basecontent";
import { useStore } from "@/lib/store";

function DataPageDetail() {
  const [cartValue, setCartValue] = useState(2);
  const { cart, updateCart, test } = useStore();

  console.log(cart);

  const params = useParams();
  const getQuery = async () => {
    return await getData(`/products/${params.id}`);
  };

  const query = useQuery({
    queryKey: ["productDetail"],
    queryFn: getQuery,
  });

  if (query.isLoading) {
    return (
      <div className="wrapper relative flex justify-center mt-10">
        <div className="animate-pulse w-full flex gap-4">
          <div className="rounded-sm bg-slate-200 h-[300px] w-full "></div>
        </div>
      </div>
    );
  }
  const dataContent = query.data?.data;
  return (
    <div className="wrapper py-11">
      <div className="flex">
        <div className="w-6/12">
          {dataContent?.image ? (
            <Image src={`${dataContent?.image}`} width={500} height={500} />
          ) : (
            <Image src="/images/no-image-square.jpg" width={500} height={500} />
          )}
        </div>
        <div className="w-6/12">
          <h1 className="text-4xl font-bold text-color-main">
            {dataContent?.title}
          </h1>
          <h5 className="my-3">Category: {dataContent?.category}</h5>
          <h4 className="my-4 text-2xl font-bold">$ {dataContent?.price}</h4>
          <h5 className="text-lg font-bold">Description:</h5>
          <p>
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </p>
          <div className="my-5">Rating</div>
          <div className="flex gap-3 items-center">
            <div
              className="relative btn cursor-pointer"
              onClick={() => {
                if (cartValue > 0) {
                  setCartValue(cartValue - 1);
                }
              }}
            >
              -
            </div>
            <div>{cartValue}</div>
            <div
              className="relative btn cursor-pointer"
              onClick={() => setCartValue(cartValue + 1)}
            >
              +
            </div>
          </div>
          <div
            className="btn-red my-4 "
            onClick={() =>
              updateCart(
                dataContent?.id,
                dataContent?.price,
                dataContent?.title,
                dataContent?.image,
                cartValue
              )
            }
          >
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PageDetail() {
  return (
    <Basecontent>
      <DataPageDetail />
    </Basecontent>
  );
}
