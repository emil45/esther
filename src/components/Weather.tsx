import { Box, Button, Chip } from "@mui/material";
import { useState } from "react";

function Weather({ lat, long }: { lat: number; long: number }) {
  const [first, setFirst] = useState<number>(1);

  const increaseSecond = () => {
    setFirst(first + 1);
  };

  return (
    <Box>
      <Chip label={`lat: ${lat}`} />
      <Chip label={`long: ${long}`} />
    </Box>
  );
}

export default Weather;
