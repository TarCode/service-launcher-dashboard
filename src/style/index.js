import { cyanA200, purpleA700, white, purple50 } from 'material-ui/styles/colors';

export const style = {
	card: {
		display: 'flex',
		position: 'relative',
		padding: '30px 40px',
		flexDirection: 'row',
		borderRadius: '0px',
		height: '260px',
		alignItems: 'center'
	},
	card_header: {
		display: 'flex',
		position: 'relative',
		padding: '10px 10px 10px',
		flexDirection: 'row',
		borderRadius: '0px',
		alignItems: 'center',
		backgroundColor: purple50
	},
	card_right: {
		width: '40%',
		alignItems: 'center'
	},
	card_left: {
		width: '50%',
		alignItems: 'center',
		textAlign: 'center',
		paddingRight: '20px'
	},
	card_left_img: {
		width: '100%',
		maxHeight: '220px'
	},
	balance_card: {
		textAlign: 'center',
		borderRadius: '0px',
		alignItems: 'center',
		padding: '30px 15px 25px',
		position: 'relative',
	},
	transaction_card: {
		borderRadius: '0px',
	  	alignItems: 'center',
		padding: '30px 40px',
		position: 'relative',

	},
	user_nav_view: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0
	},
	drawer_logo: {
		margin: 'auto',
		display: 'block'
	},
	drawer_link: {
		position: 'absolute',
		left: '60%'
	},
	drawer_link_highlight: (path, route) => ({
		backgroundColor: path === route ? purpleA700 : null,
		color: path === route ? white : null,
	}),
	drawer_link_icon: (path, route) => ({ 
		color: path === route ? white : cyanA200,
		position: 'absolute', 
		left: '40%' 
	}),
	nav_menu_icon: { 
		color: purpleA700, 
		position: 'absolute', 
		left: 20, 
		paddingTop: '5px' 
	},
	settings_card: {
		borderRadius: '0px',
		alignItems: 'center',
		padding: '0 0 30px',
		position: 'relative'
	},
	settings_close: {
		position: 'absolute',
		right: '5%', 
		top: 15
	},
	logout_btn: {
		float: 'right',
		color: 'black',
		zIndex: 104
	}
};
