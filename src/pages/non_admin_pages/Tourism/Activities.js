import React, {useState} from 'react'
import Banner from '../../../components/Banner'
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';
import { FaFilter } from 'react-icons/fa6'
import TourismCards from '../../../components/TourismCards';
import { useNavigate } from 'react-router';
import BackToTop from '../../../components/BackToTop';
import { NavLink } from 'react-router-dom';


export default function Activities() {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSearch(category);
        setShowDropdown(false);
    };

    const categories = ['Festivals', 'Hiking', 'Outing', 'Events', 'Vacations'];

    const navigate = useNavigate();
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log(search);
            //HANDLE SEARCH QUERY HERE.
        }
    };

    var contents = [
        {
            id: 1,
            pic: require("../../../res/img/mapIcon.png"),
            title: "Abasig Matognon Natural Biotic Area (Hiking)",
            body: "Experience this 8.0-km out-and-back trail near San Vicente, Camarines Norte. Generally considered a moderately challenging route, it takes an average of 2 h 22 min to complete. This trail is great for birding, hiking, and mountain biking, and it's unlikely you'll encounter many other people while exploring.",
            rate: 4.7,
            vote: 213,
            comments: 16,
        },
        {
            id: 2,
            pic: require("../../../res/img/mapIcon.png"),
            title: "Abasig Matognon Natural Biotic Area (Hiking)",
            body: "Experience this 8.0-km out-and-back trail near San Vicente, Camarines Norte. Generally considered a moderately challenging route, it takes an average of 2 h 22 min to complete. This trail is great for birding, hiking, and mountain biking, and it's unlikely you'll encounter many other people while exploring.",
            rate: 4.7,
            vote: 213,
            comments: 16,
        },
        {
            id: 3,
            pic: require("../../../res/img/mapIcon.png"),
            title: "Abasig Matognon Natural Biotic Area (Hiking)",
            body: "Experience this 8.0-km out-and-back trail near San Vicente, Camarines Norte. Generally considered a moderately challenging route, it takes an average of 2 h 22 min to complete. This trail is great for birding, hiking, and mountain biking, and it's unlikely you'll encounter many other people while exploring.",
            rate: 4.7,
            vote: 213,
            comments: 16,
        },
        {
            id: 4,
            pic: require("../../../res/img/mapIcon.png"),
            title: "Abasig Matognon Natural Biotic Area (Hiking)",
            body: "Experience this 8.0-km out-and-back trail near San Vicente, Camarines Norte. Generally considered a moderately challenging route, it takes an average of 2 h 22 min to complete. This trail is great for birding, hiking, and mountain biking, and it's unlikely you'll encounter many other people while exploring.",
            rate: 4.7,
            vote: 213,
            comments: 16,
        },
        {
            id: 5,
            pic: require("../../../res/img/mapIcon.png"),
            title: "Abasig Matognon Natural Biotic Area (Hiking)",
            body: "Experience this 8.0-km out-and-back trail near San Vicente, Camarines Norte. Generally considered a moderately challenging route, it takes an average of 2 h 22 min to complete. This trail is great for birding, hiking, and mountain biking, and it's unlikely you'll encounter many other people while exploring.",
            rate: 4.7,
            vote: 213,
            comments: 16,
        },
        {
            id: 6,
            pic: require("../../../res/img/mapIcon.png"),
            title: "Abasig Matognon Natural Biotic Area (Hiking)",
            body: "Experience this 8.0-km out-and-back trail near San Vicente, Camarines Norte. Generally considered a moderately challenging route, it takes an average of 2 h 22 min to complete. This trail is great for birding, hiking, and mountain biking, and it's unlikely you'll encounter many other people while exploring.",
            rate: 4.7,
            vote: 213,
            comments: 16,
        },
    ];

    return (
        <>
            <Banner bannerType="common" src={require("../../../res/img/LGU-PERS.jpg")} alt="LGU" searchBar={false} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }, { title: "Tourism" }]}>
                <p>Activities</p>
            </Banner>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                <div className='flex items-center justify-center'>
                    <form className="w-7/12 my-auto p-3">
                        <div class="relative">
                            {/*SVG image of a magnifying glass*/}
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            {/*Search input box*/}
                            <input
                                type="search"
                                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-lgu-green rounded-full bg-gray-100 focus:ring-lgu-green focus:border-lgu-green"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                }}
                                required
                                onKeyDown={handleKeyDown}
                            />
                            {showDropdown && (
                                <div className="absolute mt-2 w-full bg-white border border-lgu-green rounded-md shadow-lg">
                                    <ul>
                                        {categories.map((category) => (
                                            <li
                                                key={category}
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                onClick={() => handleCategoryClick(category)}
                                            >
                                                {category}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </form>
                    <div className='pt-2 text-2xl'>
                        <button onClick={() => setShowDropdown(!showDropdown)}>
                            <FaFilter />
                        </button>

                    </div>
                </div>
                <div className='w-fit rounded-full ms-5 my-2 float float-right'>
                    <NavLink
                        to={PATH_NAME.Tourism.Content + "/add"}
                        className='bg-lgu-yellow text-black w-fit p-3 rounded-full'> {/** Button for Creating a post */}
                        +&nbsp;&nbsp;&nbsp;Create A Post
                    </NavLink>
                </div>
                <div className='pt-12'>
                    {contents.map((content, index) => {
                        return <TourismCards
                            key={index}
                            content={content}
                            onClick={() => {
                                navigate(PATH_NAME.Tourism.Activities + "/" + content.id);
                                window.scrollTo({ top: 0, left: 0 });
                            }}
                        />;
                    })}
                </div>




            </div>
            <BackToTop />
        </>

    )
}
