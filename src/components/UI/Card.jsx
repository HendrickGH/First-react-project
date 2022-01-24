import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
	background: #fff;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
`;

const Card = props => (
	<CardDiv className={props.className}>{props.children} </CardDiv>
);

export default Card;
