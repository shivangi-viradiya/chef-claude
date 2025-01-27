import React from "react";
import avatar from "../Images/user.png";
import starFilled from "../Images/star-filled.png";
import starEmpty from "../Images/star-empty.png";
import "./Practise.css";

const Practise = () => {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  let starIcon = contact.isFavorite ? starFilled : starEmpty;

  const toggleFavorite = () => {
    setContact(preContact => ({
        ...preContact,
        isFavorite: !preContact.isFavorite
    }))
  };

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={false}
            className="favorite-button"
          >
            <img src={starIcon} alt="empty star icon" className="favorite" />
          </button>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
};

export default Practise;
