'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react";

export function CreateContact({changeData} : any){
    const [open, setOpen] = useState(false);

    async function createRequest(e: any){
        e.preventDefault();
        let formdata = new FormData(e.currentTarget);
        let response = await fetch('/api/create', {
            method: 'POST',
            body: formdata
        });
        let result = await response.json();
        console.log(result)
        window.location.reload();
        setOpen(false)
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className="bg-blue-500 hover:bg-blue-600 transition duration-300 h-[50px] w-[50px] rounded-full fixed left-5 bottom-[70px] flex justify-center items-center font-bold text-[18px] text-white cursor-pointer">+</div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] ">
            <DialogHeader className="font-iransans">
                <DialogTitle>اضافه کردن اطلاعات</DialogTitle>
                <DialogDescription>
                    لطفا اطلاعات خود را برای ثبت در سایت کامل کنید
                </DialogDescription>
            </DialogHeader>
                <form onSubmit={createRequest}>
                    <div className="w-full flex font-iransans">
                        <div className="w-1/2 border-l-[1px] border-[#00000023] flex flex-col gap-2 py-2 pl-5">
                            <div>
                                <Label className="text-right font-semibold text-[12px]">نام کامل</Label>
                                <Input name="name" placeholder="نام کامل خود را وارد کنید" required />
                            </div>
                            <div>
                                <Label className="text-right font-semibold text-[12px]">پست اینترنتی</Label>
                                <Input type="email" name="mail" placeholder="پست اینترنتی خود را وارد کنید" required/>
                            </div>
                            <div>
                                <Label className="text-right font-semibold text-[12px]">شماره همراه</Label>
                                <Input type="number" name="phone" placeholder="شماره همراه خود را وارد کنید" required/>
                            </div>
                            <div>
                                <Label className="text-right font-semibold text-[12px]">شغل</Label>                
                                <Select name="job" required>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="شغل خود را انتخاب کنید"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="برنامه نویس">برنامه نویس</SelectItem>
                                            <SelectItem value="طراح">طراح</SelectItem>
                                            <SelectItem value="بازاریاب">بازار یاب</SelectItem>
                                            <SelectItem value="گیمر">گیمر</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label className="text-right font-semibold text-[12px]">عکس</Label>
                                <Input type="file" name="avatar" required/>
                            </div>
                            <div>
                                <Label className="text-right font-semibold text-[12px]">بنر</Label>
                                <Input type="file" name="banner" required/>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-2 py-2 pr-5">
                            <div>
                                <Label className="text-right font-semibold text-[12px]">ایدی تلگرام</Label>
                                <Input name="telegram" placeholder="ایدی خود را وارد کنید" />
                            </div>
                            <div>
                                <Label className="text-right font-semibold text-[12px]">ایدی اینستاگرام</Label>
                                <Input name="instagram" placeholder="ایدی خود را وارد کنید" />
                            </div>
                            <div>
                                <Label className="text-right font-semibold text-[12px]">ایدی دیسکورد</Label>
                                <Input name="discord" placeholder="ایدی خود را وارد کنید" />
                            </div>
                            <div>
                                <Label className="text-right font-semibold text-[12px]">ایدی فیسبوک</Label>
                                <Input name="facebook" placeholder="ایدی خود را وارد کنید" />
                            </div>
                            <div>
                                <Label className="text-right font-semibold text-[12px]">ایدی توییتر</Label>
                                <Input name="twitter" placeholder="ایدی خود را وارد کنید" />
                            </div>
                            <div>
                                <Label className="text-right font-semibold text-[12px]">ایدی لینکدین</Label>
                                <Input name="linkedin" placeholder="ایدی خود را وارد کنید" />
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="font-iransans">ثبت تغییرات</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}