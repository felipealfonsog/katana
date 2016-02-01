import si from 'seamless-immutable'

const initialState = si({
  username: '',
  password: '',
  token: '',
  loggedIn: false
})

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
