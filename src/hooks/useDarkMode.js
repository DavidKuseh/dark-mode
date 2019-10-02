import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export default useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(()=> {
        if (darkMode) {
            return body.classList.add('dark-mode');
        }
        return body.classList.remove('dark-mode');
    }, [darkMode]);

    return [darkMode, setDarkMode];

}