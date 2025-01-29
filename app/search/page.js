import SearchMainComponent from "../components/search-components/SearchMainComponent";
import StandardPaginationComponent from "../components/articles-components/StandardPaginationComponent";
const Search = () => {
  return (
    <div className="min-h-screen bg-white">   

      {/* Main Content */}
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Card Contact Component */}
          <SearchMainComponent />
          <StandardPaginationComponent />
        </div>
      </main>
    </div>
  );
};

export default Search;
