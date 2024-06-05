"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import _ from 'lodash';
import { useRouter, useSearchParams } from "next/navigation"


export default function FilterData() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const paramSort = searchParams.get("sort")

    const handleEvent = (e) => {
        paramSort ?
            router.push(`/?category=${e}&sort=${paramSort}`)
            : router.push(`/?category=${e}`)
    }
    return (
        <div>
            <div className='flex justify-between lg:flex-row flex-col lg:items-center'>
                <div className="flex justify-between lg:flex-row flex-col lg:items-center">
                    Category
                    <Select onValueChange={(e) => handleEvent(e)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="men's clothing">Man</SelectItem>
                            <SelectItem value="women's clothing">Women</SelectItem>
                            <SelectItem value="electronics">Electonic</SelectItem>
                            <SelectItem value="jewelery">Jewellery</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}

// onValueChange with Lodash : onValueChange={(value) => { setShowDynamicData(value); onSelectCategory(value) }}

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
// const ManItem = _.filter(myData, function (o) { return o.category === "men's clothing" })
// const JeweleryItem = _.filter(myData, function (o) { return o.category === "jewelery" })
// const WomenItem = _.filter(myData, function (o) { return o.category === "women's clothing" })
// const ElectronicItem = _.filter(myData, function (o) { return o.category === "electronics" })

// let dynamicData;

// if (showDynamicData === "man") {
//     dynamicData = ManItem
// } else if (showDynamicData === "women") {
//     dynamicData = WomenItem
// } else if (showDynamicData === "electronic") {
//     dynamicData = ElectronicItem
// } else if (showDynamicData === "jewellery") {
//     dynamicData = JeweleryItem
// } else {
//     dynamicData = []
// }

// console.log(`Now in variabel showDynamicData containing `, showDynamicData)

// const [showDynamicData, setShowDynamicData] = useState(null)

{/* <div className="relative flex flex-wrap lg:-mx-4 -mx-2 ">
                {
                    dynamicData.length > 0 ? (
                        dynamicData.map(item => {
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
                    ) : null
                }

            </div> */}

