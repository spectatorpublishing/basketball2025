import React from 'react';
import styled from 'styled-components';
import Banner from "../components/Banner";
import { men_articles } from "../data/menarticles";
import ArticleComponent from "../components/ArticleComponent";
import NavigationSec from '../components/Navagation';
import Navbar from '../components/Navbar';
import MobileNavBar from '../components/MobileNavBar';

const ArticleWrapper = styled.div`
  display: flex;      
  flex-wrap: wrap;    
  gap: 150px;         

  justify-content: center;
  align-items: flex-start;


  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem; 
`;

const MenArticles = () => {
return (
    <div>
    <MobileNavBar current = {"all"} />
    <Banner />
    <Navbar />
    <ArticleWrapper>
        {men_articles.map((article) => (
        <ArticleComponent key={article.article_link} article={article} />
        ))}
    </ArticleWrapper>

    <NavigationWrapper>
        <NavigationSec
            first={false}            
            next="Home"         
            link="/"        
        />
    </NavigationWrapper>

    </div>
);
};

export default MenArticles;
