function Navbar() {
  return (
    <header className="bg-white">
      <div className="flex justify-between">
        <div className="mx-4 my-2 flex flex-col justify-center">
          <img src="imgs/logo.png" width="200" height="200"></img>
          <img src="imgs/frase.png" width="200" height="200"></img>
        </div>
        <div className="flex flex-col justify-between p-4">
          <div>
            <input
              type="text"
              placeholder="O que você procura?"
              className="bg-yellow-700"
            ></input>
          </div>
          <span>Sua Sacola (vazia)</span>
        </div>
      </div>
      <div className="flex justify-between bg-red-500 px-10 py-4">
        <span>Home</span>
        <span>Quem somos</span>
        <span>Home</span>
        <span>Como funciona</span>
        <span>Quero comprar</span>
        <span>Quero vender</span>
        <span>Contato</span>
      </div>
    </header>
  )
}

export default Navbar
