import "./style.css";
import Card from "../card/card";
import { useSelector } from "react-redux";

const ContactsList = () => {
  const { contacts } = useSelector((state) => state.contacts);
  const contactsList = contacts.filter( contact => !contact.isDeleted)

  return (
    <div className={"container-general"}>
      <div className={"card-contacts"}>
        <div>
          <h1 className={"title-contacts"}>Contact List</h1>
        </div>
        <div className="container-green-line">
          <div className={"green-line"}></div>
        </div>
      </div>
      <Card contacts={contactsList} type="contact" />
    </div>
  );
};

export default ContactsList;
