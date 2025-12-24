export function loginFake(role: string) {
  localStorage.setItem("user", JSON.stringify({ role }));
}

export function logout() {
  localStorage.removeItem("user");
}

export function getUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export function isAuthenticated() {
  return !!localStorage.getItem("user");
}
