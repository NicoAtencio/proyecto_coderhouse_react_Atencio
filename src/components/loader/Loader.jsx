import { BarLoader } from "react-spinners";
import "./loader.css"

export const Loader = () => {
    return (
        <div className="contenedor_loader">
            <BarLoader color="#36d7b7" width={"200px"} />
        </div>
    )
}