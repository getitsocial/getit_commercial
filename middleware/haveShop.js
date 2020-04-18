export default function ({ store, redirect, app: { $axios, $cookies } }) {
  if (!store.state.accessToken) {
    return redirect('/')
  }
  if (store.state.user?.shop) {
    return redirect('/')
  }
}
