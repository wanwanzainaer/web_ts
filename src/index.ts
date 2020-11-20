import { User } from './models/User';

const user = new User({ name: 'Simon', age: 32 });

user.set({ name: 'Tom' });
console.log(user.get('name'));
console.log(user.get('age'));
