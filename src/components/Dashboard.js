import React,{useState} from 'react'
import Header from './Header.js'
import TopCardList from './top-card-list.js'

import '../styles/global.css'



const Dashboard =({ navigateTo })=>{
    return (
        <>
        <Header navigateTo={navigateTo} />
        <TopCardList/>
        </>
      );
};

export default Dashboard;