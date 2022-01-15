import React,{ useEffect} from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function FadeInUp({time,children, ...props}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    
    const variants = {
        hidden: { opacity: 0, y: 100},
        visible: { opacity: 1, y: 0},
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
        <motion.div 
            {...props}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: time || 0.3, type: "spring", stiffness: 100 }}
        >
            {children}
        </motion.div>
    )      
}

export default FadeInUp
