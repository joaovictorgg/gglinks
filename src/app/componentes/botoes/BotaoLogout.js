'use client';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";

export default function BotaoLogout({
    className = 'flex items-center gap-2 border p-2 px-4 shadow-gray-900/20',
    iconLeft = false,
    iconClasses = '',
}) {
    return (
        <button 
        className={className}
        onClick={() => signOut()}>
        {iconLeft && (
            <FontAwesomeIcon icon={faRightFromBracket} className={iconClasses}/>
        )}
        <span>Sair da Conta</span> 
        {!iconLeft && (
            <FontAwesomeIcon icon={faRightFromBracket} className={iconClasses} />
        )}     
        </button>
    )
}