import InputSearch from './components/InputSearch';
import UserCollapse from './components/User/UserCollapse';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex justify-center p-4">
        <div className="w-full md:w-8/12">
          <InputSearch />
          <div className="mt-4">
            <UserCollapse />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
