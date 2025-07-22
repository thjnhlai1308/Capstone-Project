import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const Closet = ({ user, getHeaders }) => {
  const [shoes, setShoes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const { data } = await axios.get('/api/shoes', getHeaders());
        // Optional: filter by user if shoes have a user_id field
        const myShoes = data.filter(shoe => shoe.user_id === user.id);
        setShoes(myShoes);
      } catch (err) {
        console.error(err);
        setError('Failed to load shoes');
      }
    };

    if (user.id) {
      fetchShoes();
    }
  }, [user]);

  if (!user.id) {
    return <h2 className="closet-container">Please log in to view your closet.</h2>;
  }

  return (
    <div className="closet-container">
      <h2>{user.username}'s Closet</h2>
      {error && <p className="error-message">{error}</p>}
      {shoes.length === 0 ? (
        <p>Your closet is empty.</p>
      ) : (
        <div className="shoe-grid">
          {shoes.map((shoe) => (
            <div key={shoe.id} className="shoe-card">
              <img src={shoe.image_url} alt={shoe.name} />
              <h3>{shoe.name}</h3>
              <p>{shoe.brand} - {shoe.colorway}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Closet;
