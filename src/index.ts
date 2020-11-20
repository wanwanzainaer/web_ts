import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'Simon New', age: 1000 });

user.save();
