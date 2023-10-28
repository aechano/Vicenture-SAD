import React from 'react'
import Banner from '../../../components/Banner'
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE'


export default function MunicipalityProfile() {
  return (
    <>
      <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
        <p>Municipality Profile</p>
      </Banner>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">

      </div>


    </>
    
  )
}
