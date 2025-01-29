import SearchMainComponent from "../components/search-components/SearchMainComponent";

const Search = () => {
  return (
    <div className="min-h-screen bg-white">   

      {/* Main Content */}
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Card Contact Component */}
          <SearchMainComponent />
        </div>
      </main>
    </div>
  );
};

export default Search;
