'use client';
import React from 'react'
import { styled } from "styled-components";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import Modal from '../modal/page';


const Divleft = styled.div `
position: absolute;
float: left;
width: 20%;
height: 100%;
left: 0px;
background-color: #494C4F;

`

const Logo = styled.h1 `
position: relative;
width: 7px;
height: 7px;
top: 1px;
left: 10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 23.6626px;;;
color: white;
white-space: nowrap;
svg{
    position: relative;
    top: 7px;
    padding-right: 15px;
}
`
const Principal = styled.p `
position: relative;
width: 66px;
height: 48px;
left: 10px;
top: 35px;
font-family: 'Roboto';
font-style: normal;
font-weight: 100;
font-size: 16.7974px;
line-height: 48px;
display: flex;
align-items: center;
color: #FFFFFF;
`
const Frame = styled.div`
display: flex;
padding: 12px 25px;
gap: 26px;
position: relative;
width: 254px;
height: 30px;
left: 0px;
bottom: 25px;
background: #FFFFFF;
`
const Dash = styled.p`
position: relative;
width: 91px;
height: 24px;
left: 70px;
bottom: 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 18.6638px;
line-height: 24px;
color: white;
`
const Dashsvg = styled.svg`
position: relative;
width: 23px;
height: 23px;
left: 30px;
top: 25px;

`

const Profil = styled.div`
position: relative;
width: 53.33px;
height: 53.33px;
left: 21.33px;
top: calc(50% - 53.33px/2 + 0.74px);
`
const Name = styled.p`
position: relative;
color: white;
padding: left;
bottom: 60px;
white-space: nowrap;
left: 60px;
`
const Svj = styled.svg`
position: relative;
left : 60px;
bottom: 70px;
height: 15px;
width: 15px;
`
const Online = styled.p`
position: relative;
width: 59px;
height: 26px;
left: 80px;
font-family: 'Roboto';
font-style: normal;
font-weight: 100px;
font-size: 15.7974px;
line-height: 25px;
color: rgba(255, 255, 255, 0.87);
bottom: 110px;
opacity: 0.4;
`
const Header = styled.div`
position: absolute;
height: 75px;
left: 364px;
right: 0px;
top: 0px;
background: #FFFFFF;
box-shadow: 0px 2.66626px 2.66626px rgba(0, 0, 0, 0.03), 0px 1.33313px 0px rgba(0, 0, 0, 0.03);
`
const Searchinput = styled.input`
position: relative;
width: 279.96px;
height: 33.99px;
right: 214.12px;
top: 22.06px;
left: 700px;
background: #FFFFFF;
border: 3.33313px solid rgba(120, 130, 140, 0.13);
border-radius: 666.565px;
padding-left: 50px;
`
const Svg = styled.svg`
position: relative;
width: 20px;
height: 20px;
left: 720.9px;
bottom: 133px;
`

const Text = styled.p`
position: relative;
width: 130px;
height: 75px;
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 26.6626px;
line-height: 75px;
display: flex;
align-items: center;
color: rgba(0, 0, 0, 0.87);
bottom: 65px;
white-space: nowrap
`
const Cloche = styled.svg`
position: relative;
width: 20.4px;
height: 20px;
font-family: 'Material Icons';
font-style: normal;
font-weight: 400;
font-size: 23.9963px;
line-height: 24px;
color: rgba(0, 0, 0, 0.87);
left: 1000.9px;
bottom: 158px;
`
const List = styled.svg`
position: relative;
width: 10.84px;
height: 10.17px;
background: #FCC100;
border-radius: 4.26601px;
left: 1015.9px;
bottom: 189px;
`
const Image2 = styled.img`
position: relative;
left: 1040.9px;
bottom: 205px;
`

const Svg2 = styled.svg`
position: relative;
left: 1100.9px;
bottom: 235px;
`
const Main = styled.div`
position: absolute;
height: 105px;
left: 364px;
right: 0px;
top: 75px;
background: #FFFFFF;
box-shadow: 0px 2.66626px 2.66626px rgba(0, 0, 0, 0.03), 0px 1.33313px 0px rgba(0, 0, 0, 0.03);
`

const H4 = styled.h4`
position: relative;
width: 383px;
height: 36px;
right: 1.62px;
bottom: 15px;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 31.9951px;
line-height: 35px;
color: rgba(0, 0, 0, 0.87);
white-space: nowrap;
`

