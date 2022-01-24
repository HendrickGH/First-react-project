import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import styled from 'styled-components';
const StyledCard = styled(Card)`
	margin: 2rem auto;
	padding: 1rem;
	width: 50%;
	max-width: 40rem;

	& label {
		display: block;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	& input {
		font: inherit;
		display: block;
		width: 100%;
		border: 1px solid #ccc;
		padding: 0.15rem;
		margin-bottom: 0.5rem;
	}

	& input:focus {
		outline: none;
		border-color: #4f005f;
	}
`;
const AddUser = props => {
	const [entered, setEntered] = useState({
		name: '',
		age: '',
		error: { title: '', message: '' },
	});
	const addUserHandler = e => {
		e.preventDefault();
		if (!entered.name.trim() || !entered.age.trim()) {
			return setEntered(prev => ({
				...prev,
				error: {
					title: 'Invalid input',
					message: 'Please enter a valid name and age (non empty values).',
				},
			}));
		}
		if (+entered.age < 1) {
			return setEntered(prev => ({
				...prev,
				error: {
					title: 'Invalid age',
					message: 'Please enter a valid age.',
				},
			}));
		}
		props.onAddUser(entered.name, entered.age);
		setEntered({ name: '', age: '' });
	};

	const usernameChangeHandler = e => {
		setEntered(prev => ({ ...prev, name: e.target.value }));
	};

	const ageChangeHandler = e => {
		setEntered(prev => ({ ...prev, age: e.target.value }));
	};
	const errorHandler = () => {
		setEntered(prev => ({ ...prev, error: { title: '', message: '' } }));
	};
	return (
		<>
			{(entered.error?.title || entered.error?.message) && (
				<ErrorModal
					title={entered.error.title}
					message={entered.error.message}
					onConfirm={errorHandler}
				/>
			)}
			<StyledCard>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						id='username'
						value={entered.name}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor='age'>Age</label>
					<input
						type='number'
						id='age'
						value={entered.age}
						onChange={ageChangeHandler}
					/>
					<Button type='submit'>Add user</Button>
				</form>
			</StyledCard>
		</>
	);
};

export default AddUser;
