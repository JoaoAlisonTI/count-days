import EmptyIcon from "../../assets/no-results-gray.png"

export const EmptyContent = () => {
  return (
    <div className="w-full p-4 mt-16 flex flex-col items-center text-center gap-2">
      <img className="w-52" src={EmptyIcon} alt="Icon nada econtrado" />
    </div>
  )
}