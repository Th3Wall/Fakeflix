import { useState, useRef, useEffect } from "react"

const useLazyLoad = (options) => {
    const containerRef = useRef(null)
    const [ isVisible, setIsVisible ] = useState(false)

    const callbackFunction = (entries) => {
        const [ entry ] = entries;

        console.log("entry", entry);

        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        if (containerRef.current) {

            console.log("containerRef", containerRef.current);

            const observer = new IntersectionObserver(callbackFunction, options);
            observer.observe(containerRef.current);

            return () => observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])

    return [containerRef, isVisible]
}

export default useLazyLoad;