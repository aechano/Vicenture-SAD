import React from "react";
import Banner from "../../components/Banner";
import { PATH_NAME } from "../../Variables/GLOBAL_VARIABLE";
import { NavLink } from "react-router-dom";

export default function Articles() {

    var contents = [
        {
            pic: require("../../res/img/article.png"),
            title: "June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders1",
            cont: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor.",
        },
        {
            pic: require("../../res/img/article.png"),
            title: "June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders1",
            cont: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor.",
        },
        {
            pic: require("../../res/img/article.png"),
            title: "June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders1",
            cont: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor.",
        },
        {
            pic: require("../../res/img/article.png"),
            title: "June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders1",
            cont: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor.",
        },
        {
            pic: require("../../res/img/article.png"),
            title: "June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders1",
            cont: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor.",
        },
        {
            pic: require("../../res/img/article.png"),
            title: "June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders1",
            cont: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor.",
        },

    ];

    return (
        <>
            <Banner bannerType="common" src={require("../../res/img/mananap_falls.png")} alt="Mananap Falls" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Articles</p>
            </Banner>

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">

                <div>
                    {contents.map((content, index) => {
                        return (<ArticleContent key={index} content={content} />)
                    })}
                </div>
                <div>
                    <button type="button" className="flex items-center text-lgu-green font-medium text-md px-5 py-2.5 mr-2 mb-2">
                        <svg className="w-4 h-4 text-lgu-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                        </svg>
                        <p className="pl-3">Older Posts</p>
                    </button>
                </div>
            </div>
        </>
    );
}

function ArticleContent({ content }) {
    return (
        <div className="pb-5">
            <NavLink to={PATH_NAME.Home} className="flex flex-col items-center border-b-2 border-black md:flex-row md:mx-auto">
                <img className="object-cover w-full h-96 md:h-auto md:w-52 rounded-sm m-3" src={content.pic} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{content.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 text-justify">{content.cont}</p>
                </div>
            </NavLink>

        </div>
    );
}