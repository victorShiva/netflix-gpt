import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    console.log(user);

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


    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
            <img
                className="w-52 h-24"
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

            {
                user &&
                <div
                    className="flex items-center gap-2"
                >
                    <h1 className="text-cyan-400 capitalize mr-1 font-bold">{user.displayName}</h1>
                    <img
                        className="w-8 h-8 rounded-full"
                        src={user.photoURL}
                        //src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
                        alt="userLogo" />
                    <button
                        className="bg-red-500 py-1 px-2 rounded-sm hover:bg-red-600 box-border shadow-lg hover:shadow-red-600/50 shadow-green-600/50 font-bold text-sm"
                        onClick={handleSignOut}>(Sign Out)
                    </button>
                </div>
            }
        </div>
    )
}

export default Header;