const Body = styled.body`
background: rgba(240, 240, 240, 1);
height: 100%;
width: 100%;
`
const Listhot = styled.p`
position: relative;
width: 221px;
height: 24px;
right: 5px;
bottom: 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 18.6638px;
line-height: 24px;
color: #4C5053;
`
const Frame2 = styled.div`
box-sizing: border-box;
padding: 17px 23px;
gap: 10px;
position: relative;
width: 295px;
height: 58px;
border: 1px solid #AEAEAE;
border-radius: 14px;
bottom: 100px;
left: 830px;
`
const At = styled.a`
position: relative;
width: 215px;
height: 22px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #000000;
left: 20px;
bottom: 5px;
text-decoration: none;
cursor: pointer;
`
const Header2 = styled.h1`
position: relative;
width: 280px;
height: 35px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 21.7415px;
line-height: 34px;
text-transform: uppercase;
color: #555555;
white-space: nowrap;
top: 30px;
left: 30px;

`
const Divhead = styled.div`
box-sizing: border-box;
position: absolute;
height: 121.76px;
left: 41.03px;
right: 40.92px;
top: 0px;
border-bottom: 2.64685px dashed #DDDDDD;
`
const Format = styled.div`
position: absolute;
width: 422.17px;
height: 91.73px;
left: 51px;
top: 147px;
`
const Label = styled.p`
position: relative;
width: 119px;
height: 28px;
right: 11px;
bottom: 30px;
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 18.528px;
line-height: 28px;
color: #555555;
white-space: nowrap;
`
const Input = styled.input`
box-sizing: border-box;
position: relative;
height: 52.94px;
right: 11px;
bottom: 40.79px;
border: 1.32343px solid #DDDDDD;
border-radius: 14px;
width: 80%;
`
const Format1 = styled.div`
position: absolute;
width: 422.17px;
height: 91.73px;
left: 51px;
top: 350px;
`
const Format2 = styled.div`
position: absolute;
width: 422.17px;
height: 91.73px;
left: 51px;
top: 250px;
`
const Format3 = styled.div`
position: absolute;
width: 422.17px;
height: 91.73px;
left: 410px;
top: 147px;
`
const Format4 = styled.div`
position: absolute;
width: 422.17px;
height: 91.73px;
left: 410px;
top: 250px;
`
const Format5 = styled.div`
position: absolute;
width: 422.17px;
height: 91.73px;
left: 410px;
top: 350px;
`
const Format6 = styled.div`
position: absolute;
width: 875.17px;
height: 91.73px;
left: 51px;
top: 450px;
`
const Input2 = styled.input`
box-sizing: border-box;
position: relative;
height: 200.94px;
right: 11px;
bottom: 110.79px;
border: 1.32343px solid #DDDDDD;
border-radius: 14px;
width: 80%;
`
const Enbutton = styled.button`
position: relative;
height: 40.67px;
top: 680.59px;
color: rgba(240, 240, 240, 1);
background-color: #45484B;
border-radius: 10.33333px;
font-weight: 700px;
font-size: 17px;
width: 20%;
margin: auto;
left: 530px;
cursor: pointer;
`;
const Select = styled.select`
box-sizing: border-box;
position: relative;
height: 52.94px;
right: 11px;
bottom: 40.79px;
border: 1.32343px solid #DDDDDD;
border-radius: 14px;
width: 80%;
cursor: pointer;
padding-right: 50px;
font-size: 15px;
`
const Svg3 = styled.svg`
position: relative;
width: 155px;
height: 87.8px;
right: 450px ;
top: 20px; 
`
const Pi = styled.p`
position: relative;
right: 100px ;
top: 20px; 
width: 155px;
height: 27px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 17.0587px;
line-height: 27px;
color: #BDBDBD;
`
const Card = styled.div`
position: relative;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 90%;
left: 350px;
bottom: 120px;
margin-right: 0px;
`
const Container = styled.div`
padding: 2px 10px;
`
const Adresse = styled.p`
position: relative;
height: 16px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 15px;
color: #8D4B38;
`
const Card1 = styled.div`
position: relative;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 90%;
left: 640px;
bottom: 445px;
margin-right: 0px;

`
const Card6 = styled.div`
position: relative;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 90%;
left: 640px;
bottom: 1145px;
margin-right: 0px;

`
const Card2 = styled.div`
position: relative;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 90%;
left: 930px;
bottom: 770px;
margin-right: 0px;
`
const Card3 = styled.div`
position: relative;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 90%;
left: 1220px;
bottom: 1095px;
margin-right: 0px;
`
const H1 = styled.h1`
font-size: 20px;
`
const Card5 = styled.div`
position: relative;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 90%;
left: 350px;
bottom: 1000px;
margin-right: 0px;
`
const Card7 = styled.div`
position: relative;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 90%;
left: 1220px;
bottom: 1285px;
margin-right: 0px;
`
const Card8 = styled.div`
position: relative;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 90%;
left: 930px;
bottom: 1420px;
margin-right: 0px;
`

