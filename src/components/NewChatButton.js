import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = (theme) => ({
	newChatButton: {
		position: 'absolute',
		left: 'auto',
		right: theme.spacing.unit * 3,
		bottom: theme.spacing.unit * 3 + 48
	}
});

const NewChatButton = ({ classes }) => (
	<Fab color="secondary" aria-label="Add" className={classes.newChatButton}>
		<AddIcon />
	</Fab>
);

export default withStyles(styles)(NewChatButton);
