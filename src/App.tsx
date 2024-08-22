import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { VoiceList } from './components/VoiceList';

function App() {

  const [voices,setVoices]=useState(
    [
      {name:'voice 1', thumbnail:"https://placehold.co/50"},
      {name:'voice 2', thumbnail:"https://placehold.co/50"},
      {name:'voice 3', thumbnail:"https://placehold.co/50"},
  ]
  );
  const updateVoices=( text : string )=>{
    const newVoiceList=[
      {name: text , thumbnail:"https://placehold.co/50"},
      ...voices,
    ];
    setVoices(newVoiceList);

  }

  return (
    <>
    <Header/>
    <MainContent updatedVoice={updateVoices}/>
    <VoiceList voiceList= {voices}/>
    </>
  );
}

export default App;
