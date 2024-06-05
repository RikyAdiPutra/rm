import { useRouter, useSearchParams } from "next/navigation"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const RateData = () => {
    const router = useRouter()

    const handleEvent = (e) => {
        console.log(e)
        router.push(`/?rate_item=${e}`)
    }
    return (
        <div className='flex justify-between lg:flex-row flex-col lg:items-center'>
            <div className="flex justify-between lg:flex-row flex-col lg:items-center">
                Rate
                <Select onValueChange={(e) => handleEvent(e)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="High_rate">High Rate</SelectItem>
                        <SelectItem value="Low_rate">Low Rate</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default RateData