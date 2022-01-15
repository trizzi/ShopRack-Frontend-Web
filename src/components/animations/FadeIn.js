import React,{useEffect} from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function FadeIn({time,children, ...props}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    useEffect(()=>{
        if(inView){// Animate when in view
            controls.start("visible");
        }
        if(!inView){// Animate out
            controls.start("hidden")
        }
    },[controls,inView])

    return (
        <motion.span
            {...props}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: time || 1}}
        >
            {children}
        </motion.span>
    )
}

export default FadeIn
