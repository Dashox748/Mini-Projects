import "./advancedNewsInfo.css"
import {useLocation} from 'react-router-dom';

function AdvancedNewsInfo() {
    const location = useLocation();

    return (
        <div className="advancedInfo__container">
            <div className="advancedInfo__container-top">
                <div className="advancedInfo__container-top-author-date">
                    <span>{location.state.source.name}</span> <span className="dot"/><span>21 July 2022</span>
                </div>
                <span className="advancedInfo__container-top-title">{location.state.title}</span>
                <span>{location.state.author}</span>
            </div>
            <div>
                <img className="imaz" src={location.state.urlToImage} alt="thumbnail"/>
            </div>
            <div className="advancedInfo__container-content">
                {location.state.content}
            </div>
        </div>
    )


}

export default AdvancedNewsInfo