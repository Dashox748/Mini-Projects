import "./advancedNewsInfo.css"
interface Props {
    news: any;
}

function AdvancedNewsInfo({news}: Props){
    return(
            <div className="advancedInfo__container">
                <div className="advancedInfo__container-top">
                    <div className="advancedInfo__container-top-author-date">
                                <span>{news.source.name}</span> <span className="dot"/><span>21 July 2022</span>
                    </div>
                    <span className="advancedInfo__container-top-title">{news.title}</span>
                    <span>{news.author}</span>
                </div>
                <div>
                    <img className="imaz" src={news.urlToImage}/>
                </div>
                <div className="advancedInfo__container-content">
                    {news.content}
                </div>
            </div>
    )


}
export default AdvancedNewsInfo