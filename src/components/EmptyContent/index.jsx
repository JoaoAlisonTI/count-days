import EmptyIcon from "../../assets/no-results-gray.png"

export const EmptyContent = () => {
  return (
    <div className="w-full lg:min-h-screen p-4 mt-16 flex flex-col justify-center items-center text-center">
      <img className="w-52 xl:w-64" src={EmptyIcon} alt="Icon nada econtrado" />
    </div>
  )
}