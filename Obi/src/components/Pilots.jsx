import { useState, useEffect } from "react";
import axios from "axios";

function PilotList({ pilotUrls }) {
  const [pilots, setPilots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPilots = async () => {
      const pilotData = await Promise.all(pilotUrls.map(url => axios.get(url)));
      setPilots(pilotData.map(pilotResponse => pilotResponse.data.name));
      setLoading(false);
    };

    getPilots();
  }, [pilotUrls]);

  if (loading) {
    return <div>Loading pilots...</div>;
  }

  if (!pilots.length) {
    return <div>No Pilots</div>;
  }

  return (
    <div>
      <h4>Pilots:</h4>
      <ul>
        {pilots.map(pilot => (
          <li key={pilot}>{pilot}</li>
        ))}
      </ul>
    </div>
  );
}

export default PilotList;
