// models/userModel.js

class User {
    constructor(id, firstname, lastname, email, phone) {
        this.id = id
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.phone = phone
    }
}

module.exports = User