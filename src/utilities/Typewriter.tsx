import { useEffect, useState } from 'react';

type TypewriterProps = {
    text: string,
    delay: any,
    
}

const Typewriter = ({ text, delay }: TypewriterProps) => {

    const [currentText, setCurrentText] = useState<string>(" ");
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        let timeout: any;
        if (currentIndex < text.length) {
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);
        } 
        // else if(infinite){
        //     setCurrentIndex(0);
        //     setCurrentText(" ");
        // }
        return () => clearTimeout(timeout);
    }, [currentIndex, delay, text]);

    return (
        <p className=' md:text-base text-sm'>{currentText}</p>
    )
}

export default Typewriter