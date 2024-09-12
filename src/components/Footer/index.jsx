import { Logo } from '../Logo'

export const Footer = () => {
  return (
    <footer className="w-full mt-10 py-10 flex flex-col justify-center items-center gap-1">
      <Logo />
      <p className="text-sm text-zinc-400">Desenvolvido por JoaoAlisonTI</p>
      <p className="text-sm text-zinc-400">©2024 Todos os Direitos Reservados.</p>
    </footer>
  )
}