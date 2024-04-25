'use client';
import { useCallback, useEffect, useState } from "react";
import { Input } from "@/components/ui/input"
import { UserCard, Loading } from "@/components/contact/card";
import { CreateContact } from "@/components/contact/createContact";
import { useDebounce } from 'use-debounce';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [limit, setLimit] = useState(8);
    const [count, setCount] = useState(0);
    const [data, setData]: any = useState([]);
    const [searchData, setSearchData]: any = useState([]);
    const [fSearch] = useDebounce(search, 800);

    const getContacts = useCallback(async ()=>{
        setLoading(true);
        let response = await fetch('/api/get', {
            method: 'POST',
            body: JSON.stringify({
                limit: limit,
                skip: limit,
                name: fSearch
            })
        });
        let result = await response.json();
        if (fSearch.length > 0)
            setSearchData(result.data)
        else
            setData(result.data);
        setCount(result.count);
        setLoading(false);
    }, [limit, fSearch, count])

    useEffect(()=>{
        getContacts();
    }, [getContacts])

    return (
        <>
            <div className="w-full h-[70px] flex bg-[#EAEAEA]">
                <div className="w-1/4 h-full"></div>
                <div className="w-2/4 h-full flex justify-center items-center">
                    <Input className="w-[80%] text-center font-iransans" type="text" placeholder="دنبال شخص خاصی میگردی؟" onChange={(e)=>{setSearch(e.target.value)}}/>
                </div>
            </div>
            <div className="w-screen h-[830px] py-5 relative overflow-x-hidden ">
                <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-10">
                        {
                            loading ? <Loading/> : (
                                fSearch.length > 0 ? (
                                    searchData.length > 0 ? (
                                        searchData.map((v: any)=>(
                                            <UserCard name={v.name} mail={v.mail} phone={v.phone} job={v.job} avatar={v.avatar} banner={v.banner} socials={v.socials} key={v._id}/>
                                        ))
                                    ) : (
                                        <div></div>
                                    )
                                ) : (
                                    data.map((v: any)=>(
                                        <UserCard name={v.name} mail={v.mail} phone={v.phone} job={v.job} avatar={v.avatar} banner={v.banner} socials={v.socials} key={v._id}/>
                                    ))
                                )
                            )
                        }
                    </div>

                {
                    count > limit && (
                        <div className="w-full h-14 flex mt-5 justify-center items-center">
                            <div className="border border-[#a8a8a8] hover:bg-[#a8a8a871] px-14 py-2 rounded-md flex items-center justify-center font-iransans cursor-pointer transition duration-300 font-bold text-[13px]" onClick={()=>{
                                setLimit((pr)=> pr+=8)
                            }}>
                                نمایش بیشتر
                            </div>
                        </div>
                    )
                }
                <CreateContact changeData={setCount} />
            </div>
            <div className="w-full h-[50px] bg-[#EAEAEA] flex px-8">
                <div className="w-1/3 flex justify-start items-center gap-2 font-iransans text-[13px] text-gray-600">طراحی شده توسط سهیل رضایی | <span>نسخه (0.4.0)</span></div>
                <div className="w-1/3 flex justify-center items-center font-iransans text-gray-800"> دفترچه تلفن سوشیال</div>
            </div>
        </>
    );
}
