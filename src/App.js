import './App.css';
import MainRoutes from './MainRoutes';
import Navbar from './components/Navbar/Navbar';
import ContactContextProvider from './context/ContactsContext';

function App() {
  return (
    <>
    <ContactContextProvider>
      <Navbar/>
        <MainRoutes/>
    </ContactContextProvider>
    </>
  );
}

export default App;
