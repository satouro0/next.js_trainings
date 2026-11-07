export default function Border() {
  return (
    <div className='text-white min-h-screen flex items-center justify-center'>
      <div className="bg-white h-20 w-20 m-10 border-4 border-red-500 rounded-tl-full rounded-br-full  border-double"></div>
      <div className="bg-white h-20 w-20 m-10 border-4 border-orange-500 rounded-tl-full rounded-br-full  border-dotted"></div>
      <div className="bg-white h-20 w-20 m-10 border-4 border-yellow-500 rounded-tl-full rounded-br-full  border-dashed"></div>
      <div className="bg-white h-20 w-20 m-10 border-4 border-green-500 rounded-tl-full rounded-br-full  "></div>
      <div className="bg-white h-20 w-20 m-10 border-4 border-blue-500 rounded-tl-full rounded-br-full  border-e"></div>
    </div>
  )
}
