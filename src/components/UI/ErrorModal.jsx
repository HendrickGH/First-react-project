import React from 'react';
import Card from './Card';
import Button from './Button';
import styled from 'styled-components';

const StyledModal = styled(Card)`
	position: fixed;
	top: 30vh;
	left: 10%;
	width: 80%;
	z-index: 100;
	overflow: hidden;
	@media (min-width: 768px) {
		left: calc(50% - 20rem);
		width: 40rem;
	}
`;
const StyledHeader = styled.header`
	background: #4f005f;
	padding: 1rem;

	& h2 {
		margin: 0;
		color: white;
	}
`;
const StyledActions = styled.footer`
	padding: 1rem;
	display: flex;
	justify-content: flex-end;
`;
const StyledContent = styled.div`
	padding: 1rem;
`;
const StyledDiv = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.75);
`;

const ErrorModal = props => {
	return (
		<StyledDiv onClick={props.onConfirm}>
			<StyledModal>
				<StyledHeader>
					<h2>{props.title}</h2>
				</StyledHeader>
				<StyledContent>
					<p>{props.message}</p>
				</StyledContent>
				<StyledActions>
					<Button onClick={props.onConfirm}>Okay</Button>
				</StyledActions>
			</StyledModal>
		</StyledDiv>
	);
};

export default ErrorModal;
