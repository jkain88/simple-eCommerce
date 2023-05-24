import ProductCard from '@/components/ProductCard'
import Image from 'next/image'

const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json()
}

export default async function Home() {
    const products = await getProducts()

    const product = products[0]
    console.log(product)

    return (
        <main>
            <section className="mt-14 px-80">
                <div className="flex justify-between py-8">
                    <p className="font-serif text-4xl">New Plants</p>
                    <button className="bg-green-700 px-6 py-3 text-sm font-bold text-white">
                        Shop Now
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    {products.map((product) => (
                        <ProductCard
                            id={product.id}
                            price={product.price}
                            category={product.category}
                            image={product.image}
                            title={product.title}
                        />
                    ))}
                    <ProductCard
                        id={product.id}
                        price={product.price}
                        category={product.category}
                        image={product.image}
                        title={product.title}
                    />
                </div>
            </section>
        </main>
    )
}
