import {useFetch} from "../hooks/useFetch.ts";
interface Card {
    description : string;
    isActive: boolean;
    logo :string;
    name : string;
}

const Home = () => {
    const data = useFetch<Card[]>('../data.json');
    console.log(data)
    return (
        <>
            <div className="mt-5">
                <div className="w-full max-w-5xl">
                    <div className="border flex gap-5 justify-center mobile:flex-col mobile:items-center laptop:flex-row laptop:justify-between">
                    <h1 className="font-bold text-4xl">Extension</h1>

                    <ul className="flex gap-2">
                        <li className=" bg-red-700 text-white border p-2 text-lg px-6 rounded-full">All</li>
                        <li className="border p-2 text-lg px-6 rounded-full">Active</li>
                        <li className="border p-2 text-lg px-6 rounded-full">Inactive</li>
                    </ul>
                    </div>
                </div>

            {
                data && data.length > 0 ? (
                  data.map((card, index) =>
                    <div >
                        <div className="border p-1">
                            <div className="flex gap-4">
                                <img src={card.logo} alt="image" className="self-start"/>
                                <div>
                                  <h1 className="text-xl font-bold ">{card.name}</h1>
                                    <p className="text-lg text-neutral-600">{card.description}</p>
                                </div>

                            </div>
                            <div>
                                <button>Remove</button>
                                <button className="border">ON </button>
                            </div>

                        </div>

                    </div>
                  )
                ) : null

            }
            </div>
        </>
    )
}

export default Home