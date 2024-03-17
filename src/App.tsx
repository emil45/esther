import Weather from "./components/Weather";
import TopAppBar from "./components/TopAppBar";
import { useEffect, useState } from "react";

function App() {
  const [lat, setLat] = useState<number>(31.9488);
  const [long, setLong] = useState<number>(34.832384);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log(`Latitude '${lat}', Longtitue: '${long}'`);
  }, [lat, long]);

  return (
    <div>
      <TopAppBar />
      <Weather lat={lat} long={long} />
    </div>
  );
}

export default App;
