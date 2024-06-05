"use client"
import React from 'react'
import ItemProduct from "@/components/ItemProduct";
import { useQuery } from "@tanstack/react-query"
import { getData } from "@/lib/services";
import _ from 'lodash';
import { useSearchParams } from "next/navigation"

export const getQuery = async () => {
    return await getData("/products")
}

export default function ProductList() {
    const searchParams = useSearchParams()
    const categoryParams = searchParams.get("category")
    const sortParams = searchParams.get("sort")
    const rateParams = searchParams.get("rate_item")


    const query = useQuery({
        queryKey: ["product"],
        queryFn: getQuery
    })

    if (query.isLoading) {
        return (
            <div className="wrapper relative flex justify-center mt-10">
                <div className="animate-pulse w-full flex gap-4">
                    <div className="rounded-sm bg-slate-200 h-[300px] w-full "></div>
                    <div className="rounded-sm bg-slate-200 h-[300px] w-full"></div>
                    <div className="rounded-sm bg-slate-200 h-[300px] w-full hidden lg:block "></div>
                </div>
            </div>
        )
    }

    if (query.error) {
        return (
            <div className="wrapper">
                <div className="bg-red-500 text-white text-center p-5 my-7">Error Network</div>
            </div>
        )
    }

    const myData = query.data.data

    const newData = categoryParams && !sortParams ?
        _.filter(myData, (i) => {
            return i.category === categoryParams
        }) : sortParams && !categoryParams ?
            _.filter(myData, (i) => {
                return myData
            }).sort((a, b) => {
                if (sortParams === "Low_Price") {
                    return a.price - b.price
                }
                if (sortParams === "High_Price") {
                    return b.price - a.price
                }
            }) : categoryParams && sortParams ?
                _.filter(myData, (i) => {
                    return i.category === categoryParams
                }).sort((a, b) => {
                    if (sortParams === "Low_Price") {
                        return a.price - b.price
                    } else {
                        return b.price - a.price
                    }
                }) : myData
    return (
        <div className="relative flex flex-wrap lg:-mx-4 -mx-2 ">
            {
                newData.map(item => {
                    return (
                        <ItemProduct
                            key={item.id}
                            category={item.category}
                            image={item.image}
                            link={`/product/${item.id}`}
                            title={item.title}
                            price={`$${item.price}`}
                            rate={parseInt(`${item.rating.rate}`)}
                        />
                    )
                })
            }

        </div>
    )
}



// const sortedMyData = _.sortBy(myData, (o) => o.price)
// let limit = 100
// const [highPrice, lowPrice] = _.partition(sortedMyData, (o) => o.price > limit)
