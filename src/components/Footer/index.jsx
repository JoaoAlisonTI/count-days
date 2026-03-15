import { Logo } from '../Logo'
import { useState, useEffect } from 'react'

export const Footer = () => {

  const [currentYear, setCurrentYear] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentYear(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const formatYear = (date) => {
    const options = { 
      year: 'numeric'
    }
    return date.toLocaleDateString('pt-BR', options)
  }

  return (
    <footer className="w-full flex flex-col justify-center items-center gap-1 absolute bottom-0 left-0 right-0 py-10">
      <Logo />
      <p className="text-sm text-zinc-400">Desenvolvido por JoaoAlisonTI</p>
      <p className="text-sm text-zinc-400">©{formatYear(currentYear)} Todos os Direitos Reservados.</p>
    </footer>
  )
}