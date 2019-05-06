let initialState = {
  registeredUsers: [
    {id: 0, login: "Ivan@gmail.com", password: 'adf34x', loggedIn: false},
    {id: 1, login: "Ira@gmail.com", password: 'adf34x', loggedIn: true},
    {id: 2, login: "380989100909", password: 'adf34x', loggedIn: false}
  ]
}

const loginReduser = (state = initialState, action) => {

  return state
}

export default loginReduser