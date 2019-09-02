export const login = (username, password) =>
  fetch(
    `https://loft-taxi.glitch.me/auth?username=${username}&password=${password}`
  ).then(response => response.json());
