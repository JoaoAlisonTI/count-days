import { useState } from "react"
import { Toaster, toast } from 'sonner'
import { Tag, CalendarSearch} from "lucide-react"
import { v4 as uuidv4 } from 'uuid'

export const Form = (props) => {
  
  const [titulo, setTitulo] = useState('')
  const [data, setData] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    toast.success('Contagem criada com sucesso!')
    props.aoCriar({
      id: uuidv4(),
      titulo,
      data
    })
    setTitulo('')
    setData('')
  }
  
  return (
    <>
      <Toaster richColors position="top-left" />
      <form onSubmit={aoSalvar} className="w-full flex flex-col gap-4 mt-6">
      <div className="w-full flex items-center gap-2 border-2 rounded-xl border-zinc-800 px-2 cursor-pointer hover:border-lime-300">
        <label>
          <Tag className="text-zinc-400 text-sm" />
        </label>
        <input className="w-full py-3 focus:ring-0 outline-0 border-none bg-zinc-950 placeholder-zinc-400 text-base cursor-pointer" placeholder="Digite o titulo do momento/evento..." type="text" required value={titulo} onChange={evento => setTitulo(evento.target.value)}/>
      </div>
      
      <div className="w-full flex items-center gap-2 border-2 rounded-xl border-zinc-800 px-2 cursor-pointer hover:border-lime-300">
        <label>
          <CalendarSearch className="text-zinc-400 text-sm" />
        </label>
        <input className="w-full py-3 focus:ring-0 outline-0 border-none bg-zinc-950 placeholder-zinc-400 text-base cursor-pointer" placeholder="Selecione a data da atividade/evento" type="date" required value={data} onChange={evento => setData(evento.target.value)} />
      </div>
      <button className="mt-1 border-none decoration-0 focus:ring-0 text-center p-3 rounded-2xl bg-lime-300 text-zinc-900 text-base font-medium cursor-pointer hover:bg-lime-400 focus:bg-lime-400">Criar contagem</button>
    </form>
    </>
  )
}