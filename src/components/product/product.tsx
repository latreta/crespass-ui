export function ProductItem() {
  return (
    <div className="mx-6 mb-6 flex flex-col justify-center">
      <div>
        <img src="imgs/ex.png" className="size-64"></img>
      </div>
      <div className="flex flex-col text-left font-semibold">
        <h2>Camisa + Calção</h2>
        <h3>Marca: X</h3>
        <span className="text-blue-400">R$ 40,00</span>
        <span className="text-pink-500">2x R$ 20,00</span>
      </div>
    </div>
  )
}
