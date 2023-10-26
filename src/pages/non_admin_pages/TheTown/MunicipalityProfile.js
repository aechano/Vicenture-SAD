import React from 'react'
import Banner from '../../../components/Banner'
import WebpagePath from '../../../components/WebpagePath'
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE'


export default function MunicipalityProfile() {
  return (
    <>
      <Banner bottomLeft={true} searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home },]}>
        <h1>Municipality Profile</h1>
      </Banner>

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">

      </div>


    </>
    
  )
}
