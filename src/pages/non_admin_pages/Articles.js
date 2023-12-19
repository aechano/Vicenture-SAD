import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import Banner from "../../components/Banner";
import { PATH_NAME } from "../../Variables/GLOBAL_VARIABLE";
import { NavLink } from 'react-router-dom';
import BackToTop from '../../components/BackToTop';
import axios from 'axios';
import { API } from '../../Variables/GLOBAL_VARIABLE';

export default function Articles() {

    const [contents, setContents] = useState([]);

    useEffect(() => {
        axios.get(API.viewArticle, {})
            .then((response) => response.data)
            .then((data) => {
                var newItems = [];
                for (var item of data) {
                    const imageName = item.imgName; // Assuming there's a property like 'imageName' in your data
                    const byteCharacters = atob(item.image); // Assuming there's a property like 'image' in your data

                    // Convert base64 string to ArrayBuffer
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    const byteArray = new Uint8Array(byteNumbers);

                    // Create a Blob from the ArrayBuffer
                    const blob = new Blob([byteArray], { type: 'image/*' }); // Change the type according to your image format

                    // Create a File from the Blob
                    const file = new File([blob], imageName || 'Image', { type: 'image/*' }); // Change the type accordingly

                    const imageUrl = URL.createObjectURL(blob);

                    newItems.push({ id: item.articleID, pic: imageUrl, title: item.articleTitle, cont: item.contents, date: item.timeStamps, caption: item.alt, tags: item.tags });
                }
                setContents(newItems);
            });
    }, []); 

    return (
        <>

            <Banner bannerType="common" src={require("../../res/img/mananap_falls.png")} alt="Mananap Falls" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }, { title: "Tourism" }, { title: "San Vicente Tourism", to: PATH_NAME.Tourism.SanVicente }]}>
                <p>Article</p>
            </Banner>

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                <div>
                    {contents.map((content, index) => (
                        <Link to={`/article/${content.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })} key={index} className="article-link">
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
                                        <p className="mb-3 font-normal text-gray-700 text-justify  line-clamp-5">
                                            {content.cont}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <BackToTop />
        </>
    );
}

export function ArticleContent() {
    const { articleID } = useParams();
    const [article, setArticle] = useState({
        articleID: null,
        articleTitle: null,
        timeStamps: null,
        alt: null,
        contents: "",
        tags: null,
        image: null,
        imgName: null
    });


    useEffect(() => {
        axios.get(API.viewArticleById(articleID), {})
            .then((response) => response.data)
            .then((data) => {
                console.log(data);
                setArticle(data);
            });
    }, []);

    // Split the content into paragraphs
    const paragraphs = article.contents.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));


    return (

        <>

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

            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5'>
                <div className='mb-10'>
                    <h1 className='mt-10 mb-2 font-bold text-4xl'>{article.articleTitle}</h1>
                    <p className='text-sm'>{article.timeStamps}</p>
                </div>
                <div>

                    <img src={"data:image/jpeg;base64," + article.image} alt={article.alt} className='mx-auto rounded-md w-auto h-96' />
                    <p className='text-sm text-gray-500 text-center pt-2'>{article.alt}</p>

                </div>
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className='leading-6 mt-8 text-justify indent-10'>
                        {paragraph}
                    </p>
                ))}
            </div>



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
            <BackToTop />
        </>
    );
}