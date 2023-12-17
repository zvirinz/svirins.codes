// const getAccessToken = async () => {
//   const basic = btoa(
//     `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
//   );
//   const response = await fetch(
//     process.env.NEXT_PUBLIC_SPOTIFY_TOKEN_ENDPOINT!,
//     {
//       method: 'POST',
//       headers: {
//         Authorization: `Basic ${basic}`,
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: new URLSearchParams({
//         grant_type: 'refresh_token',
//         refresh_token: process.env.SPOTIFY_REFRESH_TOKEN
//       })
//     }
//   );
//   return response.json();
// };

const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    })
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const data = await getAccessToken();
  const { access_token } = data;
  return fetch(process.env.NEXT_PUBLIC_SPOTIFY_NOW_PLAYING_ENDPOINT!, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};
