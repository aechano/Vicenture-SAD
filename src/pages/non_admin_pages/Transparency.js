import React, {useEffect, useState} from 'react';
import Banner from '../../components/Banner';
import { PATH_NAME, API } from '../../Variables/GLOBAL_VARIABLE';
import Viewer from '../../components/Viewer';
import BackToTop from '../../components/BackToTop';
import axios from 'axios';

export default function Transparency() {
  const [view, setView] = useState([])

  useEffect(() => {
    axios.get(API.viewTransparency, {})
      .then((response) => response.data)
      .then((data) => {
        var newItems = [];
        for (var item of data) {
          const pdfName = item.pdfName;
          const byteCharacters = atob(item.pdf);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: 'application/pdf' });

          const file = new File([blob], pdfName || 'default_filename.pdf', { type: 'application/pdf' });
          newItems.push({ head: item.transparencyName, pdfView: file });
        }
        setView(newItems);
      });
  }, []);

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