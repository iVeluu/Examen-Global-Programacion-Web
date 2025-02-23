export default function Header() {
  return (
    <header className="bg-gray-300 border-b-4 border-indigo-600">
      <div className="max-w-7xl mx-auto">
        <div className=" mx-5 md:mx-0 flex gap-5 justify-between py-6 items-center ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/CETI_Logo.png"
            alt="Logo del ceti"
            className="w-32"
          />
          <div className="text-indigo-600 text-center space-y-6 font-bold">
            <p className=" p-2 border-2 border-indigo-600 rounded-xl cursor-pointer transition-colors duration-500 hover:bg-indigo-600 hover:text-white ease-in-out">
              Alejandro Velazquez Luna
            </p>
            <p className=" p-2 border-2 border-indigo-600 rounded-xl cursor-pointer hover:bg-indigo-600 duration-500 hover:text-white ease-in-out ">
              Programacion Web
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
