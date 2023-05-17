'use strict'
const User = use('App/Models/User');

class UserController {

    async login({ request, auth }) {
        const { email, password } = request.all();
        const token = await auth.attempt(email, password);
        return token;

    }


    async register({ request}) {
      const { email, password } = request.all();
       await User.create({
        email,
        password,
        username: email,
      });
      return this.login(...arguments);
    }
  }

module.exports = UserController

/* AQUI COMPRUEBO QUE EL USER NO ESTE CREADO YA :D

class UserController {
    async register({ request, response }) {
      const { email, password } = request.all();

      const existingUser = await User.findBy('email', email);
      if (existingUser) {
        return response.status(400).json({ message: 'Email already in use' });
      }

      const user = await User.create({
        email,
        password,
        username: email,
      });

      return user;
    }
  } */


/* class UserController {
    register({ request }) {
        const { email, password } = request.all();
        console.log(email,password)
        return {
            message: 'hello world',
        };
    }
} */