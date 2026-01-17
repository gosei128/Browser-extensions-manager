
import { useEffect, useMemo, useState } from "react";
import CardsContainer from "./Cards.tsx";
import type { Card } from "../types/Card";
import cardsData from '../../public/data.json'
const Home = () => {
  const data : Card[] = cardsData
  const [allCards, setAllCards] = useState<Card[]>([]);
  const [filterState, setFilterState] = useState('all')

  useEffect(() => {
    if (data) {
      setAllCards(data);
    }

  }, [data]);

  const cards = useMemo(()=>{
    if(filterState === 'all'){
              return allCards
          }else if(filterState === "active"){
            return allCards.filter(card => card.isActive === true);
          }else if(filterState === "inactive"){
            return allCards.filter(card => card.isActive === false)
          }
          return allCards
  }, [filterState, allCards])
 
  const handleToggle = (cardName: string) => {
    if (!allCards) return;

    // Find the card by name in allCards and toggle its isActive
    const updatedCards = allCards.map((card) => {
      if (card.name === cardName) {
        return { ...card, isActive: !card.isActive };
      }
      return card;
    });

    setAllCards(updatedCards);
  };

  return (
    <>
      <div className="mt-15">
        <div className=" flex gap-5 justify-center mobile:flex-col mobile:items-center laptop:flex-row laptop:justify-between">
          <h1 className="font-bold text-neutral-900 text-4xl">Extensions</h1>

          <ul className="flex gap-2">
            <li onClick={()=> setFilterState('all')} className={`transition-colors shadow-md duration-150 p-2 text-lg px-6 rounded-full ${filterState === "all" ? "bg-red-700 text-white" : "bg-white dark:bg-neutral-800 dark:text-white text-neutral-800"}`}>
              All
            </li>
            <li onClick={()=> setFilterState('active')} className={`transition-colors shadow-md duration-150  p-2 text-lg px-6 rounded-full ${filterState === "active" ? "bg-red-700  text-white" : "bg-white dark:text-white dark:bg-neutral-800 text-neutral-800"}`}>
              Active
            </li>
            <li onClick={()=> setFilterState('inactive')} className={`transition-colors shadow-md duration-150 p-2 text-lg px-6 rounded-full ${filterState === "inactive" ? "bg-red-700  text-white" : "bg-white dark:text-white dark:bg-neutral-800 text-neutral-800"}`}>
              Inactive
            </li>
          </ul>
        </div>

        <div className="w-full max-w-7xl flex flex-wrap justify-center mt-5 gap-4">
          <CardsContainer handleToggle={handleToggle} cards={cards} />
        </div>
      </div>
    </>
  );
};

export default Home;
