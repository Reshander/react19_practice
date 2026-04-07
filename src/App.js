import axios from 'axios'
import { useEffect, useState } from 'react'
function App() {

  const [products, Setproducts] = useState([])
  const [search, SetSearch] = useState('')

  const getallproducts = async () => {
    try {

      const response = await axios.get("https://fakestoreapi.com/products")
      Setproducts(response.data)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    getallproducts()
  }, [])




  const filterProducts = products.filter((val) => {
    return val.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div>

      <input placeholder='search here...' value={search} onChange={(e) => SetSearch(e.target.value)} />

      {

        filterProducts?.map((val, idx) => {

          return (
            <>
              <h6 key={idx}>{val.title}</h6>
            </>
          )
        })
      }


    </div>
  );
}

export default App;
