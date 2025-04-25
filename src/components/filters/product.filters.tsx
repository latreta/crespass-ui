function ProductFilters() {
  return (
    <div className="grid grid-cols-6 space-x-20">
      <div className="col-span-2 mb-6 flex flex-col">
        <h1 className="text-2xl">Gênero</h1>
        <div>
          <button type="button">
            <img src="imgs/girl-btn.png"></img>
          </button>
          <button type="button">
            <img src="imgs/boy-btn.png"></img>
          </button>
        </div>
      </div>
      <div className="col-span-4">
        <h1>Tempo de uso</h1>
        <div>
          <button type="button">
            <img src="imgs/nunca-usado-btn.png"></img>
          </button>
          <button type="button">
            <img src="imgs/pouco-usado-btn.png"></img>
          </button>
          <button type="button">
            <img src="imgs/usado-btn.png"></img>
          </button>
        </div>
      </div>
      <div className="col-span-5 flex space-x-6">
        <input
          type="text"
          placeholder="Categorias"
          className="rounded-md p-1"
        ></input>
        <input
          type="text"
          placeholder="Faixa etária"
          className="rounded-md p-1"
        ></input>
        <input
          type="text"
          placeholder="Faixa de preço"
          className="rounded-md p-1"
        ></input>
        <input
          type="text"
          placeholder="Marca/Fabricante"
          className="rounded-md p-1"
        ></input>
        <button
          type="button"
          className="rounded-md bg-blue-400 px-4 py-2 font-bold text-white"
        >
          Buscar!
        </button>
      </div>
    </div>
  )
}

export default ProductFilters
