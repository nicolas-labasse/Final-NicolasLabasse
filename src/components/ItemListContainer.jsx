import { useEffect,useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { getFirestore, getDocs, collection, query, where, addDoc } from "firebase/firestore"
import productos from "./json/productos.json"
import Loading  from "./Loading" 
import Banner from "./Banner"

const ItemListContainer = () => {
    const { id } = useParams()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, "productos");
      if (id) {
        const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
          setItems(resultado.docs.map(producto => ({id: producto.id, ...producto.data()}))) 
          setLoading(false)
        });
      }
      else {
        const consulta = query(itemsCollection, where("subcategoria", "==", "destacados"))
        getDocs(consulta).then(resultado => {
          setItems(resultado.docs.map(producto => ({id: producto.id, ...producto.data()}))) 
          setLoading(false)
        });
      }
      
    }, [id, productos]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
      
        productos.forEach(async (producto) => {
          const querySnapshot = await getDocs(query(itemsCollection, where("titulo", "==", producto.titulo)));
          if (querySnapshot.empty) {
            await addDoc(itemsCollection, producto);
          } 
        });
      }, []);

    return (
        <div className="container mt-5">
          { !id ? <div className="row">
            <Banner/>
          </div>
          : null
          }
            <div className="row pb-5">
              { !id ?
                <h1 className="h3 mt-3 mb-0">Productos destacados</h1>
                : null
              }
                {loading ? <Loading/> :<ItemList items={items} />}
            </div>
        </div>
    )
}

export default ItemListContainer