import React from 'react';
import { withStyles } from '@material-ui/core';
import Sidebar from './Sidebar';
import ChatHeader from './ChatHeader';
import Chat from './Chat';

import { chats, messages } from '../mock-data';

const styles = (theme) => ({
	root: {
		position: 'relative',
		display: 'flex',
		width: '100%',
		height: '100%',
		backgroundColor: theme.palette.background.default
	}
});

const ChatPage = ({ classes }) => (
	<div className={classes.root}>
		<ChatHeader />
		<Sidebar chats={chats} />
		<Chat messages={messages} />
	</div>
);

export default withStyles(styles)(ChatPage);
