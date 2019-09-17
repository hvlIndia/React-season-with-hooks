import {useState, useEffect } from "react";


export default  () => {
    const [lat, setlat] = useState(null);
    const [errorMassage, setErrorMessage] = useState("");
  
    useEffect(() => {
      window.navigator.geolocation.getCurrentPosition(
        position => setlat(position.coords.latitude),
        err => setErrorMessage(err.message)
      );
    }, []);
return [lat, errorMassage]
}