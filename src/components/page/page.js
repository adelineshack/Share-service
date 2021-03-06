import React, { useState } from 'react';
import './page.scss';
import './button.scss';
import './Menu/Menu.scss';
import Menu from './Menu/Menu';
import ProfileColumn from './ProfileColumn';
import './ProfileColumnMore.scss';
import Modal from './attention-container';
import ModalDeleteAccount from './ModalDelete/modal-delete';
import ModalChangePassword from './ModalChangePassword/modal-change-password';
import SuccessModal from './SuccessModal/SuccessModal';
import Notifications from './Notifications/Notifications';

function Page() {
	const [handleModal, setHandleModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [changeModal, setChangeModal] = useState(false);
	const [successModal, setSuccessModal] = useState(false);
	const [notesModal, setNotesModal] = useState(false);
	const [profileColumn, setProfileColumn] = useState(false);

	const Change = () => {
		return setHandleModal(!handleModal);
	};
	const Delete = () => {
		return setDeleteModal(!deleteModal);
	};
	const ChangePassword = () => {
		return setChangeModal(!changeModal);
	};
	const Success = () => {
		return setSuccessModal(!successModal);
	};
	const Notes = () => {
		return setNotesModal(!notesModal);
	};
	const Profile = () => {
		return setProfileColumn(!profileColumn);
	};

	return (
		<div className="container-max">
			<div className="back-1"></div>
			<div className="back-2"></div>
			<Menu />
			<div className="tools">
				<img
					src="/images/bell.png"
					alt="bell"
					className="bell"
					onClick={() => Notes()}
				/>
				<img
					src="/images/person.png"
					alt="person"
					className="person"
					onClick={() => Profile()}
				/>
			</div>
			<ProfileColumn
				profileColumn={profileColumn}
				Change={() => Change()}
				Delete={() => Delete()}
				ChangePassword={() => ChangePassword()}
				Success={() => Success()}
				Notes={() => Notes()}
			/>
			<Modal showModal={handleModal} Change={() => Change()} />
			<ModalDeleteAccount
				deleteModal={deleteModal}
				Delete={() => Delete()}
			/>
			<ModalChangePassword
				changeModal={changeModal}
				ChangePassword={() => ChangePassword()}
				successModal={successModal}
				Success={() => Success()}
			/>
			<SuccessModal
				successModal={successModal}
				Success={() => Success()}
			/>
			<Notifications notesModal={notesModal} />
		</div>
	);
}

export default Page;
