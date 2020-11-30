import Profile from "./Components/Profile/Profile";
import Statistics from "./Components/Statistics/Statistics";
import user from "./user.json";
import statistics from "./statistical-data.json";
// import "./App.css";

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statistics} />
    </div>
  );
}