// GeneralArticles.js
import React from 'react';
import styled from 'styled-components';
import Banner from "../components/Banner";
import { test_articles } from "../data/test";
import ArticleComponent from "../components/ArticleComponent";
import NavigationSec from '../components/Navagation';

const PageWrapper = styled.div`

`;

const ArticleWrapper = styled.div`
  display: flex;      
  flex-wrap: wrap;    
  gap: 49px;         

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

const GeneralArticles = () => {
return (
    <PageWrapper>

    <Banner />
    <ArticleWrapper>
        {test_articles.map((article) => (
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

    </PageWrapper>
);
};

export default GeneralArticles;
