
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from './motion';

export const TypingText = ({ title }: { title: string }) => (
    <motion.p
        className='text-mobile-check md:text-sm text-xs'
        variants={textContainer}
        
    >
        {Array.from(title).map((letter: any, index: number) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}
    </motion.p>
);