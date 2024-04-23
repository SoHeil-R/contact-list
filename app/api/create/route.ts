import MongoDb from "@/lib/mongodb";
import contacts from "@/lib/models/contacts"
import { upload } from "@/lib/upload";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await MongoDb()
        let data = await request.formData();
        let contact = {
            name: data.get('name'),
            mail: data.get('mail'),
            phone: data.get('phone'),
            job: data.get('job'),
            avatar: await upload(data.get('avatar')),
            banner: await upload(data.get('banner')),
            socials: {
                telegram: data.get('telegram') || null,
                instagram: data.get('instagram') || null,
                discord: data.get('discord') || null,
                facebook: data.get('facebook') || null,
                twitter: data.get('twitter') || null,
                linkedin: data.get('linkedin') || null,
            }
        }
        await contacts.create(contact);
        console.log(contact)
        return NextResponse.json({message: "success"});
    } catch (e: any) {
        console.log(e.message)
        return NextResponse.json({message: "server_error"})
    }
}