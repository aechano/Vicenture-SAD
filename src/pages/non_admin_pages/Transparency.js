import React from 'react';
import Banner from '../../components/Banner';
import { PATH_NAME } from '../../Variables/GLOBAL_VARIABLE';
import Viewer from '../../components/Viewer';

export default function Transparency() {

    var view = [
      {
        head: "Financial Data",
        pdfView: require("../../res/pdf/MC.pdf"),
      },
      {
        head: "Procurement",
        pdfView: require("../../res/pdf/sample.pdf"),
      }
    ];
  
    return (
      <>
        <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
          <p>Transparency Dashboard</p>
        </Banner>
  
        <div>
          <Viewer view={view}/>
        </div>
  
      </>
    );
  }