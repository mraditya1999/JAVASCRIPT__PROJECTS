const url = 'https://randomuser.me/api/';

const fetchUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  //   destructure
  const person = data.results[0];
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const { age } = person.dob; // OR   const {dob: { age }} = person;
  const { number, name } = person.location.street; // OR const {street:{number,name}} = person.location;

  return {
    phone,
    email,
    image,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default fetchUser;
