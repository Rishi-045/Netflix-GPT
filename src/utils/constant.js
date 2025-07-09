const accessToken = import.meta.env.VITE_ACCESS_TOKEN_TMDB

export const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${accessToken} `
  }
};
