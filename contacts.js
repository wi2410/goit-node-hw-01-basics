const path = require("path");
const fs = require("fs/promises");

const contactsPath = path.join(__dirname, "./db/contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}