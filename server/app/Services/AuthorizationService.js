/* const { resource } = require("@adonisjs/framework/src/Route/Manager"); */

/* const { resource } = require("@adonisjs/framework/src/Route/Manager"); */

const InvalidAccessException = use('App/Exceptions/InvalidAccessException');
const ResourceNotExistExeption = use('App/Exceptions/ResourceNotExistException');

class AuthorizationService {
    verifyPermission(source, user) {
        if (!source) {
            throw new ResourceNotExistExeption();
        }
        if (source.user_id !== user.id) {
            console.log('invalid access');
            throw new InvalidAccessException();

        }

    }
}

module.exports = new AuthorizationService();