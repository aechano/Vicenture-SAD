import React from 'react';
import Banner from '../../components/Banner';
import { PATH_NAME } from '../../Variables/GLOBAL_VARIABLE';
import Viewer from '../../components/Viewer';
import BackToTop from '../../components/BackToTop';

export default function Transparency() {

  var view = [
    {
      head: "Social Service",
      pdfView: require("../../res/pdf/Social-Service.pdf"),
    },
    {
      head: "Economic Service",
      pdfView: require("../../res/pdf/Economic-Service.pdf"),
    },
    {
      head: "Other Services",
      pdfView: require("../../res/pdf/Other-Services.pdf"),
    },
  ];

  return (
    <>
      <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
        <p>Transparency Dashboard</p>
      </Banner>

      <div>
        <Viewer view={view} />
      </div>
      <BackToTop />
    </>
  );
}