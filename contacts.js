const path = require("path");
const fs = require("fs/promises");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function readContacts() {
  const contactsRaw = await fs.readFile(contactsPath,"utf-8");
  const contacts = JSON.parse(contactsRaw);
  return contacts;
}

async function writeContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

async function listContacts() {
  const contacts = await readContacts();
  return contacts;
}

async function getContactById(id) {
  const contacts = await readContacts();
  const contactById = contacts.filter((contact) => contact.id == id);
  return contactById;
}

async function removeContact(id) {
  const contacts = await readContacts();
  const updatedDb = contacts.filter((contact) => contact.id != id);
  await writeContacts(updatedDb);
}

async function addContact(name, email, phone) {
  const id = nanoid();
  const contact = { id, name, email, phone };

  const contacts = await readContacts();
  contacts.push(contact);

  await writeContacts(contacts);
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}