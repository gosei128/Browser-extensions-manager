import { useFetch } from "../hooks/useFetch.ts";
import { useEffect, useMemo, useState } from "react";
import CardsContainer from "./Cards.tsx";
import type { Card } from "../types/Card";

const Home = () => {
  const data = useFetch<Card[]>("../data.json");
  const [active, setActive] = useState<number[]>([]);
  const [allCards, setAllCards] = useState<Card[]>([]);
  const [filterCard, setFilterCard] = useState('all')

  useEffect(() => {
    if (data) {
      setAllCards(data);
    }

  }, [data]);

  const cards = useMemo(()=>{
    if(filterCard === 'all'){
      return allCards
  }else if(filterCard === "active"){
    return allCards.filter(card => card.isActive === true)
  }else if(filterCard === "inactive"){
    return allCards.filter(card => card.isActive === false)
  }
    return allCards
  }, [filterCard, allCards])

  const handleToggle = (currentId: number) => {
    if (!allCards) return;
    const cpyActive = [...active];
    const findIndexOf = cpyActive.indexOf(currentId);

    const updatedCard = allCards.map((card, index) => {
      if (currentId === index) {
        return { ...card, isActive: !card.isActive };
      }
      return card;
    });

    if (findIndexOf === -1) {
      cpyActive.push(currentId);
    } else {
      cpyActive.splice(findIndexOf, 1);
    }
    setAllCards(updatedCard);
    setActive(cpyActive);

  };


console.log(allCards)
  return (
    <>
      <div className="mt-5">
        <div className=" flex gap-5 justify-center mobile:flex-col mobile:items-center laptop:flex-row laptop:justify-between">
          <h1 className="font-bold text-4xl">Extension</h1>

          <ul className="flex gap-2">
            <li onClick={()=> setFilterCard('all')} className=" bg-red-700  text-white border p-2 text-lg px-6 rounded-full">
              All
            </li>
            <li onClick={()=> setFilterCard('active')} className=" bg-white dark:bg-neutral-800  p-2 text-lg px-6 rounded-full">
              Active
            </li>
            <li onClick={()=> setFilterCard('inactive')} className=" bg-white dark:bg-neutral-800 p-2 text-lg px-6 rounded-full">
              Inactive
            </li>
          </ul>
        </div>

        <div className="w-full max-w-7xl flex flex-wrap justify-center mt-8 gap-4">
          <CardsContainer handleToggle={(index:number)=> {handleToggle(index)}} cards={cards} />
        </div>
      </div>
    </>
  );
};

export default Home;
