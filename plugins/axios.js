export default ({ store, $axios, redirect, app: { $cookies } }) => {
  $axios.setToken(store.state.accessToken, 'Bearer')

  $axios.onError((error) => {
    if (error.response.status === 401) {
      store.dispatch('logout', true)
      redirect('/login')
    }
  })
}
