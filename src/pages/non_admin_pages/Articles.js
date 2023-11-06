import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Banner from "../../components/Banner";
import { PATH_NAME } from "../../Variables/GLOBAL_VARIABLE";

export default function Articles() {
    var contents = [
        {
            id: 0,
            pic: require('../../res/img/article.png'),
            title: 'June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',
        },
        {
            id: 1,
            pic: require('../../res/img/article.png'),
            title: 'Article 2',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 2,
            pic: require('../../res/img/article.png'),
            title: 'Article 3',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 3,
            pic: require('../../res/img/article.png'),
            title: 'Article 4',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },


    ];


    return (
        <>

            <Banner bannerType="common" src={require("../../res/img/mananap_falls.png")} alt="Mananap Falls" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }, { title: "Tourism" }, { title: "San Vicente Tourism", to: PATH_NAME.Tourism.SanVicente }]}>
                <p>Article</p>
            </Banner>

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                <div>
                    {contents.map((content, index) => (
                        <Link to={`/article/${content.id}`} key={index} className="article-link">
                            <div className="pb-5">
                                <div className="flex flex-col items-center border-b-2 border-black md:flex-row md:mx-auto">
                                    <img
                                        className="object-cover w-full h-96 md:h-auto md:w-52 rounded-sm m-3"
                                        src={content.pic}
                                        alt=""
                                    />
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
                                            {content.title}
                                        </h2>
                                        <p className="mb-3 font-normal text-gray-700 text-justify">
                                            {content.cont}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div>
                    <button
                        type="button"
                        className="flex items-center text-lgu-green font-medium text-md px-5 py-2.5 mr-2 mb-2"
                    >
                        <svg
                            className="w-4 h-4 text-lgu-green"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 5H1m0 0 4 4M1 5l4-4"
                            />
                        </svg>
                        <p className="pl-3">Older Posts</p>
                    </button>
                </div>
            </div>
        </>
    );
}

export function ArticleContent() {
    const { articleID } = useParams();

    var contents = [
        {
            id: 0,
            pic: require('../../res/img/article.png'),
            title: 'June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders',
            cont:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
            id: 1,
            pic: require('../../res/img/article.png'),
            title: 'Article 2',
            cont: 'Content for Article 2...',
        },
    ];

    // Find the article with the matching ID
    const article = contents.find((article) => article.id === parseInt(articleID, 10));

    // Check if the article was found
    if (!article) {
        return (
            <div>
                <p>Article not found.</p>
            </div>
        );
    }

    // Split the content into paragraphs
    const paragraphs = article.cont.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));



    return (
        <div>
            <Banner
                bannerType="common"
                src={require('../../res/img/mananap_falls.png')}
                alt="Mananap Falls"
                searchBar={true}
                breadcrumbs={[
                    { title: 'Home', to: PATH_NAME.Home },
                    { title: 'Tourism' },
                    { title: 'San Vicente Tourism', to: PATH_NAME.Tourism.SanVicente },
                ]}
            >
                <p>Article</p>
            </Banner>

            <h1 style={{ marginTop: '20px', marginBottom: '20px', marginLeft: '20px', fontWeight: 'bold', fontSize: '40px' }}>{article.title}</h1>
            <div className="flex flex-col items-center sm:flex-row justify-center sm:justify-end">
                {/* First Container (Above) */}
                <div className="w-full sm:w-[18rem] rounded-lg bg-white border border-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 my-4 sm:my-4 mx-2 sm:mx-14">
                    <div className="relative overflow-hidden aspect-w-3 aspect-h-4">
                        <img
                            className="rounded-t-lg object-cover w-full h-full"
                            src={require("../../res/img/article.png")}
                            alt="Mayor"
                        />
                    </div>
                    <div className="p-6">
                        <p className="text-lg text-neutral-600 dark:text-neutral-200 text-left font-bold">
                            June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders
                        </p>
                        <p className="text-sm text-neutral-400 dark:text-neutral-300 text-left font-regular">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus
                        </p>
                    </div>
                </div>
            </div>

            {/* Second Container (Below) */}
            <div className="flex flex-col items-center sm:flex-row justify-center sm:justify-end">
                <div className="w-full sm:w-[18rem] rounded-lg bg-white border border-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 my-auto sm:ml-auto sm:mr-14">
                    <div className="relative overflow-hidden aspect-w-3 aspect-h-4">
                        <img
                            className="rounded-t-lg object-cover w-full h-full"
                            src={require("../../res/img/article.png")}
                            alt="Mayor"
                        />
                    </div>
                    <div className="p-6">
                        <p className="text-lg text-neutral-600 dark:text-neutral-200 text-left font-bold">
                            June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders
                        </p>
                        <p className="text-sm text-neutral-400 dark:text-neutral-300 text-left font-regular">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus
                        </p>
                    </div>
                </div>
            </div>


            <img src={article.pic} alt="Article" style={{ marginLeft: '60px', marginTop: '-965px' }} />

            {paragraphs.map((paragraph, index) => (
                <p key={index} style={{ marginTop: '20px', marginBottom: '20px', marginLeft: '60px', marginRight: '80px' }}>
                    {paragraph}
                </p>
            ))}

            {/* Media query for screens with a maximum width of 768px */}
            <style>
                {`
          @media (max-width: 768px) {
            p {
              word-wrap: break-word; /* Adjust text wrapping for smaller screens */
            }
          }
        `}
            </style>

        </div>
    );
}
