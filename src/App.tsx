import Controls from './components/Controls';
import Footer from './components/Footer';
import Header from './components/Header';
import DataProvider from './context/context';

function App() {
  return (
    <div className="App">
      <div>
        <DataProvider>
          <Header />
          <Controls />
          <Footer />
        </DataProvider>
      </div>
    </div>
  );
}

export default App;
