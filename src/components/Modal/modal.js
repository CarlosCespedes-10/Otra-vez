import { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import ReactModal from "react-modal";
import { addContact } from "../../redux/contactSlice";
import { addContactsApi } from "../../api";

const ModalView = ({ modalIsOpen, closeModal }) => {
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [email, setEmail] = useState();
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const addUser = async (e) => {
    e.preventDefault();
    console.log(first_name, last_name, email, isFavorite)
    const user = {first_name, last_name, email, isFavorite, isDeleted : false}
    dispatch(addContact(user))
    await addContactsApi(user)
    closeModal()
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      overlayClassName={false}
      contentLabel="Example Modal"
      className="modal-content"
    >
      <form onSubmit={addUser} className="modal-container">
        <input
          name="firstname"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          className="input-container"
          placeholder="First name"
        />
        <input
          name="lastname"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          className="input-container"
          placeholder="Last name"
        />
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-container"
          placeholder="Email"
          type="email"
        />
        <label className="label-form" for="check">Enable like favorite:{" "}</label>
        <input name="isFavorite" onChange={(e) => setFirstName(e.target.value)}className="cheked" type="checkbox"id="check"/>
        <button className="styled-button" type="submit">Save</button>
      </form>
    </ReactModal>
  );
};

export default ModalView;
