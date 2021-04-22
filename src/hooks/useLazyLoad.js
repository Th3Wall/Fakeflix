import { useState, useEffect, useCallback } from "react";

const useLazyLoad = (domRef, customCallback) => {
    const [ isIntersecting, setIsIntersecting ] = useState(false)
    const currentRef = domRef.current;

    const callbackFunction = useCallback((entries) => {
        const [ entry ] = entries;
        setIsIntersecting(entry.isIntersecting)

        if (entry.isIntersecting) {
            customCallback()
        }
    }, [customCallback])

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction)
        if (currentRef) observer.observe(currentRef)

        return () => {
            if(currentRef) observer.unobserve(currentRef)
        }
    }, [currentRef, callbackFunction])

    return isIntersecting;
}

export default useLazyLoad;