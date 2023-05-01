import Controls from './components/Controls';
import Header from './components/Header';
import DataProvider from './context/context';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Controls />
      </DataProvider>
    </div>
  );
}

export default App;
