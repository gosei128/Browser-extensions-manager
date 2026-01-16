import { useFetch } from "../hooks/useFetch.ts";
import { useEffect, useState } from "react";
interface Card {
  description: string;
  isActive: boolean;
  logo: string;
  name: string;
}

const Home = () => {
  const data = useFetch<Card[]>("../data.json");
  const [active, setActive] = useState<number[]>([]);
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    if (data) {
      setCards(data);
    }
  }, [data]);

  const handleToggle = (currentId: number) => {
    if (!cards) return;
    const cpyActive = [...active];
    const findIndexOf = cpyActive.indexOf(currentId);

    const updatedCard = cards.map((card, index) => {
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
    setCards(updatedCard);
    setActive(cpyActive);
    console.log(updatedCard);
  };

  return (
    <>
      <div className="mt-5">
        <div className=" flex gap-5 justify-center mobile:flex-col mobile:items-center laptop:flex-row laptop:justify-between">
          <h1 className="font-bold text-4xl">Extension</h1>

          <ul className="flex gap-2">
            <li className=" bg-red-700  text-white border p-2 text-lg px-6 rounded-full">
              All
            </li>
            <li className=" bg-white dark:bg-neutral-800  p-2 text-lg px-6 rounded-full">
              Active
            </li>
            <li className=" bg-white dark:bg-neutral-800 p-2 text-lg px-6 rounded-full">
              Inactive
            </li>
          </ul>
        </div>

        <div className="w-full max-w-7xl flex flex-wrap justify-center mt-8 gap-4">
          {cards && cards.length > 0
            ? cards.map((card, index) => {
                return (
                  <div className="w-full max-w-[400px]">
                    <div
                      key={index}
                      className="bg-white dark:bg-neutral-800 dark:shadow-none flex flex-col justify-between shadow-lg shadow-neutral-200 h-56 rounded-3xl p-5"
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
                        <button className="border p-2 px-3 rounded-full">
                          Remove
                        </button>
                        <button
                          onClick={() => handleToggle(index)}
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
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default Home;
