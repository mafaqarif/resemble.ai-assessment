import { useState } from "react";

interface VoiveListProps{
    voiceList:{name: string; thumbnail: string} [];
}

export const VoiceList: React.FC<VoiveListProps>=({voiceList})=>{

    const [search,setSearch]=useState("");

    // const voiceList=[
    //     {name:'voice 1', thumbnail:"https://placehold.co/50"},
    //     {name:'voice 2', thumbnail:"https://placehold.co/50"},
    //     {name:'voice 3', thumbnail:"https://placehold.co/50"},
    // ];


    const filteredVoice= voiceList.filter(voice=>voice.name.includes(search));

return (
    <div className="p-4 ">
        <input className="w-full p-2 border mb-2" type="text" placeholder="search voice" onChange={(e)=>setSearch(e.target.value)}/>

        {/* grid */}

        <div className="grid grid-cols-3 gap-4 mt-4">

        {filteredVoice.map((voice ,index)=>{
            return(
                <div key={index} className="flex items-center gap-1">
                    <img src={voice.thumbnail} />
                    <p>{voice.name}</p>
                </div>
            );
        })}
        </div>
        
    </div>
);
};


// c) Voice List
// ● Display a grid of voice options with name and a small thumbnail
// ● Implement a simple filter/search functionality for the voices