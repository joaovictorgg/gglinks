import { getServerSession } from "next-auth";
import HeroForm from "../componentes/forms/HeroForm";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <section className=" pt-32 " >
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
          Seu Link único para tudo  
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
          Compartilhe seus links, redes sociais, informações de 
          contato e muito mais!
          </h2>
         </div>
        <HeroForm user={session?.user} />
      </section>
    </main>
    );
}
