'use client'

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #8A8A8A;`;

const Logo = styled.div`
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5rem;
    letter-spacing: 1px;`;

const InputContainer = styled.div`
    display: flex;`;

const Input = styled.input`
    font-family: 'Anton', sans-serif;
    background-color: transparent;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-bottom: 1px solid #FFFFFF;
    border-right: none;
    border-top: none;
    border-left: none;
    outline: none;`;
    
const ImageContainer = styled.div`
    position: relative;
    width: 30px;
    height: 30px;`;

const LinkWrapper = styled.ul`
    font-family: 'Anton', sans-serif;
    font-size: 0.8rem;
    letter-spacing: 2px;
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavLink = styled.li`
    text-decoration: none;
    list-style: none;
    &:hover {
        cursor: pointer;
    }
`;

const Navbar = () => {
    return (
        <Wrapper id='navbar'>
            <Logo>
                CINEMAGIC
            </Logo>
            <InputContainer>
                <Input type="text"/>
                <ImageContainer>
                    <Image src="/search-icon.png" objectFit='cover' fill={true} alt='search icon'/>
                </ImageContainer>
            </InputContainer>
            <LinkWrapper>
                <NavLink>Films</NavLink>
                <NavLink>Series</NavLink>
                <NavLink>Connexion</NavLink>
            </LinkWrapper>
        </Wrapper>
    );
};

export default Navbar;