import imagen2 from './images/imagen-akra-2.jpg'
import imagen1 from './images/imagen-akra-1.jpg'
import { Link } from 'react-router-dom'

const Banner = () => {

    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imagen2} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='fw-bold'>Deportivos</h5>
                            <p>Elegi la prenda deportiva que mas te guste</p>
                            <Link to='/category/sportwear' className='btn btn-primary'>Ver mas</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imagen1} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='fw-bold'>Ropa casual</h5>
                            <p>Elegi la prenda casual que mas te guste</p>
                            <Link to='/category/buzos' className='btn btn-primary'>Ver mas</Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Banner