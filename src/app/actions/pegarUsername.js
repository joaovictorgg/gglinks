'use server';
import mongoose from "mongoose";
import { Page } from "../models/Page";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function pegarUsername(formData) {
    const username = formData.get('username');
    await mongoose.connect(process.env.MONGODB_URI,{bufferCommands: false}).then(console.log).catch(console.error);
    const existingPageDoc = await Page.findOne({uri:username});
    if (existingPageDoc) {
        return false;
    } else {
        const session = await getServerSession(authOptions);
        return await Page.create({
            uri:username,
            owner:session?.user?.email,
        });      
    }
 }