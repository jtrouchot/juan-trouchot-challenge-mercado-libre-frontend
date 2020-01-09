import List from '../components/List';
import { connect } from 'react-redux';
import {getItemsList, getCategories, getAuthor} from '../stateapi/list';

function mapStateProps(state) {
  // toma los datos del reducer y se los pasa al componente
  return {
	list: getItemsList(state),
	categories: getCategories(state),
	author: getAuthor(state)
  }
}

export default connect(mapStateProps)(List)