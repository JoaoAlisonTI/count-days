import { Logo } from '../Logo'

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center gap-1 absolute bottom-0 left-0 right-0 py-10">
      <Logo />
      <p className="text-sm text-zinc-400">Desenvolvido por JoaoAlisonTI</p>
      <p className="text-sm text-zinc-400">©2024 Todos os Direitos Reservados.</p>
    </footer>
  )
}