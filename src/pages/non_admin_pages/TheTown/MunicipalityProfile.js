import React from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';
import Viewer from '../../../components/Viewer';

export default function MunicipalityProfile() {

  var view = [
    {
      head: "Geographic Location",
      pdfView: require("../../../res/pdf/Geographic-Location.pdf"),
    },
    {
      head: "Physical Features",
      pdfView: require("../../../res/pdf/Physical-Features.pdf"),
    },
    {
      head: "Human Resources",
      pdfView: require("../../../res/pdf/Human-Resources.pdf"),
    },
    {
      head: "Social Services",
      pdfView: require("../../../res/pdf/Social-Services.pdf"),
    },
    {
      head: "Physical Infrastructure and Resources",
      pdfView: require("../../../res/pdf/Physical-Infrastructure-and-Resources.pdf"),
    },
    {
      head: "Economy",
      pdfView: require("../../../res/pdf/Economy.pdf"),
    },
    {
      head: "Social Welfare and Other Services",
      pdfView: require("../../../res/pdf/Social-Welfare-and-Other-Services.pdf"),
    },
    {
      head: "Institutional",
      pdfView: require("../../../res/pdf/Institutional.pdf"),
    },
    {
      head: "Others",
      pdfView: require("../../../res/pdf/Others.pdf"),
    },
  ];

  return (
    <>
      <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
        <p>Municipality Profile</p>
      </Banner>

      <div>
        <Viewer view={view}/>
      </div>

    </>
  );
}
