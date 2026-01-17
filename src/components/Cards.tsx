import type { Card } from '../types/Card';
import {motion} from 'motion/react'
interface CardsProps {
    handleToggle : (cardName: string) => void;
    cards : Card[]
}


const CardsContainer : React.FC<CardsProps>  = ({handleToggle, cards }) => {
   console.log(cards)
    return (
        <>
        <motion.div initial={{opacity:0, translateY:50}} animate={{opacity:1, translateY: 0}} transition={{duration : 0.5}}  className="w-full max-w-7xl flex flex-wrap items-start  mt-8 gap-4">
          {cards && cards.length > 0
            ? cards.map((card, index) => {
                return (
                  <div className="w-full max-w-[400px]">
                    <motion.div
                      key={index}
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
                  </div>
                );
              })
            : null}
        </motion.div>
        </>
    )
}

export default CardsContainer