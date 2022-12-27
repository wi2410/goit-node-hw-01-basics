const argv = require("yargs").argv;
const {listContacts, getContactById, removeContact, addContact} = require("./contacts")

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // await listContacts();
      console.table(await listContacts());
      break;

    case "get":
      const getContact = await getContactById(id);
      if (getContact) {
      console.log(`Contact by id: ${id} found`);
      console.table(getContact);
      } else {console.log(`Contact by id: ${id} not found`);}
      
      
      break;

    case "add":
      await addContact(name, email, phone);
      console.log("Add contact");
      break;

    case "remove":
      await removeContact(id);
      console.log("Remove contact");
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);