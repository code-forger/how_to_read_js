import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "./reset.css";
import "./common.css";

const Page = ({children, pageTitle}) => {
    return (
        <div id='page'>
            <Header />
            <div id='content'>
                {children}
            </div>
            <Footer pageTitle={pageTitle}/>
        </div>
    );
};

Page.propTypes = {

};

export default Page;