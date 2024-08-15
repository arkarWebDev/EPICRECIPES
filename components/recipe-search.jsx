const RecipeSearch = ({ setSearchVal, searchVal }) => {
  return (
    <nav className=" w-full mb-5 text-right">
      <p className=" text-sm font-medium">Can't find your favoriate ?</p>
      <input
        placeholder="seacrch recipes ..."
        className="w-3/4 md:w-1/2 border-2 border-gray-500 p-2 rounded-md mt-2"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
    </nav>
  );
};

export default RecipeSearch;
