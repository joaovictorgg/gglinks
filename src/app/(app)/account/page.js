import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UsernameForm from "../../componentes/forms/UsernameForm";
import { Page } from "../../models/Page";
import mongoose from "mongoose";
import PageSettingsForm from "@/app/componentes/forms/PageSettingsForm";
import PageButtonsForms from "@/app/componentes/forms/PageButtonsForms";
import PageLinksForm from "@/app/componentes/forms/PageLinksForm";
import cloneDeep from 'clone-deep';

export default async function PaginaDaConta({searchParams}) {
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams.desiredUsername;
    if (!session) {
        return redirect('/');
    }
    mongoose.connect(process.env.MONGODB_URI);
    const page = await Page.findOne({owner: session?.user?.email});

    const leanPage = cloneDeep(page.toJSON());
    leanPage._id = leanPage._id.toString();
    if (page) {
        return (
        <>
            <PageSettingsForm page={leanPage} user={session.user} />
            <PageButtonsForms page={leanPage} user={session.user} />
            <PageLinksForm page={leanPage} user={session.user} />
        </>
        );
    }

    return (
        <div>
         <UsernameForm desiredUsername={desiredUsername} />
        </div>
    );
}