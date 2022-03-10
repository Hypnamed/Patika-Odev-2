import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends }) {
  if (!isLoggedIn) {
    return <div>
      <h1>Lütfen giriş yapınız.</h1>
    </div>;
  }

  return (
    <div>
      <h1 className="hosgeldin">
        {isLoggedIn
          ? `Hoşgeldin ${name} ${surname} (${age})`
          : "Bu siteye giriş yapmadan erişemezsiniz."}
      </h1>
      <h2 className="friendlist">Arkadaşların</h2>
      {friends.map((friend) =>
          <div key={friend.id}>
            <h3 className="friends">{friend.name} ({friend.age})</h3>
            </div>
      ) }
    </div>
  );
}

// User.propTypes = {
//   name: PropTypes.string.isRequired,
//   surname: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired,
//   friends: PropTypes.array(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       age: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

export default User;
