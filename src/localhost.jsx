
import { useEffect, useState } from "react";


export default function useLocalStorage(name, defaultValue) {
    const [item, setItem] = useState(defaultValue);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedValue = localStorage.getItem(name);

            if (!storedValue) {
                localStorage.setItem(name, JSON.stringify(defaultValue));
                setItem(defaultValue);
            } else {
                setItem(JSON.parse(storedValue));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function change(newValue) {
        if (typeof window !== "undefined") {
            localStorage.setItem(name, JSON.stringify(newValue));
        }
        setItem(newValue);
    }

    return [item, change];
}