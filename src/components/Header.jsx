import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toggleDarkMode, toggleMenu} from "../slices/appSlice";
import {IoMoon, IoSunny} from "react-icons/io5";
import {YOUTUBE_SEARCH_API} from "../utils/constants";
import {cacheResults} from "../slices/searchSlice";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const dispatch = useDispatch();
    const dark = useSelector(state => state.app.darkMode);
    const cache = useSelector(state => state.search);

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    const darkModeHandler = () => {
        dispatch(toggleDarkMode());
        document.body.classList.toggle("dark");
    }

    useEffect(() => {
        const timer =  setTimeout(() => {
            if (cache[searchQuery]) {
                setSuggestions(cache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
        }, 200);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    const getSearchSuggestions = () => {
        fetch(YOUTUBE_SEARCH_API + searchQuery)
        .then(res => res.json())
        .then(data => {
            setSuggestions(data[1])
            dispatch(cacheResults({
                [searchQuery]: data[1]
            }))
        })
    }

    return (
        <div className="grid grid-flow-col p-4 shadow-lg dark:bg-gray transition dark:border-b-2 dark:border-gray-200">
            <div className="flex col-span-1 gap-4">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
                    className="h-8  cursor-pointer"
                     alt="hamburger menu"
                    onClick={() => toggleMenuHandler()}
                />
                <a href="/youtube">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png"
                        className="h-8"
                         alt="logo"
                    />
                </a>
            </div>
            <div className="col-span-10 place-content-center">
                <div>
                    <input
                        className="w-1/2 rounded-l-full border-2 border-amber-400 p-2 bg-white dark:bg-snowman"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)}
                    />
                    <button className="text-blue-500 border-2 border-amber-400 rounded-r-full p-2 bg-beige dark:bg-snowman ">Search</button>
                </div>
                {
                    showSuggestion &&
                    <div className="absolute bg-white py-2 px-5 w-[37rem] rounded-2xl">
                        <ul>
                            {suggestions.map((suggestion, i) => (
                                <li key={i} className="p-1 m-1 shadow-sm hover:bg-beige rounded-lg"><span className="mr-4">🔎</span>{suggestion}</li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
            <div className="flex col-span-1 place-content-end">
                <button onClick={darkModeHandler}  className="p-3 mx-3">
                    { dark && <IoSunny size="24px" /> }
                    { !dark && <IoMoon size="24px" /> }
                </button>
                <img
                    className="h-10"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png"
                    alt="user"
                />
            </div>
        </div>
    );
};

export default Header;