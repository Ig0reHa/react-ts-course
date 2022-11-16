import React, {FC} from 'react';
import {I_User} from "../types/types";

interface UserItemProps {
	user: I_User
}

const UserItem: FC<UserItemProps> = ({user}) => {
	return (
		<div style={{padding: 15, border: '1px solid gray'}}>
			{user.id}. {user.name} lives in {user.address.city} - {user.address.street}
		</div>
	);
};

export default UserItem;