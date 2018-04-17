import React, {Component} from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
import Loader from './components/loader'
import Nav from './containers/nav'
import Home from './containers/home'
import Wallet from './containers/wallet/'
import Perks from './containers/perks'
import Rewards from './containers/rewards'
import Landing from './containers/landing'
import SetPassword from './containers/set_password'
import ResetPassword from './containers/reset_password'
import Count from './containers/count'
import RewardRequests from './containers/reward_requests'
import { style } from './style/index'
import { callApi, makeMuiTheme } from './utils'

import { configureStore } from './store'
import { 
	purpleA700, blue800, grey600, white,
	redA700, yellow800, orange600, cyan100
} from 'material-ui/styles/colors';

const muiTheme1 = makeMuiTheme(purpleA700, grey600, blue800, white);

const muiTheme2 = makeMuiTheme(redA700, yellow800, orange600, cyan100);

const muiTheme = localStorage.getItem('theme') === 'muiTheme2' ? muiTheme2 : muiTheme1;

const bgImage = localStorage.getItem('bg') === 'grey_triangles' ? "url('/img/bg-01.svg')" : "url('/img/bg-02.svg')";


const store = configureStore()
// Protect routes after login works
export default class extends Component {

	componentDidMount() {
		const token = localStorage.getItem('token')

		if (token) {
			const route = process.env.REACT_APP_REHIVE_API_URL + '/user/'
			callApi('GET', route, token)
				.then(json => {
					if (json.status !== 'success') {
						this.logoutInvalidToken()
					}
				})
				.catch(err => {
					this.logoutInvalidToken()
				})
		}
	}

	logoutInvalidToken = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('user')
		window.location = '/'
	}

render() {
		const token = localStorage.getItem('token')

		const user_data = JSON.parse(localStorage.getItem('user'))
		const isAdmin = user_data && user_data.groups.filter(i => i.name === 'admin').length > 0;

		const nav_routes = ['/', '/wallet', '/rewards', '/perks']

		if (isAdmin) {
			nav_routes.push('/reward_requests')
		}



		return (
			<Provider store={store}>
				{
					muiTheme && typeof muiTheme === 'object' ?
					<MuiThemeProvider muiTheme={muiTheme}>
					<Router>
						<div style={style.bodyBg(bgImage)}>
							{
								token ?
									<div className='main'>
										{
											nav_routes.map((route, index) => (
												<Route key={index} exact path={route} component={Nav} />
											))
										}
										<Route exact path='/' component={Home} />
										<Route exact path='/wallet' component={Wallet} />
										<Route exact path='/rewards' component={Rewards} />
										<Route exact path='/perks' component={Perks} />
										{
											isAdmin ?
												<Route exact path='/reward_requests' component={RewardRequests} /> :
												null
										}
									</div> :
									<div className='main-land'>
										<Route exact path='/' component={Landing} />
										<Route exact path='/setpassword' component={SetPassword} />
									</div>
							}
							<div className='main-land'>
								<Route exact path='/resetpassword' component={ResetPassword} />
								<Route exact path='/count' component={Count} />
							</div>
						</div>
					</Router>
				</MuiThemeProvider> :
				<Loader/>
				}
			</Provider>
		)
	}
}