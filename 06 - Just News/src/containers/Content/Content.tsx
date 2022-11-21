import noImage from "../../images/no-image.png"
import "./content.css"

interface Props {
    news: any;
}

function Content({news}: Props) {


    console.log(news)
    return (
        <div className="content__container">

            <div className="content__container-news">
                {news.map((data: any, index: number) => (
                    <div className={`news__container ${index === 0 ? "heading" : ""}${index === 1 ? "heading2" : ""}`} key={index}>
                        <div className="news-thumbnail">
                            <img
                                src={data.urlToImage===null?noImage:data.urlToImage}/>
                        </div>
                        <div className="news-info">
                            <div className="news__container-author-date">
                                <span>{data.source.name}</span> <span className="dot"/><span>21 July 2022</span>
                            </div>
                            <div className="news__container-title">
                                <span>{data.title}</span>
                            </div>
                            <div className="news-container-description">
                                <span>{data.description}</span>
                            </div>
                            <div className="news-conainer-author">
                                <span>{data.author}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Content