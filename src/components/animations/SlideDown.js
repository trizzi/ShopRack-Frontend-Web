import React from 'react';
import { motion } from "framer-motion";

function SlideDown({time,children, ...props}) {

    const variants = {
        hidden: { y: -500},
        visible: { y: 0},
    }

    return (
        <motion.div 
            {...props}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ delay: time || 1, type: "spring", stiffness: 100 }}
        >
            {children}
        </motion.div>
    )
}

export default SlideDown
