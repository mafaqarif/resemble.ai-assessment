import { useState } from "react";

interface MainContentProps{
    updatedVoice:( text: string ) =>void;
}


export const MainContent: React.FC<MainContentProps>=({updatedVoice})=>{

    const [text,setText]=useState("");
    const [voiceSelected,setVoiceSelected]=useState("");
    const [loading,setLoading]=useState(false);

    const generateHandle=()=>{
        setLoading(true);
        setTimeout(()=>
        {
            setLoading(false)
        },2000);
        updatedVoice(text)
        alert(text);
    }


    return(
        <main className="p-4">
            <div className="mb-4">
                <label className="block mb-2">Enter text:</label>
                <input className="w-full p-2 border mb-2" type="text"  onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div  className="mb-4">
                <label className="block mb-2">Select voice:</label>
                <select  onChange={(e)=>setVoiceSelected(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="voice 1">Voice option 1</option>
                    <option value="voice 2">Voice option 2</option>
                </select>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded mb-4" onClick={generateHandle}>
                {loading ? "Generating...":"Generate"}
                </button>

            <div className="mb-4">
                <audio controls>
                <source src="placeholder.mp3" type="audio/mpeg"/>
                </audio>
            </div>
            <hr/>
        </main>
        
    );
}


// b) Main Content Area
// ● Input field for text to be converted to speech
// ● Dropdown to select from predefined voice options
// ● &quot;Generate&quot; button to simulate voice generation
// ● Audio player to play the generated audio (you can use a placeholder audio file)