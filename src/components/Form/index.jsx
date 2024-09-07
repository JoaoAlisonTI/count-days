import { useState } from "react"
import { Tag, CalendarSearch} from "lucide-react"

export const Form = (props) => {
  
  const [titulo, setTitulo] = useState('')
  const [data, setData] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    
    props.aoCriar({
      //id: uuidv4(),
      titulo,
      data
    })
    setTitulo('')
    setData('')
  }
  
  return (
    <form onSubmit={aoSalvar} className="w-full flex flex-col gap-4 mt-6">
      <div className="w-full flex items-center gap-2 border-2 rounded-xl border-zinc-800 py-3 px-2 cursor-pointer hover:border-lime-300">
        <label>
          <Tag className="text-zinc-400 text-sm" />
        </label>
        <input className="w-full outline-0 bg-zinc-950 placeholder-zinc-400 text-base" placeholder="Digite o titulo do momento/evento..." type="text" value={titulo} onChange={evento => setTitulo(evento.target.value)}/>
      </div>
      
      <div className="w-full flex items-center gap-2 border-2 rounded-xl border-zinc-800 py-3 px-2 cursor-pointer hover:border-lime-300">
        <label>
          <CalendarSearch className="text-zinc-400 text-sm" />
        </label>
        <input className="w-full outline-0 bg-zinc-950 placeholder-zinc-400 text-base" placeholder="Selecione a data da atividade/evento" type="date" value={data} onChange={evento => setData(evento.target.value)} />
      </div>
      <button className="mt-1 border-0 decoration-0 text-center p-3 rounded-2xl bg-lime-300 text-zinc-900 text-base font-medium cursor-pointer hover:bg-lime-400">Criar contagem</button>
    </form>
  )
}