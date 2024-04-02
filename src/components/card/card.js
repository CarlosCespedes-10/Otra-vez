import { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeContact, toggleFavorites } from "../../redux/contactSlice";
import { UpdateContactApi } from "../../api";

const Card = (props) => {
  const { type, contacts } = props;
  const [isFavorite] = useState(false);
  const dispatch = useDispatch();

  const handleFavorite = async(user) => {
    console.log(user);
    dispatch(toggleFavorites(user.id));  
    await UpdateContactApi({...user, isFavorite: !user.isFavorite})
  };

  const removeUser = async (user) => {
    console.log(user);
    dispatch(removeContact(user.id));
    await UpdateContactApi({...user, isDeleted: true})
  };

  return (
    <div className="row">
      {contacts.map((user, index) => (
        <div className="card" key={index}>
          <img
            className={`avatar ${user.isFavorite ? "favorite" : ""}`}
            src={user.avatar}
            alt="avatar"
          />
          <div className="contact-information">
            <p className="full-name">
              {user.first_name} {user.last_name}
            </p>
            <p className="email">{user.email}</p>
            <hr />

            <button
              className={`button ${user.isFavorite ? "button-favorite" : "button-contact"} button-contact`}
              onClick={() => handleFavorite(user)}
            >
              {user.isFavorite ? "X REMOVE" : <span className="custom-icons"><FontAwesomeIcon icon={faHeart}/></span>}
            </button>

            {!user.isFavorite &&
              <button
                className={`button button-favorite`}
                onClick={() => removeUser(user)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
