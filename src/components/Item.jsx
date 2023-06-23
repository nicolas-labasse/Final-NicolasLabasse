
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return(
            <div className="card my-3 h-100">
                <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                <img src={item.imagen} className="card-img-top" alt={item.titulo}></img>
                    <div className="card-body">
                        <h5 className="card-title">{item.titulo}</h5>
                        <h5 className="card-title h4">$ {item.precio}</h5>
                        <p className="card-text">{item.descripcion}</p>
                    </div>
                </Link>
            </div>
    )
}
export default Item;