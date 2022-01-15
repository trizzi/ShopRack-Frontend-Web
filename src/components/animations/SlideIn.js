import React,{ useEffect} from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function SlideIn({time, axis, stiff,children, ...props}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const variantsX = {
        hidden: { x:1000},
        visible: { x: 0},
    }

    const variantsX2 = {
        hidden: { x:-1000},
        visible: { x: 0},
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
            animate="visible"
            variants={axis === "x" ? variantsX : variantsX2}
            transition={{ delay: time || 0.3, type: "spring", stiffness: stiff || 50 }}
        >
            {children}
        </motion.div>
    )
}

export default SlideIn
