
const LeftSide = ({ filterProducts, filterState, setFilterState, clearFilters }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-80 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Filters</h3>

            {/* Category Filter */}
            <div>
                <h4 className="text-lg font-medium text-gray-600">Category</h4>
                <div className="space-y-2 mt-2">
                    {filterProducts?.categories?.map((category, index) => (
                        <label key={index} className="block">
                            <input
                                type="radio"
                                name="category"
                                value={category}
                                checked={filterState.categories === category}
                                onChange={(e) => setFilterState({ ...filterState, categories: e.target.value })}
                                className="mr-2"
                            />
                            {category}
                        </label>
                    ))}
                </div>
            </div>

            {/* Color Filter */}
            <div>
                <h4 className="text-lg font-medium text-gray-600">Color</h4>
                <div className="space-y-2 mt-2">
                    {filterProducts?.colors?.map((color, index) => (
                        <label key={index} className="block">
                            <input
                                type="radio"
                                name="color"
                                value={color}
                                checked={filterState.colors === color}
                                onChange={(e) => setFilterState({ ...filterState, colors: e.target.value })}
                                className="mr-2"
                            />
                            {color}
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range Filter */}
            <div>
                <h4 className="text-lg font-medium text-gray-600">Price Range</h4>
                <div className="space-y-2 mt-2">
                    {filterProducts?.priceRange?.map((range, index) => (
                        <label key={index} className="block">
                            <input
                                type="radio"
                                name="priceRange"
                                value={`${range.min}-${range.max}`}
                                checked={filterState.priceRange === `${range.min}-${range.max}`}
                                onChange={(e) => setFilterState({ ...filterState, priceRange: e.target.value })}
                                className="mr-2"
                            />
                            {range.label}
                        </label>
                    ))}
                </div>
            </div>

            {/* Clear Filters Button */}
            <button
                onClick={clearFilters}
                className="w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
            >
                Clear Filters
            </button>

        </div>
    );
};

export default LeftSide;
