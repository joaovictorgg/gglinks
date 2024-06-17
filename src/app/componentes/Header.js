import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import BotaoLogout from "./botoes/BotaoLogout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default async function Header(){
  const session = await getServerSession(authOptions);
    return (
      <header className="bg-white border-b py-4">
        <div className="max-w-4xl flex justify-between mx-auto 
        px-6">
          <div className="flex gap-6">
            <Link href={'/'} className="flex items-center gap-2 text-green-800 ">
              <FontAwesomeIcon icon={faLink} className="text-green-800" />
              <span className="font-bold">GG Links</span>
              </Link>
            
        </div> 
        <nav className="flex items-center gap-4 text-sm text-slate-500">
          {!!session && (
            <>
             <Link href={'/account'}>
               Olá, {session.user?.name}
             </Link>
             <BotaoLogout />
            </>
            
          )}
          {!session && (
            <>
            <Link href={'/login'}>Entrar</Link>
            <Link href={'/login'}>Criar Conta</Link>
            </>
          )}
          
        </nav>
       </div>   
     </header>
    )
}