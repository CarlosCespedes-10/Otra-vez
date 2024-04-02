import './style.css'
import Card from '../card/card';
import {useSelector} from "react-redux";

const Favorites = () => {
    const { contacts } = useSelector((state) => state.contacts);
    const favorites = contacts.filter(contact => contact.isFavorite && !contact.isDeleted);
    return (
        <div className={'container-general'}>
            <div className={'card-favorites'}>
                <div>
                    <h1 className={'title-favorites'}>Favorites</h1>
                </div>
                <div className='container-green-line'>
                    <div className={'green-line'}></div>
                </div>
            </div>
            <div><Card contacts={favorites} type="favorite"/></div>
        </div>
    )
};
export default Favorites;