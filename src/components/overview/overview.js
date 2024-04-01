import Contacts from '../contactsList/contacts';
import Favorites from '../favorites/favorites';
import './style.css'

const Overview = () => {
    return(
            <div>
            <Favorites />
            <Contacts />
            </div>
    )
}

export default Overview;