// 引入redux-immutable，让原始reducer中的对象就是immutable对象
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer} from '../common/header/store'

const reducer = combineReducers({
  header: headerReducer
})

export default reducer