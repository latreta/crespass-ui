import ProductsList from 'pages/products/ProductsList'
import Footer from './Footer'
import Navbar from './Navbar'

import './main.css'

function App() {
  return (
    <div className="mx-auto w-4/5">
      <Navbar />
      <main>
        <div className="size-full bg-white p-6">
          <ProductsList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
