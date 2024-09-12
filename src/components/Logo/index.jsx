import { Hourglass } from 'lucide-react';

export const Logo = ({ tamanhoTexto, tamanhoIcon }) => {
  return (
    <span className="flex gap-0.5 justify-center items-center">
      <Hourglass className={`text-lime-300 ${tamanhoIcon}`} />
      <p className="text-xl font-medium">count<i className={`text-lime-300 ${tamanhoTexto}`}>.</i>days</p>
    </span>
  )
}