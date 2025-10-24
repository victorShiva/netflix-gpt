import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES, USER_LOGO } from "../utils/constants";
import { toogleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const isShowGPTSearchEnable = useSelector(store => store.gpt.showGPTSearch);
    const handleSignOut = () => {

        signOut(auth)
            .then(() => {
                dispatch(removeUser());
                navigate('/')
            }).catch((error) => {
                navigate('/error');
                console.log(error);
            });

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            //console.log(user);
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }))
                navigate('/browse');
            } else {
                dispatch(removeUser);
                navigate('/')
            }
        });
        return () => { unsubscribe() };
    }, [])

    const handleGPTSearchClick = () => {
        dispatch(toogleGPTSearchView());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div
            className="absolute z-40 w-full px-6 py-2 bg-gradient-to-b from-black flex justify-between items-center ">
            <img
                className="w-52 h-24"
                src={LOGO} alt="netflix-logo" />
            {
                user &&
                <div
                    className="flex items-center gap-4"
                >
                    {isShowGPTSearchEnable &&
                        <select className="py-1 px-2 m-2 bg-gray-800 text-white" onChange={(e) => handleLanguageChange(e)}>
                            {
                                SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                            }
                        </select>
                    }
                    <div className="flex items-end">

                        <h1 className="text-cyan-400 capitalize mr-1 font-semibold underline cursor-pointer">{user.displayName}</h1>
                        <img
                            className="w-8 h-8 rounded-md"
                            //src={user.photoURL}
                            src={USER_LOGO}
                            alt="userLogo" />
                    </div>
                    <button
                        className="py-1 px-2 font-semibold hover:outline-none hover:outline-2 hover:outline-blue-800/80 hover:bg-red-700/50 transition-all rounded-sm text-white"
                        onClick={handleGPTSearchClick}
                    >{isShowGPTSearchEnable ? "Home Page" : "GPT Search"}</button>
                    <button
                        className="text-gray-100 bg-red-500 py-1 px-2 rounded-sm hover:bg-red-600 box-border shadow-lg hover:shadow-red-600/50 shadow-green-600/50 font-semibold text-sm"
                        onClick={handleSignOut}> (Sign Out)
                    </button>
                </div>
            }
        </div>
    )
}

export default Header;