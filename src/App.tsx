import "./App.css";
import UserDetailsDisplay from "./Components/UserDetailsDisplay";
import UserDetailsUpdate from "./Components/UserDetailsUpdate";

function App() {
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center gap-4">
      <h1 className="text-blue-500 text-[30px]">
        User Details Display - ContextAPI 4
      </h1>
      <UserDetailsUpdate />
      <UserDetailsDisplay />
    </div>
  );
}

export default App;
