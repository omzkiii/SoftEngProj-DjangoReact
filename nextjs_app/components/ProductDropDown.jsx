import Link from "next/link";

const ProductDropDown = ({onClick}) => {
    //TODO: Fetch categories from backend
    const categories = ['Fruits', 'Vegetables'];
        
    return (
        <>
            <ul className="absolute mt-0 bg-green text-orange-border rounded shadow-lg z-50">
                  {categories.map((cat, index) => (
                    <Link href={`/products/${cat.toLowerCase()}`}><li key={index} onClick={onClick} className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-black">
                      {cat}
                    </li></Link>
                  ))}
            </ul>
              
        </>
    )
}

export default ProductDropDown