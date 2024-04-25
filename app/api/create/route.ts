import MongoDb from "@/lib/mongodb";
import contacts from "@/lib/models/contacts"
import { upload } from "@/lib/upload";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await MongoDb()
        let data = await request.formData();
        console.log(data)
        let socials: any = data.get('socials') || '';
        let contact = {
            name: data.get('name'),
            mail: data.get('mail'),
            phone: data.getAll('phone'),
            job: data.get('job'),
            avatar: await upload(data.get('avatar')),
            banner: await upload(data.get('banner')),
            socials: JSON.parse(socials)
        }
        await contacts.create(contact);
        return NextResponse.json({message: "success"});
    } catch (e: any) {
        console.log(e.message)
        return NextResponse.json({message: "server_error"})
    }
}