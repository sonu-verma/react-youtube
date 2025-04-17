const FilterButton = ({name}) => {
    return (
        <>
            <button className="px-6 py-0.5 border-2 border-gray-400 hover:border-red-500 rounded-2xl text-white bg-gray-400 ">{name}</button>
        </>
    );
}

export default FilterButton;