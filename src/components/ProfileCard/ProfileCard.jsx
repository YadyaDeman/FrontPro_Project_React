import "./styles.css";

function ProfileCard() {
  const userData = {
    avatar:
      "https://static.wikia.nocookie.net/garfield/images/0/07/Garfield_Movie.png/revision/latest/scale-to-width/360?cb=20160503191957",
    userName: "Garfield",
    profession: "Cat",
    hobby: "Sleep",
  };

  return (
    <div className="profile-card-wrapper">
      <img src={userData.avatar} />
      <h1>{userData.userName}</h1>
      <p className="property-name">Profession: {userData.profession}</p>
      <p className="property-name">Hobby: {userData.hobby}</p>
    </div>
  );
}

export default ProfileCard;
