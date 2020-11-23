import { User } from './models/User';

const user = new User({ id: 1, name: 'gogo', age: 1 });

console.log(user.get('name'));

user.on('save', () => {
  console.log(user);
});

user.save();
