
import './App.css'
import Login from './components/Login'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <profile />
    </UserContextProvider>
  )
}

export default App