import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: white;
    max-width: 800px;
    margin-top: 10rem;

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        text-align: right;
        color: #667;
        margin-top: 2rem;
        font-weight: bold;
    }
`;

export const Frase = ({ frase }) => {

    if (Object.keys(frase).length === 0) return null;

    return (
            <ContenedorFrase>
                <h1>" { frase.quote } "</h1>
                <p>- { frase.author }</p>
              </ContenedorFrase>
    )
};

