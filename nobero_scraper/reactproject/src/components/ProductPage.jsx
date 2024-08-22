import { useEffect, useState } from "react";


export const ProductPage = () => {

    const [productData, setProductData] = useState(null); // Initialize with null instead of undefined
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await fetch("http://127.0.0.1:8000/api/products/1/?format=json");
            const data = await response.json();
            setProductData(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
          setLoading(false);
        };
        fetchData();
      }, []);

    return(
        <div className="px-3 py-3">
            <h1 className="text-3xl font-bold">Products</h1>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        productData && (  
          <div className="flex mt-6 flex-wrap items-center gap-4">
            <div>
                <h2 className="text-2xl font-semibold w-[80%] mb-5">{productData.title}</h2>
                <p className="text-[15px]"><span className="text-xl font-semibold">Price:</span> ₹{productData.current_price}</p>
                <p className="text-[15px]"><span className="text-xl font-semibold">MRP:</span> ₹{productData.mrp}</p> 
                <p className="text-[15px]"><span className="text-xl font-semibold">Color:</span> {productData.selected_color}</p>
                <p className="text-[15px]"><span className="text-xl font-semibold">Sizes:</span> {productData.sizes.join(', ')}</p>
            </div>
            <div>
                <img src={productData.image_url} alt={productData.title} /> 
            </div>
          </div>
        )
      )}
    </div>
    )
}