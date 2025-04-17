import FilterButton from "./FilterButton"

const VideoFilter = () => {
    return <>
        <div className="flex gap-2 m-2">
            <FilterButton name="All" />
            <FilterButton name="Trending" />
            <FilterButton name="Cricket" />
            <FilterButton name="News" />
        </div>
    </>
}

export default VideoFilter