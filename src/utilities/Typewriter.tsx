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

    //     <motion.p
    //     className='text-mobile-check md:text-sm text-xs'
    //     variants={textContainer}
        
    // >
    //     {Array.from(title).map((letter: any, index: any) => (
    //         <motion.span variants={textVariant2} key={index}>
    //             {letter === ' ' ? '\u00A0' : letter}
    //         </motion.span>
    //     ))}
    // </motion.p>
    )
}

export default Typewriter