import EntrarComGoogle from "../../componentes/botoes/EntrarComGoogle";


export default function PaginaLogin(){
    return(
    <div> 
        <div className="p-4 max-w-xs mx-auto">
             <h1 className="text-4xl font-bold text-center mb-6">
            Entrar
             </h1>
             <p className="text-center mb-6 text-gray-500">
               Entre na sua conta com um desses métodos 
             </p>
             <EntrarComGoogle />
        </div>
    </div>
  )
}