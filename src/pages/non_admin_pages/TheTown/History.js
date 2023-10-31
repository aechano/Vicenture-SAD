import React from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';
import BackToTop from '../../../components/BackToTop';

export default function History() {
    return (
        <div>
            <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>History Unveiling: San Vicente</p>
            </Banner>

                {/* San Vicente, Camarines Norte */}
                <div className="flex flex-row">
                <div className="lg:w-1/2 p-4" style={{ float: 'left' }}>
                    <img
                    src={require("../../../res/img/mananap.jpg")}
                    alt="Mananap Falls"
                    className="w-full h-auto"
                    />
                </div>
                <div className="lg:w-1/2 p-4">
                    <p className="text-35 text-left">
                    San Vicente, formally recognized as the Municipality of San Vicente, is a town of the 5th class located in the province of Camarines Norte, Philippines. As of the 2020 census, it is home to a population of approximately 12,579 residents. The Mananap Falls is approximately 20–25 ft tall, tucked inside the thick forest and mountains. The water was ice cold, and there is a small raft tied which will lead you near the falls and a ladder to get to the top of the falls. There is a jumping point as well. It is more than this we-attitude that is practiced by the people, each one treating the other as more than a neighbor. A large segment of the population is related by blood. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non mauris vitae sem dignissim congue et in purus. Ut massa mauris, ultricies non sapien sit amet, gravida pulvinar lorem. Sed metus metus, dignissim nec tortor eu, iaculis euismod metus. Maecenas nunc ex, pellentesque tempor ex vitae, elementum iaculis ex. Fusce eu consequat lacus. Cras nec tempus dolor. Cras pellentesque convallis dolor, et facilisis massa interdum nec. Nam purus magna, rhoncus sed leo sed, tincidunt ultricies diam. Sed quis cursus urna. Pellentesque semper efficitur enim eget porta. Vestibulum et fringilla eros. Quisque placerat nulla a magna iaculis lobortis. Proin viverra, ligula nec aliquet ultrices, purus ipsum venenatis mi, at commodo dui nibh bibendum lorem. Donec suscipit metus ut justo mollis semper eget non odio. Pellentesque arcu nulla, dictum varius feugiat eu, egestas vel dolor. Ut ut auctor nisl. Morbi tincidunt, nisi sed tristique laoreet, nisi ligula maximus justo, sed cursus lorem ipsum sit amet quam. Nullam sollicitudin neque eu risus laoreet, vitae pellentesque turpis fringilla. Sed pellentesque arcu vitae tellus sollicitudin, sodales venenatis justo pharetra. Morbi pretium commodo sem sed tincidunt. Aliquam viverra facilisis turpis, non mollis nisl. Phasellus luctus, erat ut hendrerit bibendum, justo magna facilisis neque, ac pellentesque turpis orci vitae eros. Proin quis ante ligula. Donec tincidunt mauris lacus, quis faucibus felis pretium at. Fusce dignissim aliquet urna id fringilla. Sed quis lacus ultrices, mollis sapien ullamcorper, mollis nisi. Phasellus ac risus commodo, congue nunc id, laoreet nibh. Morbi feugiat sodales lectus. In elit lectus, tempus non aliquam eget, feugiat sit amet diam. Proin sit amet venenatis lacus, at dictum elit. Ut enim velit, malesuada non tincidunt at, ornare non tellus. Ut mattis dolor id dolor malesuada, a pharetra velit laoreet. Nullam eget mauris ut augue congue imperdiet nec nec libero. Aliquam fringilla tincidunt enim, sit amet convallis arcu euismod a. Morbi scelerisque feugiat fringilla. Praesent finibus mollis urna, at tincidunt eros rhoncus a. Fusce porttitor sollicitudin est, sit amet luctus tortor ultrices cursus.
                    </p>
                </div>
                </div>






        <BackToTop />
        </div>



    )
}