import UserContext from "./contexts/UserContext";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";

const App = () => {
  const user = {
    name: 'João',
    email: 'joao@example.com',
  };

  return (
    <UserContext.Provider value={user}>
      <div>
        <Header />
        <h1>Aplicação</h1>
        <UserInfo />
      </div>
    </UserContext.Provider>
  );
};

export default App;