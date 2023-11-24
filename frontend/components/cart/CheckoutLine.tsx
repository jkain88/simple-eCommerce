'use client'

import { Checkbox } from '../ui/checkbox'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { checkoutLines } from '@/constants/testData'
import Image from 'next/image'
import { useState } from 'react'

const CheckoutLine: React.FC = () => {
  const [quantities, setQuantities] = useState(
    Object.fromEntries(checkoutLines.map((line) => [line.id, line.quantity]))
  )
  console.log(quantities)

  const handleMinus = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }))
  }

  const handlePlus = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  return (
    <div className="w-full max-w-3xl grow">
      <div className="flex justify-between bg-white px-4 py-2">
        <div className=" flex items-center justify-center gap-2">
          <Checkbox id="select-all" />

          <label htmlFor="select-all" className="text-sm">
            {' '}
            Select All
          </label>
        </div>
        <div className="flex items-center gap-1">
          <Trash2 />
          <p className="text-sm">Delete</p>
        </div>
      </div>
      {checkoutLines.map((line) => (
        <div
          key={line.id}
          className="mt-5 flex items-center justify-between gap-4 bg-white p-4"
        >
          <div className="flex items-center gap-4">
            <Checkbox id={`line-${line.id}`} />
            <Image
              src={line.product_variant.image.url}
              alt="Checkout Line"
              width={45}
              height={10}
            />
            <div className="flex flex-col">
              <p>{line.product_variant.product.name}</p>
              {line.product_variant.name && (
                <p className="text-xs text-gray-400">
                  Variant: {line.product_variant.name}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-36">
            <div className="flex flex-col items-center gap-2">
              <p className="text-lg font-semibold">
                ₱{line.product_variant.price}
              </p>
              <button>
                <Trash2 />
              </button>
            </div>
            <div className="flex items-center">
              <button
                className="h-7 border-1 px-1"
                onClick={() => handleMinus(line.id)}
              >
                <Minus className="text-gray-500" />
              </button>
              <input
                className="h-7 w-10 rounded-none border-1 border-l-0 border-r-0 text-center"
                value={quantities[line.id]}
              />
              <button
                className="h-7 border-1 px-1"
                onClick={() => handlePlus(line.id)}
              >
                <Plus className="w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CheckoutLine
