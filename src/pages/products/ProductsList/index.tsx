import ProductFilters from 'components/filters/product.filters'
import ProductSidebar from 'components/filters/product.sidebar'
import { ProductItem } from 'components/product/product'

function ProductsList() {
  return (
    <div className="grid grid-cols-5 space-y-8">
      <div className="col-span-6 rounded-lg bg-amber-200 p-4">
        <ProductFilters />
      </div>
      <div className="col-span-1">
        <ProductSidebar />
      </div>
      <div className="col-span-5">
        <div className="grid grid-cols-3 justify-between">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i: number) => (
            <ProductItem key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsList
