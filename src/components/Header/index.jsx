import { Logo } from "../Logo"
import { useState, useEffect } from "react"

export const Header = () => {
  
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date) => {
    const options = { 
      year: 'numeric', 
      month: 'numeric', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('pt-BR', options);
  };
  
  
  return (
    <header className="w-full flex justify-between items-center py-4">
      <Logo />
      <span className="text-sm">
        {formatDate(currentDate)}
      </span>
    </header>
  )
}