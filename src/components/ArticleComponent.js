import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
  width: 100%;
  max-width: 591px;
  background: #4F6A6F;
  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  cursor: pointer; /* indicates it's clickable */


  transition: background 0.3s ease, box-shadow 0.3s ease;

  &:hover {

    background: #435c62;


    box-shadow: 8px 8px 6px rgba(0, 0, 0, 0.35);
  }
`;

const ImageWrapper = styled.div`
  padding-top: 35px;
  padding-left: 36px;
`;

const ArticleImageBG = styled.img`
  margin: 0 auto;
  width: 92%;
  height: 342px;
  border-radius: 4px;
  object-fit: cover; 
  background: linear-gradient(
    0deg, 
    rgba(0, 13, 116, 0.30) 0%, 
    rgba(0, 13, 116, 0.30) 100%
  );
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 36px;
  padding-top: 26px;
`;

const Title = styled.div`
  width: 100%;
  color: #F7ECE5;
  font-family: Inter;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 1.6px;
`;

const Author = styled.div`
  width: 100%;
  color: #F7ECE5;
  font-family: Inter;
  font-size: 24px;
  font-style: italic;
  font-weight: 600;
  padding-bottom: 61px;
`;

const ArticleComponent = ({ article }) => {
  return (
    <a 
      href={article.article_link} 
      style={{ textDecoration: 'none' }} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <ArticleContainer>
        <ImageWrapper>
          <ArticleImageBG src={article.image_url} alt="failed to load image" />
        </ImageWrapper>

        <ContentWrapper>
          <Title>{article.article_title}</Title>
          <Author>{article.article_authors}</Author>
        </ContentWrapper>
      </ArticleContainer>
    </a>
  );
};

export default ArticleComponent;
