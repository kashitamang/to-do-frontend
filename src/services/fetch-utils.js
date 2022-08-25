const BASE_URL = 'http://localhost:7890';

//signup
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
    console.error(data.message); //eslint-disable-line
  }
}

// getUser
export async function getUser() {
  const resp = await fetch(`${BASE_URL}/api/v1/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  if (resp.ok) {
    const user = await resp.json();
    return user;
  }
}

export async function signInUser(userInfo) {
  const res = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
    credentials: 'include',
  });

  const data = await res.json();
  if (res.ok) {
    location.replace('./tasks');
  } else {
    console.error(data.message); //eslint-disable-line
  }
}

export async function logout() {
  const resp = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (resp.ok) {
    location.replace('../');
  }
}
export async function createNewTask(content) {
  const resp = await fetch(`${BASE_URL}/api/v1/tasks`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ content }),
  });
  const data = await resp.json();
  if (resp.ok) {
    return data;
  } else {
    throw new Error(data.message);
  }
}

export async function getTasks() {
  const resp = await fetch(`${BASE_URL}/api/v1/tasks`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const data = await resp.json();
  if (resp.ok) {
    return data;
  } else {
    throw new Error(data.message);
  }
}
