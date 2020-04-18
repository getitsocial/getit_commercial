export default function ({ store, redirect, app: { $axios, $cookies } }) {
  // If the user is not authenticated
  if (!store.state.accessToken) {
    return redirect('/login')
  }
  // If the user have no shop
  if (!store.state.user?.shop) {
    return redirect('/onboarding')
  }
}
