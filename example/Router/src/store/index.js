import {
  Observer
} from '../../../../lib'

import home from './home'

const initialState = Object.assign({},
  home
)

const store = Observer(initialState)

const homeAction = {
  changeHomeTitle(value) {
    store.title = value
  }
}

export {
  homeAction
}

export default store
