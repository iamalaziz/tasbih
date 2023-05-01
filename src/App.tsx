import Controls from './components/Controls';
import Header from './components/Header';
import DataProvider from './context/context';

function App() {
  return (
    <div className="App">
      <div>
        <DataProvider>
          <Header />
          <Controls />
        </DataProvider>
      </div>
    </div>
  );
}

export default App;
