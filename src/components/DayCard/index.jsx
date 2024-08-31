import { CalendarDays, TimerReset, Bookmark, CircleX } from "lucide-react"

export const DayCard = () => {
  return (
    <div className="w-full mt-10 py-1.5 px-3 bg-zinc-950 flex flex-col gap-2 rounded-xl border-2 border-zinc-800">
      <div className="flex justify-between items-center">
        <span className="w-full flex items-center gap-1">
          <CalendarDays size="20" className="text-lime-300"/> 25/12/2024
        </span>
        <button className="bg-none border-none">
          <CircleX className="text-red-400" />
        </button>
      </div>
      
      <span className="flex items-center gap-1">
        <Bookmark size="20" className="text-lime-300"/>
        <p>Natal.</p>
      </span>
      
      <span className="flex items-center gap-1"><TimerReset size="20" className="text-lime-300"/> Falta(m) 116 dia(s)</span>
    </div>
  )
}