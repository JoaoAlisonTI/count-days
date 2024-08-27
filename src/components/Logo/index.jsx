import { Hourglass } from 'lucide-react';

export const Logo = () => {
  return (
    <span className="flex gap-0.5 justify-center items-center">
      <Hourglass className="text-lime-300" />
      <p className="text-xl font-medium">count<i className="text-lime-300 text-2xl">.</i>days</p>
    </span>
  )
}