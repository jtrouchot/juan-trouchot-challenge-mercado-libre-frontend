import Header from '../components/Header';
import {search} from '../actions/search';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
	return {
		search: (q) => {
			dispatch(search(q))
		}
	}
}
	
export default connect(null, mapDispatchToProps)(Header)