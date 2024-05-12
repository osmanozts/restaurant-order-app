export function signOut() {
  const isLoggedIn = window.localStorage.getItem("accessToken");

  if (!isLoggedIn) return new Error("User is not logged in!");

  window.localStorage.removeItem("accessToken");
}
