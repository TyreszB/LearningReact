import styles from "./Map.module.css";
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function Map() {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams()
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    return (
        <div className={styles.mapContainer} onClick={()=>{navigate("form")}}>
            <h1>Map</h1>
            <h1>Position: {lat}, {lng}</h1>
        </div>
    )
}