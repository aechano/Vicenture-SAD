import React, { useState, useEffect } from 'react';
import Banner from '../../../components/Banner';
import BackToTop from '../../../components/BackToTop';
import { PATH_NAME, USER_TYPES } from '../../../Variables/GLOBAL_VARIABLE';
import InvestContent from '../../../components/InvestContent';
import Page403 from '../../Accounts/ErrorPages/Page403';
import { NavLink } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

export default function InvestmentOpportunities() {
    const opportunitiesPerPage = 3;
    const { page = 1 } = useParams();
    const currentPage = parseInt(page, 10);
    const [userType, setUserType] = useState(USER_TYPES.Guest);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        var jwt = Cookies.get("token")
        if (jwt) {
            var payload = jwtDecode(jwt);
            setUserType(payload.AccountType);
        }
    }, [])

    const handlePageChange = (newPage) => {
        navigate(`/invest/investment-opportunities/${newPage}`);
    };

    useEffect(() => {
        if (location.pathname === PATH_NAME.Invest.InvestmentOpportunities) {
            navigate('/invest/investment-opportunities/1');
        }
    }, [location.pathname, navigate]);



    var contents = [
        {
            title: "Agriculture",
            source: require("../../../res/img/agri.jpeg"),
            alt: "Farmers Planting Pineapple",
            ref: PATH_NAME.Invest.InvestmentOpportunitiesContent + "/agriculture",
            body: "Agriculture in San Vicente, Camarines Norte plays a pivotal role in the local economy, serving as its backbone. This sector not only sustains the population but also provides livelihood opportunities, supplies raw materials to industries, and fuels economic growth through trade and business activities. The agricultural landscape of San Vicente primarily focuses on the cultivation of major crops such as coconut, pineapple, and rice. In addition to these staples, the Municipality also engages in small-scale production of vegetables, livestock, poultry, and fisheries.One of the key income sources for farmers in San Vicente is the production of copra, which involves drying coconut kernels to extract valuable coconut oil. Furthermore, the production of coconut and pineapple fiber plays a significant role in the local economy and is facilitated by the Fabrica Manpower Fiber Association."
        },
        {
            title: "Infrastructure",
            source: require("../../../res/img/infra.jpg"),
            alt: "Church",
            ref: PATH_NAME.Invest.InvestmentOpportunitiesContent + "/infrastructure",
            body: "The Municipality has made significant investments in its infrastructure to meet the need of its residents and support its growing economy. San Vicente boasts well-maintained roads with ongoing concrete work on national roads, stretching from Poblacion, San Vicenten to Brgy. San Jose and Brgy. Fabrica, including concrete bridges and spillways connecting various Brgy. of San Vicente, such as Brgy. Iraya Sur, Cabanbanan, San Jose, and Calabagas. Furthermore, San Vicente not only has access to its 9 Barangays but is strategically positioned with road networks connecting to different municipalities within Camarines Norte, including Labo, Vinzons, Talisay, and Daet.There are also ongoing efforts to connect to the roads of San Lorenzo and San-Antinio, Labo. This extensive road network fosters connectivity, trade, and accessibility for its residents."
        },
        {
            title: "Tourism",
            source: require("../../../res/img/tourism.jpg"),
            alt: "Falls",
            ref: PATH_NAME.Invest.InvestmentOpportunitiesContent + "/tourism",
            body: "San Vicente is a picturesque municipality in Camarines Norte, Philippines. Nestled amidst lush greenery, it offers a harmonious blend of natural beauty and cultural richness. It takes pride in its commitment to eco and agri-tourism adventures. The town's pristine environment and fertile lands provide a perfect backdrop for a wide range of activities catering to diverse interests."
        },
        {
            title: "Tourism",
            source: require("../../../res/img/tourism.jpg"),
            alt: "Falls",
            ref: PATH_NAME.Invest.InvestmentOpportunitiesContent + "/tourism",
            body: "San Vicente is a picturesque municipality in Camarines Norte, Philippines. Nestled amidst lush greenery, it offers a harmonious blend of natural beauty and cultural richness. It takes pride in its commitment to eco and agri-tourism adventures. The town's pristine environment and fertile lands provide a perfect backdrop for a wide range of activities catering to diverse interests."
        },
        {
            title: "Tourism",
            source: require("../../../res/img/tourism.jpg"),
            alt: "Falls",
            ref: PATH_NAME.Invest.InvestmentOpportunitiesContent + "/tourism",
            body: "San Vicente is a picturesque municipality in Camarines Norte, Philippines. Nestled amidst lush greenery, it offers a harmonious blend of natural beauty and cultural richness. It takes pride in its commitment to eco and agri-tourism adventures. The town's pristine environment and fertile lands provide a perfect backdrop for a wide range of activities catering to diverse interests."
        },
        {
            title: "Tourism",
            source: require("../../../res/img/tourism.jpg"),
            alt: "Falls",
            ref: PATH_NAME.Invest.InvestmentOpportunitiesContent + "/tourism",
            body: "San Vicente is a picturesque municipality in Camarines Norte, Philippines. Nestled amidst lush greenery, it offers a harmonious blend of natural beauty and cultural richness. It takes pride in its commitment to eco and agri-tourism adventures. The town's pristine environment and fertile lands provide a perfect backdrop for a wide range of activities catering to diverse interests."
        },
        {
            title: "Tourism",
            source: require("../../../res/img/tourism.jpg"),
            alt: "Falls",
            ref: PATH_NAME.Invest.InvestmentOpportunitiesContent + "/tourism",
            body: "San Vicente is a picturesque municipality in Camarines Norte, Philippines. Nestled amidst lush greenery, it offers a harmonious blend of natural beauty and cultural richness. It takes pride in its commitment to eco and agri-tourism adventures. The town's pristine environment and fertile lands provide a perfect backdrop for a wide range of activities catering to diverse interests."
        },
        {
            title: "Tourism",
            source: require("../../../res/img/tourism.jpg"),
            alt: "Falls",
            ref: PATH_NAME.Invest.InvestmentOpportunitiesContent + "/tourism",
            body: "San Vicente is a picturesque municipality in Camarines Norte, Philippines. Nestled amidst lush greenery, it offers a harmonious blend of natural beauty and cultural richness. It takes pride in its commitment to eco and agri-tourism adventures. The town's pristine environment and fertile lands provide a perfect backdrop for a wide range of activities catering to diverse interests."
        },
        {
            title: "Tourism",
            source: require("../../../res/img/tourism.jpg"),
            alt: "Falls",
            ref: PATH_NAME.Invest.InvestmentOpportunitiesContent + "/tourism",
            body: "San Vicente is a picturesque municipality in Camarines Norte, Philippines. Nestled amidst lush greenery, it offers a harmonious blend of natural beauty and cultural richness. It takes pride in its commitment to eco and agri-tourism adventures. The town's pristine environment and fertile lands provide a perfect backdrop for a wide range of activities catering to diverse interests."
        },

    ];

    if ([USER_TYPES.Citizen, USER_TYPES.Guest, USER_TYPES.Tourist].includes(userType)) {
        return <Page403 />
    }

    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * opportunitiesPerPage;
    const endIndex = startIndex + opportunitiesPerPage;

    const currentOpportunities = contents.slice(startIndex, endIndex);

    const totalPages = Math.ceil(contents.length / opportunitiesPerPage);



    return (
        <div>
            <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Investment Opportunities</p>
            </Banner>

            {
                USER_TYPES.EndUsers.includes(userType) ?
                    null
                    :
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                        <div className="flex justify-end m-5 w-5/6 mx-auto pt-10">
                            <div className='w-fit rounded-full'>
                                <NavLink
                                    to={PATH_NAME.Tourism.Content + "/add"}
                                    className='bg-lgu-yellow text-black w-fit p-3 rounded-full hover:bg-yellow-500'> {/** Button for Creating a post */}
                                    +&nbsp;&nbsp;&nbsp;Create A Post
                                </NavLink>
                            </div>
                        </div>
                    </div>
            }
            <div className=''>
                {currentOpportunities.map((data, index) => {
                    return <InvestContent key={index} data={data} />
                })}



                <nav aria-label="Page navigation example">
                    <ul className="list-style-none flex justify-center">
                        <li>
                            <NavLink
                                className={`relative block rounded px-3 py-1.5 text-lg text-black transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                to={`/invest/investment-opportunities/${currentPage - 1}`}
                                onClick={() => {
                                    if (currentPage > 1) {
                                        handlePageChange(currentPage - 1);
                                        window.scrollTo({ top: 0, left: 0 });
                                    }
                                }}
                                aria-label="Previous"
                            >
                                <span aria-hidden="true">&laquo;</span>
                            </NavLink>
                        </li>

                        {[...Array(totalPages).keys()].map((pageNumber) => (
                            <li key={pageNumber}>
                                <NavLink
                                    to={`/invest/investment-opportunities/${pageNumber + 1}`}
                                    onClick={() => {
                                        handlePageChange(pageNumber + 1);
                                        window.scrollTo({ top: 0, left: 0 });
                                    }}
                                    className={`relative block rounded px-3 py-1.5 text-lg text-black transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white ${pageNumber + 1 === currentPage ? 'bg-neutral-200' : ''
                                        }`}
                                >
                                    {pageNumber + 1}
                                </NavLink>
                            </li>
                        ))}

                        <li>
                            <NavLink
                                className={`relative block rounded px-3 py-1.5 text-lg text-black transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                to={`/invest/investment-opportunities/${currentPage + 1}`}
                                onClick={() => {
                                    if (currentPage < totalPages) {
                                        handlePageChange(currentPage + 1);
                                        window.scrollTo({ top: 0, left: 0 });
                                    }
                                }}
                                aria-label="Next"
                            >
                                <span aria-hidden="true">&raquo;</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <BackToTop />
        </div>
    )
}
