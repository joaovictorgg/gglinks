import { useFormStatus } from 'react-dom';

export default function BotaoSubmit({children, className=''}) {
    const {pending} = useFormStatus();
    return(
        <button 
            type="submit"
            disabled={pending}
            className={"bg-green-800 disabled:bg-green-600 text-white disabled:text-grey-500 py-2 px-4 block mx-auto font-bold w-full flex gap-2 items-center justify-center" + className}
        >
        {pending && (
            <span>Salvando...</span>
        )}
        {!pending && children}
    </button>
    )
}