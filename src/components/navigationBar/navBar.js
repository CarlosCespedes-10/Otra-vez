import "./style.css";
import { Link, Outlet } from "react-router-dom";
import logoNav from "./img/logoNav.png";
import ModalView from "../Modal/modal";
import { useEffect, useState } from "react";
import { getContactApi } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "../../redux/contactSlice";

const NavBar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);
  
  useEffect(() => {
    (async () => {
      const values = await getContactApi();
      dispatch(setContacts(values));
    })();
  }, [])
  return (
    <div className={"page-content"}>
      <header className={"header"}>
        <div className={"header-views"}>
          <img className="logoNav" src={logoNav} alt="logoNavBar"></img>
          <div className={"right-header"}>
            <Link to="/overview">
              {" "}
              <button className={"overview"}>Overview</button>
            </Link>
            <Link to="/contacts">
              {" "}
              <button className={"contacts"}>Contacts</button>
            </Link>
            <Link to="/favorites">
              {" "}
              <button className={"favorites"}>Favorites</button>
            </Link>
            <button
              onClick={setIsOpen}
              closeModal={() => setIsOpen(true)}
              className={"new"}
            >
              + NEW
            </button>
          </div>
        </div>
      </header>
      <ModalView
        modalIsOpen={modalIsOpen}
        closeModal={() => setIsOpen(false)}
      />
      <div style={{ padding: "32px" }}>
        {contacts.length < 1 ? <h1>Cargando informacion... </h1> : <Outlet />}
      </div>
    </div>
  );
};

export default NavBar;
