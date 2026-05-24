import { useTime } from "./hooks/useTime";

function App() {
  const day = useTime<string>("day");
  const hour = useTime<string>("hour");

  return (
    <div>
      <h1>Custom Hook Exercise | React.JS </h1>

      <h3>Day: {day}</h3>
      <h3>Hour: {hour}</h3>
    </div>
  );
}

export default App;
