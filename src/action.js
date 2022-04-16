export const setUser=(user) => {
    return {type: 'SET_USER',playload:user}
}
export const setDeals=(deals) => {
  return {type: 'SET_DEALS',playload:deals}
}
export const setBrands=(brands) => {
  return{type: 'SET_BRANDS',playload:brands}
}
export const setHotels=(hotels) => {
  return{type: 'SET_HOTELS',playload:hotels}
}
export async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

export const url="http://165.232.178.79:4000"