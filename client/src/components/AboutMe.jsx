import axios from "axios";
import './style.css';

const AboutMe = ({user, favorites, shoes, getHeaders, setFavorites}) => {
    const removeFav = async (favId) => {
        try {
            await axios.delete(`/api/favorites/${favId}/user/${user.id}`, getHeaders())
            setFavorites(favorites.filter((fav) => fav.id !== favId))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="about-container">
            <h3>User Info</h3>
            <hr />
            <h4>User ID: <span>{user.id}</span></h4>
            <h4>Username: <span>{user.username}</span></h4>

            <h4>Favorite Shoes</h4>
            <ul className="favorites-list">
                {favorites.length ? (
                    favorites.map((fav) => {
                        const favShoe = shoes.find((shoe) => fav.product_id === shoe.id)
                        return (
                            <li key={fav.id} className="favorite-item">
                                <span>{favShoe?.name || 'Unknown Shoe'}</span>
                                <button className="remove-btn" onClick={() => removeFav(fav.id)}>
                                    Remove
                                </button>
                            </li>
                        )
                    })
                ) : (
                    <p>Your closet’s looking empty—no favorite kicks yet!</p>
                )}
            </ul>
        </div>
    )
}

export default AboutMe
