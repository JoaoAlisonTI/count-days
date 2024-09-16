import { CalendarDays, TimerReset, TimerOff, Bookmark, BookmarkCheck, CircleX } from "lucide-react"

export const DayCard = ({ momento, aoDeletar}) => {
  
  function calcularDiasAte(dataAlvo) {
    const hoje = new Date();
    const alvo = new Date(dataAlvo);
    
    const diferencaEmMilissegundos = alvo - hoje;
    const diferencaEmDias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    
    const mesesCompletos = Math.floor(diferencaEmDias / 30);
    const diasRestantes = diferencaEmDias % 30;
    
    return mesesCompletos * 30 + diasRestantes;
  }
  
  const diasRestantes = calcularDiasAte(momento.data);
  
  const formatarData = (dataString) => {
    const date = new Date(dataString);
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      timeZone: 'UTC',
    });
  };
  
  return (
    <div className="w-full mt-10 py-1.5 px-3 bg-zinc-950 flex flex-col gap-2 rounded-xl border-2 border-zinc-800">
      <div className="flex justify-between items-center">
        <span className="w-full flex items-center gap-1">
          <CalendarDays size="20" className="text-lime-300"/> {formatarData(momento.data)}
        </span>
        <button className="bg-none border-none decoration-0 cursor-pointer focus:ring-0" onClick={() => aoDeletar(momento.id)}>
          <CircleX className="text-red-400" />
        </button>
      </div>
      
      <span className="flex items-center gap-1">
        {diasRestantes <= 0 ?
          <BookmarkCheck size="20" className="text-lime-300"/>
          :
          <Bookmark size="20" className="text-lime-300"/>
        }
        
        <p>{momento.titulo}.</p>
      </span>
      
      <span className="flex items-center gap-1">
        {diasRestantes <= 0 ?
          <TimerOff size="20" className="text-lime-300"/>
          :
          <TimerReset size="20" className="text-lime-300"/>
        }
        
        {diasRestantes <= 0 ? "O dia finalmente chegou! 🏁✨" : `Falta(m) ${diasRestantes} dia(s)`}</span>
    </div>
  )
}