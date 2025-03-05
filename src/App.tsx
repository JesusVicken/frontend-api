import { FiTrash } from "react-icons/fi"


function App() {


  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-medium text-white">Clientes</h1>


        <form className="flex flex-col my-6">
          <label className="font-medium text-white">Nome:</label>
          <input
            type="text"
            placeholder="Digite seu nome completo..."
            className="w-full mb-5 p-2 rounded bg-white text-black"
          />

          <label className="font-medium text-white">E-mail:</label>
          <input
            type="email"
            placeholder="Digite seu e-mail..."
            className="w-full mb-5 p-2 rounded bg-white text-black"
          />

          <input
            type="submit"
            value="Cadastrar"
            className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium"
          />


        </form>

        {/*Listagem de clientes*/}

        <section className="flex flex-col ">

          <article className="w-full p-2 bg-white rounded relative hover:scale-105 duration-200">

            <p><span className="font-medium">Nome:</span> Jesus Vicken</p>
            <p><span className="font-medium">Email:</span> teste@teste.com.br</p>
            <p><span className="font-medium">Status:</span> ATIVO</p>

            <button className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2">
              <FiTrash size={18} color="#FFF" />
            </button>

          </article>

        </section>

      </main>


    </div>
  )
}

export default App
