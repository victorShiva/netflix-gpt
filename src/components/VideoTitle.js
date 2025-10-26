

const VideoTitle = ({ overview, title }) => {
    return (
        <div className="w-full aspect-video pt-[30%] px-4 md:pt-[12%] md:px-10 absolute z-30 text-white bg-gradient-to-r from-black ">
            <h1 className=" font-bold text-sm md:text-4xl w-2/4 opacity-50 hover:opacity-100">{title}</h1>
            <p className="hidden md:block md:text-lg py-6 w-2/4 opacity-50 hover:opacity-100">{overview}</p>
            <div className="mt-2 flex ">
                <button className="px-2 py-0.5 md:px-8 md:py-2 text-xs md:text-sm bg-white text-black rounded-sm mr-4 hover:bg-opacity-70"> ▶️ Play</button>
                <button className="px-2 py-0.5 md:px-8 md:py-2 text-xs md:text-sm bg-gray-900 text-white rounded-sm hover:bg-opacity-70"> ℹ️ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;