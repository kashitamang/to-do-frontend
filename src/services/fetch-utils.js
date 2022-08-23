const BASE_URL = 'https://localhost:7890';

//signup

//maybe curlies
export async function signUpUser(userInfo) {
  const resp = await fetch(`${BASE_URL}/api/v1/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
    credentials: 'include',
  });
  const data = await resp.json();
  if (resp.ok) {
    location.replace('./tasks');
  } else {
    console.error(data.message);
  }
}

//getUser
export async function getUser() {
  const resp = await fetch(`${BASE_URL}/api/v1/users/me`, {
    method: 'GET',
    credentials: 'include',
  });
  return resp.json();
}
//checkUser

//redirectIfloggedin

//logout