export default function Page() {
    const [showModal, setShowModal] = useState(false);
  return (
    <Body>
        <Divleft>
          <Logo><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.66602 2.66624H29.3286V29.3288L2.66602 2.66624Z" fill="white" />
              <path d="M2.66602 2.66624H22.663L15.9973 15.9975L2.66602 2.66624Z" fill="black" fillOpacity="0.15" />
              <path d="M2.66602 2.66624H15.9973L2.66602 29.3288V2.66624Z" fill="white" />
          </svg>   RED PRODUCT</Logo>
          <Principal>Principal</Principal>
          <Dashsvg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_6698_2)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1335 0C13.6887 0 13.2622 0.176692 12.9477 0.491206C12.6331 0.80572 12.4565 1.23229 12.4565 1.67708V5.98958C12.4565 6.91533 13.2078 7.66667 14.1335 7.66667H21.321C21.7658 7.66667 22.1924 7.48997 22.5069 7.17546C22.8214 6.86095 22.9981 6.43437 22.9981 5.98958V1.67708C22.9981 1.23229 22.8214 0.80572 22.5069 0.491206C22.1924 0.176692 21.7658 0 21.321 0L14.1335 0ZM14.1335 9.58333C13.6887 9.58333 13.2622 9.76003 12.9477 10.0745C12.6331 10.3891 12.4565 10.8156 12.4565 11.2604V21.3229C12.4565 22.2496 13.2078 23 14.1335 23H21.321C21.7658 23 22.1924 22.8233 22.5069 22.5088C22.8214 22.1943 22.9981 21.7677 22.9981 21.3229V11.2604C22.9981 10.8156 22.8214 10.3891 22.5069 10.0745C22.1924 9.76003 21.7658 9.58333 21.321 9.58333H14.1335ZM0.00195312 1.67708C0.00195312 0.751333 0.752328 0 1.67904 0H8.86654C9.79229 0 10.5436 0.751333 10.5436 1.67708V11.7396C10.5436 12.1844 10.3669 12.6109 10.0524 12.9255C9.7379 13.24 9.31133 13.4167 8.86654 13.4167H1.67904C1.23425 13.4167 0.807674 13.24 0.493159 12.9255C0.178645 12.6109 0.00195313 12.1844 0.00195312 11.7396V1.67708ZM1.67904 15.3333C1.23425 15.3333 0.807674 15.51 0.493159 15.8245C0.178645 16.1391 0.00195313 16.5656 0.00195312 17.0104V21.3229C0.00195312 22.2487 0.752328 23 1.67904 23H8.86654C9.31133 23 9.7379 22.8233 10.0524 22.5088C10.3669 22.1943 10.5436 21.7677 10.5436 21.3229V17.0104C10.5436 16.5656 10.3669 16.1391 10.0524 15.8245C9.7379 15.51 9.31133 15.3333 8.86654 15.3333H1.67904Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_6698_2">
            <rect width="23" height="23" fill="white"/>
            </clipPath>
            </defs>
            </Dashsvg>
            <Link href="/dashboard"><Dash>Dashboard</Dash></Link>
          <Frame>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_397)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.74976 0.249979C2.0872 0.251563 1.45224 0.515464 0.983739 0.983962C0.515241 1.45246 0.25134 2.08742 0.249756 2.74998V13.95C0.249756 15.326 1.37376 16.45 2.74976 16.45H9.20476C8.72212 15.9104 8.40598 15.2427 8.29449 14.5274C8.183 13.8121 8.28094 13.0799 8.57646 12.419C8.87199 11.7582 9.35248 11.197 9.95994 10.8032C10.5674 10.4094 11.2758 10.1999 11.9998 10.1999C12.7237 10.1999 13.4321 10.4094 14.0396 10.8032C14.647 11.197 15.1275 11.7582 15.423 12.419C15.7186 13.0799 15.8165 13.8121 15.705 14.5274C15.5935 15.2427 15.2774 15.9104 14.7948 16.45H21.2498C22.6258 16.45 23.7498 15.326 23.7498 13.95V2.74998C23.7498 1.37398 22.6258 0.249979 21.2498 0.249979H2.74976ZM3.99976 3.37498C3.834 3.37498 3.67502 3.44083 3.55781 3.55804C3.4406 3.67525 3.37476 3.83422 3.37476 3.99998C3.37476 4.16574 3.4406 4.32471 3.55781 4.44192C3.67502 4.55913 3.834 4.62498 3.99976 4.62498H11.9998C12.1655 4.62498 12.3245 4.55913 12.4417 4.44192C12.5589 4.32471 12.6248 4.16574 12.6248 3.99998C12.6248 3.83422 12.5589 3.67525 12.4417 3.55804C12.3245 3.44083 12.1655 3.37498 11.9998 3.37498H3.99976ZM18.3748 3.99998C18.3748 3.65498 18.6548 3.37498 18.9998 3.37498H20.4998C20.6655 3.37498 20.8245 3.44083 20.9417 3.55804C21.0589 3.67525 21.1248 3.83422 21.1248 3.99998C21.1248 4.16574 21.0589 4.32471 20.9417 4.44192C20.8245 4.55913 20.6655 4.62498 20.4998 4.62498H18.9998C18.834 4.62498 18.675 4.55913 18.5578 4.44192C18.4406 4.32471 18.3748 4.16574 18.3748 3.99998ZM18.9998 6.37498C18.834 6.37498 18.675 6.44083 18.5578 6.55804C18.4406 6.67525 18.3748 6.83422 18.3748 6.99998C18.3748 7.16574 18.4406 7.32471 18.5578 7.44192C18.675 7.55913 18.834 7.62498 18.9998 7.62498H20.4998C20.6655 7.62498 20.8245 7.55913 20.9417 7.44192C21.0589 7.32471 21.1248 7.16574 21.1248 6.99998C21.1248 6.83422 21.0589 6.67525 20.9417 6.55804C20.8245 6.44083 20.6655 6.37498 20.4998 6.37498H18.9998ZM9.49976 13.95C9.49988 13.4993 9.62185 13.057 9.85274 12.6699C10.0836 12.2829 10.4149 11.9654 10.8114 11.7512C11.2079 11.537 11.655 11.4339 12.1052 11.4529C12.5555 11.4719 12.9923 11.6123 13.3694 11.8592C13.7464 12.1061 14.0497 12.4504 14.2471 12.8555C14.4446 13.2607 14.5288 13.7117 14.4909 14.1608C14.453 14.6099 14.2945 15.0404 14.032 15.4067C13.7695 15.7731 13.4128 16.0617 12.9998 16.242V19.55H10.9998V16.242C10.5538 16.0474 10.1744 15.7268 9.90791 15.3197C9.64147 14.9126 9.49962 14.4365 9.49976 13.95ZM7.49976 20.8C6.59976 20.8 5.89976 21.4 5.59976 22.2L5.21976 23.342C5.19473 23.4171 5.18791 23.4971 5.19985 23.5754C5.21179 23.6537 5.24216 23.728 5.28844 23.7922C5.33472 23.8565 5.3956 23.9088 5.46607 23.9449C5.53653 23.9811 5.61457 23.9999 5.69376 24H18.3058C18.385 24.0001 18.4632 23.9813 18.5338 23.9453C18.6044 23.9092 18.6654 23.8569 18.7118 23.7926C18.7582 23.7284 18.7886 23.654 18.8006 23.5756C18.8126 23.4973 18.8058 23.4172 18.7808 23.342L18.3998 22.2C18.1998 21.4 17.3998 20.8 16.4998 20.8H7.49976Z" fill="#4C5053"/>
            </g>
            <defs>
            <clipPath id="clip0_0_397">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            <Listhot>Liste des hôtels </Listhot>

          </Frame>
        
          <Profil><Image src="/assets/profile.png" alt="Girl in a jacket" width="50" height="50" />
              <Name>Mouhamed Badiane</Name>
              <Svj width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.6" clipPath="url(#clip0_3_226)">
                      <path d="M14.4174 4.53226C14.4174 4.53226 14.5783 4.808 14.9002 5.35948C15.222 5.91096 15.3829 6.83972 15.3829 8.14577C15.3829 9.45182 15.0611 10.6563 14.4174 11.7593C13.7738 12.8622 12.9005 13.7355 11.7975 14.3792C10.6946 15.0228 9.49005 15.3447 8.184 15.3447C6.87795 15.3447 5.67345 15.0228 4.5705 14.3792C3.46754 13.7355 2.59424 12.8622 1.95058 11.7593C1.30693 10.6563 0.985107 9.45182 0.985107 8.14577C0.985107 6.83972 1.30693 5.63522 1.95058 4.53226C2.59424 3.4293 3.46754 2.556 4.5705 1.91235C5.67345 1.2687 6.87795 0.946873 8.184 0.946873C9.49005 0.946873 10.6946 1.2687 11.7975 1.91235C12.9005 2.556 13.7738 3.4293 14.4174 4.53226Z" fill="#00FF92" />
                  </g>
                  <defs>
                      <clipPath id="clip0_3_226">
                          <rect width="14.3978" height="17.3307" fill="white" transform="matrix(1 0 0 -1 0.985107 17.668)" />
                      </clipPath>
                  </defs>
              </Svj>
              <Online>en ligne</Online>
          </Profil>
          <Header>
              <Searchinput type="search" placeholder="Recherche"></Searchinput>
              <Text>Listes des hôtels</Text>
              <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.897 19C16.3153 19 19.897 15.4183 19.897 11C19.897 6.58172 16.3153 3 11.897 3C7.47869 3 3.89697 6.58172 3.89697 11C3.89697 15.4183 7.47869 19 11.897 19Z" stroke="#CCCDCE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21.8969 21L17.5469 16.65" stroke="#CCCDCE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </Svg>
              <Cloche width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6016 15.3462V9.34708C12.6016 8.06603 12.2422 7.00369 11.5236 6.16007C10.805 5.2852 9.83635 4.84777 8.61779 4.84777C7.39923 4.84777 6.43063 5.2852 5.71199 6.16007C4.99335 7.00369 4.63403 8.06603 4.63403 9.34708V15.3462H12.6016ZM14.6169 14.3151L16.6322 16.3304V17.3146H0.603393V16.3304L2.61871 14.3151V9.34708C2.61871 7.78482 3.00927 6.42565 3.79041 5.26958C4.60278 4.11351 5.71199 3.36362 7.11802 3.01993V2.31691C7.11802 1.91072 7.25862 1.56702 7.53983 1.28582C7.82104 0.973366 8.18036 0.817139 8.61779 0.817139C9.05522 0.817139 9.41454 0.973366 9.69575 1.28582C9.97696 1.56702 10.1176 1.91072 10.1176 2.31691V3.01993C11.5236 3.36362 12.6172 4.11351 13.3983 5.26958C14.2107 6.42565 14.6169 7.78482 14.6169 9.34708V14.3151ZM10.0238 19.7517C9.61764 20.1267 9.14896 20.3142 8.61779 20.3142C8.08662 20.3142 7.61794 20.1267 7.21176 19.7517C6.80557 19.3456 6.60247 18.8769 6.60247 18.3457H10.6331C10.6331 18.8769 10.43 19.3456 10.0238 19.7517Z" fill="black" fill-opacity="0.87" />
              </Cloche>
              <List></List>
              <Image2 src="/assets/profile.png" alt="Girl in a jacket" width="30" height="30" />
              <Svg2 width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 17L21 12L16 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21 12H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </Svg2>
          </Header>
          <Main>
              <H4>Hôtels   8</H4>
              <Frame2>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 12H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <At onClick={() => setShowModal(true)}>Créer un nouveau hôtel </At>
                <Modal show={showModal} onClose={() => setShowModal(false)}>
                <Divhead>
                <Header2>Créer un nouveau hôtel  </Header2>
                </Divhead>
                <Format>
                <Label>Nom de l'hôtel </Label>
                <Input></Input>
                </Format>
                <Format1>
                <Label>Prix par nuit </Label>
                <Input></Input>
                </Format1>
                <Format2>
                <Label>E-mail </Label>
                <Input></Input>
                </Format2>
                <Format3>
                <Label>Adresse </Label>
                <Input></Input>
                </Format3>
                <Format4>
                <Label>Numéro de téléphone  </Label>
                <Input></Input>
                </Format4>
                <Format5>
                <Label>Devise  </Label>
                <Select>
                <option value="volvo">F XOF</option>
                <option value="saab">Euro</option>
                <option value="fiat">Dollar</option>
                </Select>
                </Format5>
                <Format6>
                <Label >Ajouter une photo </Label>
                <Input2 type="file" accept="image/png, image/jpeg" placeholder="Ajouter une photo"></Input2>
                <Svg3 width="62" height="61" viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_116_20)">
                <path d="M55.7773 53.3739H6.21594C3.05759 53.3739 0.497314 50.8136 0.497314 47.6552V13.3435C0.497314 10.1852 3.05759 7.62488 6.21594 7.62488H55.7773C58.9357 7.62488 61.496 10.1852 61.496 13.3435V47.6552C61.496 50.8136 58.9357 53.3739 55.7773 53.3739ZM13.8408 14.2966C10.1561 14.2966 7.16904 17.2836 7.16904 20.9683C7.16904 24.653 10.1561 27.6401 13.8408 27.6401C17.5255 27.6401 20.5125 24.653 20.5125 20.9683C20.5125 17.2836 17.5255 14.2966 13.8408 14.2966ZM8.12215 45.749H53.8711V32.4056L43.4448 21.9792C42.8865 21.4209 41.9813 21.4209 41.4229 21.9792L25.278 38.1242L18.6641 31.5103C18.1058 30.952 17.2006 30.952 16.6422 31.5103L8.12215 40.0304V45.749Z" fill="#BDBDBD"/>
                </g>
                <defs>
                <clipPath id="clip0_116_20">
                <rect x="0.497559" width="60.9987" height="60.9987" rx="14" fill="white"/>
                </clipPath>
                </defs>
                </Svg3>
                <Pi>Ajouter une photo</Pi>

                </Format6>
                <Enbutton type="button">Enregistrer</Enbutton>
                </Modal>

              </Frame2>
          </Main>
          <Card>
        <Image src="/assets/image.png" alt="Avatar" width="270" height="200" />
        <Container>
            <Adresse>Boulevard Martin Luther King Dakar, 11500</Adresse>
            <H1>Hôtel Terrou-Bi</H1>
            <p>25.000 XOF par nuit</p>
        </Container>
        </Card>
        <Card1>
        <Image src="/assets/image1.png" alt="Avatar" width="270" height="200" />
        <Container>
            <Adresse>Rte des Almadies, Dakar</Adresse>
            <H1>King Fahd Palace</H1>
            <p>20.000 XOF par nuit</p>
        </Container>
        </Card1>
        <Card2>
        <Image src="/assets/image2.png" alt="Avatar" width="270" height="200" />
        <Container>
            <Adresse>Rte de la Corniche O, Dakar 16868</Adresse>
            <H1>Radisson Blu Hotel</H1>
            <p>22.000 XOF par nuit</p>
        </Container>
        </Card2>
        <Card3>
        <Image src="/assets/image3.png" alt="Avatar" width="270" height="200" />
        <Container>
            <Adresse>Place de l&apos;Independance, 10 Rue PL 29, Dakar</Adresse>
            <H1>Pullman Dakar Teranga</H1>
            <p>30.000 XOF par nuit</p>
        </Container>
        </Card3>
        <Card5>
        <Image src="" alt="Avatar" width="270" height="200" />
        <Container>
            <Adresse>Place de l&apos;Independance, 10 Rue PL 29, Dakar</Adresse>
            <H1>Pullman Dakar Teranga</H1>
            <p>30.000 XOF par nuit</p>
        </Container>
        </Card5>
        <Card6>
        <Image src="" alt="Avatar" width="270" height="200" />
        <Container>
            <Adresse>Place de l&apos;Independance, 10 Rue PL 29, Dakar</Adresse>
            <H1>Pullman Dakar Teranga</H1>
            <p>30.000 XOF par nuit</p>
        </Container>
        </Card6>
        <Card7>
        <Image src="" alt="Avatar" width="270" height="200" />
        <Container>
            <Adresse>Place de l&apos;Independance, 10 Rue PL 29, Dakar</Adresse>
            <H1>Pullman Dakar Teranga</H1>
            <p>30.000 XOF par nuit</p>
        </Container>
        </Card7>
        <Card8>
        <Image src="" alt="Avatar" width="270" height="200" />
        <Container>
            <Adresse>Place de l&apos;Independance, 10 Rue PL 29, Dakar</Adresse>
            <H1>Pullman Dakar Teranga</H1>
            <p>30.000 XOF par nuit</p>
        </Container>
        </Card8>
        </Divleft>
        
        </Body>
  )
}
