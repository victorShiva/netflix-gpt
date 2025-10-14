

const VideoTitle = ({ overview, title }) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-4xl">{title}</h1>
            <p className="text-lg py-6 w-1/3">{overview}</p>
            <div>
                <button className="px-8 py-2 text-lg bg-white text-black rounded-sm mr-4 hover:bg-opacity-70"> ▶️ Play</button>
                <button className="px-8 py-2 text-lg bg-gray-900 text-white rounded-sm hover:bg-opacity-70"> ℹ️ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;