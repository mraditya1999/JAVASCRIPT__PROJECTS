// const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
const url = 'https://api.github.com/users?per_page=100';

const fetchFollowers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchFollowers;
