import type { Card } from '../types/Card';
import {motion, AnimatePresence} from 'motion/react'
interface CardsProps {
    handleToggle : (cardName: string) => void;
    cards : Card[]
}


const CardsContainer : React.FC<CardsProps>  = ({handleToggle, cards }) => {
   const containerVariants = {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: {
         staggerChildren: 0.1,
         delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1] as const
      }
    }
  };

    return (
        <>
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-7xl flex flex-wrap items-start  mt-8 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {cards && cards.length > 0
              ? cards.map((card) => {
                  return (
                    <motion.div 
                      key={card.name}
                      layout
                      layoutId={`card-${card.name}`}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="w-full max-w-[400px]"
                    >
                      <motion.div 
                        layout
                        className="bg-white  dark:bg-neutral-800 dark:shadow-none flex flex-col justify-between shadow-lg shadow-neutral-200 h-56 rounded-3xl p-5"
                      >
                        <div className="flex  gap-4">
                          <img
                            src={card.logo}
                            alt="image"
                            className="self-start"
                          />
                          <div>
                            <h1 className="text-xl font-bold ">{card.name}</h1>
                            <p className="text-lg text-neutral-600">
                              {card.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex   justify-between">
                          <button className="border border-neutral-300 p-2 px-3 rounded-full">
                            Remove
                          </button>
                          <button
                            onClick={() => handleToggle(card.name)}
                            className={`relative rounded-full py-3 px-6 h-6  ${
                              card.isActive
                                ? "bg-red-700"
                                : "bg-neutral-300 dark:bg-neutral-600"
                            }`}
                          >
                            <span
                              className={`absolute top-0.5 transition duration-200 left-0 p-2.5 bg-white rounded-full ${
                                card.isActive ? "translate-x-6" : "translate-x-1"
                              }`}
                            ></span>
                          </button>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })
              : null}
          </AnimatePresence>
        </motion.div>
        </>
    )
}

export default CardsContainer