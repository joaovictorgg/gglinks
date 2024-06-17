'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionBox from "../layout/SectionBox";
import { faEnvelope, faGripLines, faMobile, faPlus, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faFacebook, faGithub, faInstagram, faTelegram, faTiktok, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import BotaoSubmit from "../botoes/BotaoSubmit";
import { savePageButtons } from "@/app/actions/pageActions";
import toast from "react-hot-toast";
import { ReactSortable } from "react-sortablejs";


export const allButtons = [
  {key: 'email', 'label': 'e-mail', icon: faEnvelope, placeholder: 'seuemail@exemplo.com'},
  {key: 'telefone', 'label': 'telefone', icon: faMobile, placeholder: '+xx (xx) xxxxx-xxxx'},
  {key: 'instagram', 'label': 'instagram', icon: faInstagram, placeholder: 'https://www.instagram.com/perfil/...'},
  {key: 'facebook', 'label': 'facebook', icon: faFacebook, placeholder: 'https://www.facebook.com/perfil/...'},
  {key: 'discord', 'label': 'discord', icon: faDiscord, placeholder: '#xxxxxxx'},
  {key: 'tiktok', 'label': 'tiktok', icon: faTiktok, placeholder: 'https://www.tiktok.com/perfil/...'},
  {key: 'youtube', 'label': 'youtube', icon: faYoutube, placeholder: 'https://www.youtube.com/...'},
  {key: 'whatsapp', 'label': 'whatsapp', icon: faWhatsapp, placeholder: 'Whatsapp link ou número...'},
  {key: 'github', 'label': 'github', icon: faGithub, placeholder: 'https://www.github.com/perfil/...'},
  {key: 'telegram', 'label': 'telegram', icon: faTelegram, placeholder: 'Telegram...'},
];

function upperFirst(str) {
  return str.slice(0,1).toUpperCase() + str.slice(1);
}

export default function PageButtonsForms({user,page}) {
   
  const pageSavedButtonsKeys = Object.keys(page.buttons || {});
  const pageSavedButtonsInfo = pageSavedButtonsKeys
    .map(k => allButtons.find(b => b.key === k));
  const [activeButtons, setActiveButtons] = useState(pageSavedButtonsInfo);

    function addButtonToProfile(button) {
      setActiveButtons(prevButtons => {
        return [...prevButtons, button];
      });
    }


    async function saveButtons(formData) {
      await savePageButtons(formData);
      toast.success('Conteúdo salvo!')
    }

    function removeButton({key:keyToRemove}) {
      setActiveButtons(prevButtons => {
        return prevButtons.filter(button => button.key!== keyToRemove);
      });
    }

    const avalaibleButtons = allButtons.filter(b1 =>!activeButtons.find(b2 => b1.key === b2.key))

    return (
      <SectionBox>
        <form action={saveButtons}>
          <h2 className="text-2xl font-bold mb-4">Botões</h2>
          <ReactSortable
          handle={'.handle'} 
          list={activeButtons}
          setList={setActiveButtons}>
            {activeButtons.map(b => (
              <div key={b.key} className="mb-4 md:flex items-center">
                <div className="w-52 flex h-full text-gray-700 p-2 gap-2 items-center">
                  <FontAwesomeIcon 
                  icon={faGripLines}
                  className="cursor-ns-resize text-green-800 handle"/>
                  <FontAwesomeIcon icon={b.icon} />
                  <span>{upperFirst(b.label)}:</span>
                </div>
                <input 
                placeholder={b.placeholder}
                name={b.key}
                defaultValue={page.buttons[b.key]}
                type="text" style={{marginBottom:'0'}} />
                <button 
                onClick={() => removeButton(b)}
                type="button" 
                className="py-2 px-4 
                cursor-pointer bg-gray-300">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </ReactSortable>
          <div className="flex flex-wrap gap-2 mt-4 border-y py-4">
              {avalaibleButtons.map(b =>(
                <button 
                key={b.key}
                type="button"
                onClick={() => addButtonToProfile (b)}
                className="flex items-center gap-1 p-2 bg-gray-300">
                  <FontAwesomeIcon icon={b.icon}/>
                  <span className="">
                      {upperFirst(b.label)}
                  </span>
                  <FontAwesomeIcon icon={faPlus}/>
                </button>
              ))}
          </div>
          <div className="max-w-xs mx-auto mt-8">
            <BotaoSubmit>
              <FontAwesomeIcon icon={faSave} />
              <span>Salvar</span>
            </BotaoSubmit>
          </div>
        </form>
      </SectionBox>
    );
}