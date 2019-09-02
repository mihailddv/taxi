export const route = (fromWhere, toWhere) =>
  fetch(
    `https://loft-taxi.glitch.me/route?address1=${fromWhere}&address2=${toWhere}`
  ).then(response => response.json());

export const addressList = (fromWhere, toWhere) =>
  fetch(`https://loft-taxi.glitch.me/addressList`).then(response =>
    response.json()
  );
