"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter, useSearchParams } from 'next/navigation';

export default function SortData() {
    const router = useRouter()
    const searchParam = useSearchParams()
    const paramCategory = searchParam.get("category")

    const handleValue = (e) => {
        paramCategory ?
            router.push(`/?category=${paramCategory}&sort=${e}`)
            : router.push(`/?sort=${e}`)
    }
    return (
        <div>
            <div className="flex items-center gap-4">
                Sort
                <Select onValueChange={(e) => handleValue(e)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Low_Price">Low Price</SelectItem>
                        <SelectItem value="High_Price">High Price</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

// onValueChange with Lodash : onValueChange={(value) => setSortItem(value)}

// const getQuery = async () => {
//     return await getData("/products")
// }

// const query = useQuery({
//     queryKey: ["product"],
//     queryFn: getQuery
// })

// if (query.isLoading) {
//     return (
//         <div className="wrapper relative flex justify-center mt-10">
//             <div className="animate-pulse w-full flex gap-4">
//                 <div className="rounded-sm bg-slate-200 h-[300px] w-full "></div>
//                 <div className="rounded-sm bg-slate-200 h-[300px] w-full"></div>
//                 <div className="rounded-sm bg-slate-200 h-[300px] w-full hidden lg:block "></div>
//             </div>
//         </div>
//     )
// }

// if (query.error) {
//     return (
//         <div className="wrapper">
//             <div className="bg-red-500 text-white text-center p-5 my-7">Error Network</div>
//         </div>
//     )
// }

// const myData = query.data.data

// const sortedMyData = _.sortBy(myData, (o) => o.price)
// let limit = 100
// const [highPrice, lowPrice] = _.partition(sortedMyData, (o) => o.price > limit)

// let sortItemDynamic;

// if (sortItem === "Low Price") {
//     sortItemDynamic = lowPrice
// } else {
//     sortItemDynamic = highPrice
// }

// console.log(sortItemDynamic)
