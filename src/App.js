import React from "react";
import ReactPlayer from "react-player";

import "./App.css";

function App() {
  return (
    <div className="landpage">
      <h1>Beware Fellas...</h1>
      <h1>Dance Music is Back</h1>
      <ReactPlayer
        url="https://soundcloud.com/90s-dance-music/definition-of-joy-stay-with-me-4-ever"
        config={{
          soundcloud: {
            options: { auto_play: true },
          },
        }}
      />
      <h2>Go Tell Your Mom...</h2>
    </div>
  );
}

export default App;
