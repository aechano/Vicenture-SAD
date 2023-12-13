import React, { useEffect, useState } from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';
import BackToTop from '../../../components/BackToTop';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// ... (import statements remain unchanged)

export default function Awards() {

    var contents = [
        {
            id: 0,
            pic: require('../../../res/img/awards.jpg'),
            title: 'November 23, 2023 | Peace and Order Awardee Community',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',
        },
        {
            id: 1,
            pic: require('../../../res/img/awards.jpg'),
            title: 'Drug Free Community Award',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 2,
            pic: require('../../../res/img/awards.jpg'),
            title: 'Zero Crime Rate',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 3,
            pic: require('../../../res/img/awards.jpg'),
            title: 'Awards 4',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 4,
            pic: require('../../../res/img/awards.jpg'),
            title: 'Awards 5',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 5,
            pic: require('../../../res/img/awards.jpg'),
            title: 'Awards 6',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 6,
            pic: require('../../../res/img/awards.jpg'),
            title: 'Awards 7',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 7,
            pic: require('../../../res/img/awards.jpg'),
            title: 'Awards 8',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 8,
            pic: require('../../../res/img/awards.jpg'),
            title: 'Awards 9',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

    ];

    return (
        <>
            <Banner
                bannerType="common"
                src={require("../../../res/img/awards.jpg")}
                alt="Mananap Falls"
                searchBar={true}
                breadcrumbs={[
                    { title: "Home", to: PATH_NAME.Home },
                    { title: "The Town" },
                    { title: "Awards", to: PATH_NAME.TheTown.Awards },
                ]}
            >
                <p>Awards and Recognition</p>
            </Banner>

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {contents.map((content, index) => (
                        <div key={index} className="bg-white rounded overflow-hidden shadow-md p-4 mb-4">
                            <div
                                className="w-full h-48 md:h-64"
                                style={{
                                    backgroundImage: `url(${content.pic})`,
                                    backgroundSize: 'cover',
                                }}
                                alt={content.title}
                            ></div>
                            <div className="p-4">
                                <p className="text-gray-900 font-bold text-xl mb-2">{content.title}</p>
                                <p className="text-gray-700 text-base">{content.cont}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <BackToTop />
        </>
    );
}