'use client';


import { useState } from 'react';
import IconSeta from '../icones/IconSeta';
import pegarUsername from '@/app/actions/pegarUsername';
import { redirect } from 'next/navigation';
import BotaoSubmit from '../botoes/BotaoSubmit';


export default function UsernameForm({desiredUsername}) {
    const [taken,setTaken] = useState(false);
    async function handleSubmit(formData) {
      
      const result = await pegarUsername (formData);
      
      setTaken(result === false);
      if(result) {
        redirect('/account?criada=' + formData.get('username'));
      }
    }
    return(
        <form action={handleSubmit}>
            <h1 className="text-4xl font-bold text-center mb-6">
            Digite seu nome de usuário
            </h1>
            <p className="text-center mb-6 text-gray-500">
               Escolha seu nome de usuário
            </p>
            <div className="max-w-xs mx-auto">
              <input
                name="username"
                className="block p-2  mx-auto border w-full mb-2 text-center"
                defaultValue={desiredUsername}
                type="text" 
                placeholder="Nome de Usuário" />
                {taken && (
                    <div className="bg-red-200 border border-red-500
                    p-2 mb-2 text-center font-bold">
                     Este usuário ja existe.
                    </div> 
                )}
              <BotaoSubmit>
                <span>Escolher esse nome de usuário</span>
                <IconSeta />
              </BotaoSubmit>             
            </div> 
         </form>
    );
}