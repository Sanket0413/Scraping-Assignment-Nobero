import { Link } from "react-router-dom";

export const MainPage = () => {

    const data = [
        {"link": "/collections/men-oversized-t-shirts", "image_url": "https://nobero.com/cdn/shop/files/t-shirts_68004d61-294b-4156-967b-0a5a8638d3f1.jpg?v=1719231626"},
        {"link": "/collections/pick-printed-t-shirts", "image_url": "https://nobero.com/cdn/shop/files/2_4.png?v=1719231678"},
        {"link": "/collections/best-selling-co-ord-sets", "image_url": "https://nobero.com/cdn/shop/files/8_22a87a7c-82fa-446e-93e1-af1f0f742eef.png?v=1697452265"},
        {"link": "/collections/fashion-joggers-men", "image_url": "https://nobero.com/cdn/shop/files/9_74d1b95d-04db-4358-8406-05a744e0fd65.png?v=1697452265"},
        {"link": "/collections/mens-shorts-collection", "image_url": "https://nobero.com/cdn/shop/files/10_ba94e30c-4d53-4814-9c8a-5bc14d131d6b.png?v=1697452265"},
        {"link": "/collections/plus-size-t-shirts", "image_url": "https://nobero.com/cdn/shop/files/SHOP_WOMEN_MEN_MOBILE_Vers._1.jpg?v=1716790197"}
      ];

    return(
        <div>
            <h1 className="text-3xl mt-4 mb-2 font-bold ml-4">Collections</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map((item, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <Link to={"/products"} target="_blank" rel="noopener noreferrer">
              <img src={item.image_url} alt={`Collection ${index}`} style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
            </Link>
          </div>
        ))}
      </div>
        </div>
    )
}