import React from 'react';
import Banner from '../components/Banner';
import styled from 'styled-components';
import NavigationSec from '../components/Navagation';
import Credits from '../components/Credits';
import '@fontsource/paytone-one';

const PageWrapper = styled.div`
    background: #3C5D64;
    width: 100%;
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
`;

const Title = styled.div`
    width: 922px;
    height: 95px;
    flex-shrink: 0;

    border: 6px solid #F7ECE5;
    color: #F7ECE5;
    
    margin-top: 106px;
    
    text-align: center;
    font-family: "Paytone One";
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 5.6px;
`;

const LetterFromEditorWrapper = styled.div`
    width: 85%;
    height: auto;
    flex-shrink: 0;
    border: 5px solid #F7ECE5;

    margin-top: 26px;
    margin-left: 112px;
    margin-right: 112px;

    display: flex;
    flex-direction: column; 
    align-items: center;    
    text-align: center;   
`;


const LetterFromEdititor = styled.div`
    padding-top:50px;
    padding-bottom: 31px;

    width: 85%;
    height: auto;
    flex-shrink: 0;
    color: #F7ECE5;

    text-align: center;
    font-family: Inter;
    font-size: 23px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; 
    letter-spacing: 0.46px;
`;

const SportsEditorLayout = styled.div`
    display: flex;
    flex-direction: row; 
    gap: 290px; 
`
const SportsEditorWrapper = styled.div`
    width: 142px;
    height: auto;
    display: flex;

    padding: 10px;
    padding-bottom:50px;
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #F7ECE5
`

const NameStyling = styled.div`
    color: #F7ECE5;
    font-family: Sacramento;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const Subtitle = styled.div`
    color: #F7ECE5;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const Home = () => {
    return (
        <PageWrapper> 
        <Banner />

        <Title> LETTER FROM THE EDITORS </Title>
        
        <LetterFromEditorWrapper>
            <LetterFromEdititor>
                <p>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A mollis amet vitae sed purus, semper ullamcorper augue vitae. Hac pretium urna, tempus sit quam suspendisse maecenas et. Egestas neque sollicitudin rhoncus vitae at ipsum pulvinar faucibus. Facilisi risus blandit egestas in dignissim et sapien faucibus. Tortor accumsan 
                libero sed aliquam dui magna vitae, habitant egestas. Consectetur egestas tellus auctor interdum id gravida quis pellentesque. 

                </p>
                
                <p>
                At amet nulla tellus orci gravida. Egestas aenean mauris in velit. Fermentum consectetur augue et 
                habitant commodo, libero odio. Id nascetur vel eu fermentum elementum ac cras enim. Dui habitant commodo consequat sit in molestie in id. Ipsum volutpat etiam tristique fringilla. Tellus eu quis mauris massa tristique tortor,
                egestas luctus lacus. Gravida facilisis sagittis eget facilisi molestie amet, ut pellentesque morbi.ssa facilisis non enim arcu.

                </p>
            

                <p>
                Euis mod cursus neque, feugiat vestibulum ornare. Feugiat feugiat tincidunt purus mauris quis lectus neque, molestie. Sed auctor sit fusce tristiqu
                e. Nisl eu nullam gravida massa morbi purus. Ullamcorper eget sed venenatis enim, elit. In cursus pellentesque lacus ornare a. 
                </p>    

            </LetterFromEdititor>

                <SportsEditorLayout>
                    <SportsEditorWrapper>
                        <NameStyling>First Last</NameStyling>
                        <Subtitle>Sports Editor</Subtitle>
                    </SportsEditorWrapper>

                    <SportsEditorWrapper>
                        <NameStyling>First Last</NameStyling>
                        <Subtitle>Sports Editor</Subtitle>
                    </SportsEditorWrapper>

                </SportsEditorLayout>

        </LetterFromEditorWrapper>

        <NavigationSec 
        first={true}            
        next="All Basketball"         // Text to display after "Next: "
        link="/all"        // The route to navigate to
        />

        <Credits></Credits>





        </PageWrapper>
    );
};

export default Home;
