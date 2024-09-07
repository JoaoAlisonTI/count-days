import { useState } from "react"
import { MoveDown } from "lucide-react"
import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { DayCard } from "./components/DayCard"
import { EmptyContent } from "./components/EmptyContent"

function App() {
  
  const [momentos, setMomentos] = useState([])
  
  return (
    <main className="w-full px-2.5">
    <Header />
    <div className="mt-6">
      <p className="text-base text-zinc-400">Olá! Bem-vindo(a) ao count.days, onde você acompanha o tempo até seus momentos especiais. Adicione seus momentos, e nós <span className="text-lime-300">contaremos</span> os dias por você!</p>
    </div>
    
    <Form aoCriar={momento => setMomentos([...momentos, momento])} />
    
    <div className="w-full mt-6 border-2 rounded-2xl border-zinc-800" />
    
    <h2 className="mt-10 flex justify-center items-center text-center font-semibold">Momentos Aguardados <MoveDown className="text-lime-300"/></h2>
    
    <section>
      {momentos.map((momento, indice) => 
      <DayCard 
        key={indice} 
        momento={momento} 
      />)}
      
    </section>
    </main>
  )
}

export default App