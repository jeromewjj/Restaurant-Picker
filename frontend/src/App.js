import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreateRoomPage from "./pages/CreateRoomPage";
import JoinRoomPage from "./pages/JoinRoomPage";
import RoomPage from "./pages/RoomPage";
import NotFoundPage from "./pages/NotFoundPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/create-room" element={<CreateRoomPage/>}/>
          <Route path="/join-room" element={<JoinRoomPage/>}/>
          <Route path="/room/:roomId" element={<RoomPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
