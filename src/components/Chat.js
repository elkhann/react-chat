import React from 'react';
import ChatMessageList from './ChatMessageList';
import MessageInput from './MessageInput';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
	chatLayout: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '64px',
		height: '100%',
		overflow: 'hidden'
	}
});

const Chat = ({ classes, messages }) => (
	<main className={classes.chatLayout}>
		<ChatMessageList messages={messages} />
		<MessageInput />
	</main>
);

export default withStyles(styles)(Chat);
