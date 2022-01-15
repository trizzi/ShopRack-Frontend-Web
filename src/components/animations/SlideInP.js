import React,{ useEffect} from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function SlideInP({time, stiff,children, ...props}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const variant = {
        hidden: {x:1000},
        visible: {x: 0},
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
            variants={ variant }
            transition={{ delay: time || 0.3, type: "spring", stiffness: stiff || 50 }}
        >
            {children}
        </motion.span>
    )
}

export default SlideInP
