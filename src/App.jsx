import { Header } from "./components/Header"

function App() {

  return (
    <main className="w-full px-2.5">
    <Header />
    <div className="mt-4">
      <p className="text-sm text-zinc-400">Olá! Bem-vindo(a) ao count.days, onde você acompanha o tempo até seus momentos especiais. Adicione suas atividades e eventos, e nós <span className="text-lime-300">contaremos</span> os dias por você!</p>
    </div>
    </main>
  )
}

export default App