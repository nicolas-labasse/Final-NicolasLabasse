import { Link, useParams } from "react-router-dom";

const Agradecimiento = () => {
    const {ordenId} = useParams();
        return (
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="card py-5 bg-success text-white">
                            <div className="card-body text-center">
                                <h5 className="card-title">Muchas Gracias!</h5>
                                <p className="card-text mt-2">Tu compra fue completada, el numero de orden es : {ordenId}</p>
                                <Link to={"/"} className="btn btn-primary mt-4">Volver al Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Agradecimiento;