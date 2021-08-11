import axios from "axios";

axios.defaults.baseURL = "http://localhost:7777";

export class ContactsAPI {
  static async fetchContacts() {
    const { data } = await axios.get("/contacts");

    return data;
  }

  static async addContact(contact) {
    await axios.post("/contacts", contact);
  }

  static async deleteContact(id) {
    await axios.delete(`/contacts/${id}`);
  }
}
