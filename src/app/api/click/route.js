import { Eventos } from "@/app/models/Eventos";
import mongoose from "mongoose";

export async function POST(req) {
    mongoose.connect(process.env.MONGODB_URI);
    const url = new URL (req.url);
    const clickedLink = atob(url.searchParams.get('url'));
    const page = url.searchParams.get('page');
    await Eventos.create({type:'click', uri: clickedLink, page});
    return Response.json(true);
}