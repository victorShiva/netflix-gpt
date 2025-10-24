

const VideoTitle = ({ overview, title }) => {
    return (
        <div className="w-full aspect-video pt-[12%] px-20 absolute z-30 text-white bg-gradient-to-r from-black ">
            <h1 className="font-bold text-4xl w-2/4 opacity-50 hover:opacity-100">{title}</h1>
            <p className="text-lg py-6 w-2/4 opacity-50 hover:opacity-100">{overview}</p>
            <div>
                <button className="px-8 py-2 text-lg bg-white text-black rounded-sm mr-4 hover:bg-opacity-70"> ▶️ Play</button>
                <button className="px-8 py-2 text-lg bg-gray-900 text-white rounded-sm hover:bg-opacity-70"> ℹ️ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;