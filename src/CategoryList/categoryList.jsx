import { useEffect, useState } from "react"
import axios from "../axios"
import Loading from "../Loading/loading"
// import SearchBar froSm "../SearchBar/searchBar"

const CategoryList = ({filterItems, children}) =>{

    const [loading, setLoading] = useState(true)
    const [categories, setCategory] = useState([])

    useEffect(()=>{
        const fetchCategories = async () =>{
            const respons = await axios.get('/FoodCategory/categories')
            setCategory(respons.data);
            setLoading(false)
        }
        fetchCategories()
    }, [])

    const renderContext = () =>{
        if(loading){
            return(
                <Loading theme='primery' />
            )
        }
        return(
            <div className=" ps-3 w-100 d-flex justify-content-between align-items-center gap-5">
                   <ul className="nav">
            <li className="nav-item" onClick={() => filterItems()}>
                <a className="nav-link" href="#">همه فست فودها</a>
            </li>
            {
                categories.map((category =>{
                    return(
                        <li className="nav-item" key={category.id} onClick={() => filterItems(category.id)}>
                        <a className="nav-link" href="#">
                            {category.name}
                        </a>
                    </li>
                    )
                }))
            }
        </ul>
        {children}
            </div>
        )
    }
    return(
       <nav className="container mt-n5">
        <div className="bg-white d-flex align-items-center py-4 shadow-lg  rounded-3 " style={{height: "80px"}}>
            {
                renderContext()
            }
           
        </div>

       </nav>
    )
}

export default CategoryList