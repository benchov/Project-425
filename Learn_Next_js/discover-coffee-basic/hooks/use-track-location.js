import { useState } from "react"

const useTrackLocation = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const [latLong, setLatLong] = useState('')
    const [isLocating, setIsLocating] = useState(false)


    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLatLong(`${latitude},${longitude}`)
        setIsLocating(false)
    }

    const error = () => {
        setErrorMsg("Unable to retrieve your location")
        setIsLocating(false)
    }

    const handleTrackLocation = () => {
        setIsLocating(true)
        if (!navigator.geolocation) {
            setErrorMsg("Geolocation is not supported by your browser")
            // setIsLocating(false)
          } else {
            navigator.geolocation.getCurrentPosition(success, error);
            setErrorMsg('')
          }
    }
    return {
        latLong,
        errorMsg,
        handleTrackLocation,
        isLocating
    }
}

export default useTrackLocation;