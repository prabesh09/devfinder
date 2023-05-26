import UserInput from "./components/UserInput"
import UserProfile from "./components/UserProfile"
import { useState } from "react"
import './components/style.css'

const App = () => {
  const [user, setUser] = useState<any>(null);

  const userEventHandler = (userName: string) => {
    const URL = `https://api.github.com/users/${userName}`;

    fetch(URL)
      .then(response => response.json())
      .then(userInfo => {
        setUser(userInfo);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
};


  return (
    <section className="main-container">
      <h1 className="title">devfinder</h1>
      <UserInput getUser={userEventHandler}/>

      {user && <UserProfile userName={user}/>}
    </section>
  )
}

export default App