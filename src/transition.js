import {motion} from "framer-motion"

function transition(OgComponent) {
    return () => (
        <>
            <OgComponent />
            <motion.div
                className="slide-in"
                initial={{
                    scaleX: 1
                }}
                animate={{
                    scaleX: 0
                }}
                exit={{
                    scaleX: 1
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
                className="slide-out"
                initial={{
                    scaleX: 1
                }}
                animate={{
                    scaleX: 0
                }}
                exit={{
                    scaleX: 0
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    
    )
}

export default transition;