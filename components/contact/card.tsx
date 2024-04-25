import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Loading(){
    return (
        <>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
        </>
    )
}

export function UserCard({name, mail, phone, job, avatar, banner, socials} : any){
    return (
        <div className="bg-[#EAEAEA] rounded-md overflow-hidden flex flex-col relative drop-shadow-md">
            <div className="bg-black w-full h-[100px] overflow-hidden relative bg-center bg-cover" style={{ backgroundImage: `url(${banner})` }}></div>
            <div className="rounded-full absolute top-[25px] right-[20px] border-[3px] border-[#EAEAEA]">
                <Image width={100} height={100} src={avatar} alt="" className="rounded-full h-[100px] w-[100px]"/>
            </div>
            <div className="w-full mt-[25px] flex py-1 gap-3 px-8">
                <div className="w-1/2">
                    <div className="flex items-center gap-2 font-iransans">
                        <span className="font-bold text-[20px]">{name}</span>
                        <span className="font-semibold text-[10px]">{job}</span>
                    </div>
                    <div className="font-mono text-[15px]">{mail}</div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    {/* <div className="bg-[#d6d6d65b] px-4 py-3 rounded-md font-bold font-iransans">+{phone}</div> */}
                    <Select defaultValue="0">
                        <SelectTrigger className="w-full bg-[#d6d6d65b] font-bold font-iransans">
                            <SelectValue/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {
                                    phone.map((value: any, index: number)=>(
                                        <SelectItem value={`${index}`} key={value}>{value}</SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="w-full px-4 py-1">
                <div className="w-full h-full border-t-[1px] border-[#00000023] flex flex-row gap-2 justify-center items-center py-3">
                    {
                        socials.length > 0 ? socials.map((value: any, index: number)=>{
                            return (
                                <a title={`${value.platform}: ${value.username}`} target="_blank" href="https://google.com" className="bg-[#adadad2c] hover:bg-[#adadad86] w-12 h-12 p-[5px] rounded-sm cursor-pointer transition duration-300" key={index+value}>
                                    <Image width={1000} height={1000} src={`/images/${value.platform}.png`} alt="" className="rounded-full"/>
                                </a>
                            )
                        }) : (
                            <div className="flex justify-center items-center h-12 font-iransans text-[14px]">شبکه اجتماعی ندارد</div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}