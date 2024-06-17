'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faFileLines, faRankingStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import BotaoLogout from "../botoes/BotaoLogout";
import { usePathname } from "next/navigation";

export default function AppSidebar() {
    const path = usePathname();
    return(
        <nav className="inline-flex flex-col text-center mt-8 gap-4
            text-grey-500">
              <Link 
              href={'/account'} 
              className={
                "flex gap-4 " 
                + (path ==='/account' ? 'text-green-800 font-bold' : '')
                }>
                <FontAwesomeIcon 
                  fixedWidth={true}
                  icon={faFileLines} 
                  className="w-5 text-green-800"/>
                <span>Minha Página</span>
                </Link>
              <Link 
              href={'/relatorios'} 
              className={
                "flex gap-4 " 
                + (path ==='/relatorios' ? 'text-green-800 font-bold' : '')
                }>
                <FontAwesomeIcon 
                  fixedWidth={true}
                  icon={faRankingStar} 
                  className=" w-5 text-green-800"/>
                <span >Relatórios</span>
                </Link>
              <BotaoLogout 
                iconLeft={true} 
                className={'flex gap-4 items-center '} 
                iconClasses="w-5 text-green-800" />
              <Link href={'/'} className="flex gap-2 items-center font-bold 
              text-xs border-t pt-4">
                <FontAwesomeIcon icon={faArrowLeft} 
                className=" w-3 h-3 text-green-800"/>
                <span>Voltar para o site</span>
              </Link>
            </nav>
    );
}