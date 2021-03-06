import React from 'react';
import './ModalChangePassword.scss';
import { changePassword } from '../actions/actions';
import { useDispatch } from 'react-redux';

function ModalChangePassword(props) {
	const dispatch = useDispatch();
	const twoFunc = (event) => {
		event.preventDefault();
		if (
			event.target.elements.new_password.value ===
			event.target.elements.new_password_again.value
		) {
			const newUserData = {
				old_password: event.target.elements.old_password.value,
				new_password: event.target.elements.new_password.value,
			};
			console.log(newUserData);
			dispatch(changePassword(newUserData));
			props.Success();
		}
	};

	return (
		<div
			className={`attention-container-changePassword ${
				props.changeModal ? 'open' : 'close'
			} style={{...props.style}}`}
		>
			<div className="changePassword">
				<div onClick={() => props.ChangePassword()}>
					<img src="/images/x.png" alt="x" className="x" />
				</div>
				<div className="white-text">Change password</div>
				<form onSubmit={(event) => twoFunc(event)} className="form">
					<input
						placeholder="Старый пароль"
						alt="Старый пароль"
						className="input"
						name="old_password"
					/>
					<input
						placeholder="Новый пароль"
						alt="Новый пароль"
						className="input"
						name="new_password"
					/>
					<input
						placeholder="Еще раз новый пароль"
						alt="Еще раз новый пароль"
						className="input"
						name="new_password_again"
					/>
					<button type="submit" className="btn-change">
						Change my password
					</button>
				</form>
			</div>
		</div>
	);
}

export default ModalChangePassword;
