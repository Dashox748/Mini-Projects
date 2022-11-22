import React, {useEffect} from 'react';
import Header from "./containers/Header/Header"
import Content from "./containers/Content/Content";
import './App.css';
import axios, {AxiosResponse} from "axios";
import {useState} from "react";
import AdvancedNewsInfo from "./components/AdvancedNewsInfo/AdvancedNewsInfo";


function App() {
    const [advancedInfo,setAdvancedInfo]=useState<boolean>(false)
    const [whichInfo,setWhichInfo]=useState<number>(0)
    const [news, setNews] = useState<any>([
        {
            "author": "The Peninsula Newsper",
            "content": "sieam",
            "description": "Follow all the action with Yahoo Sports as the NFC's top team looks to avoid an upset.",
            "publishedAt": "2022-11-20T20:36:18Z",
            source: {
                "id": "ktostam",
                "name": "Yahoo"
            },
            "title": "World Cup fans captivated by Qatar's culture, cuisine",
            "urlToImage": "http://thepeninsulaqatar.com/get/maximage/20221031_1667193959-479.jpg?1667193959",
        }
    ])

    interface source {
        id: string | null;
        name: string | null;
    }

    interface fetchNews {
        author: string | null;
        content: string;
        description: string;
        publishedAT: string;
        source: source;
        title: string;
        url: string;
        urlToImage: string;
    }


    const fetchData = async (keyword:string,category:string) => {
        axios.get<Array<fetchNews>>(`https://newsapi.org/v2/top-headlines?q=${keyword}&category=${category}${category!==""?"&language=en":""}&sortBy=popularity&apiKey=92cffcd19d2d4ed9968f4758d793bf6f`).then((res: AxiosResponse) => setNews(res.data.articles))
        setAdvancedInfo(false);
    }
    useEffect(()=>{
//        fetchData("","general")
        },[])
    const changeToadvancedInfo =(index:number)=>{
        setWhichInfo(index)
        setAdvancedInfo(true);
    }


    return (

        <div className="App">
            <button onClick={() => fetchData("","general")}>siema</button>
            <Header fetchData={fetchData}/>
            {advancedInfo?<AdvancedNewsInfo news={news[whichInfo]}/>:<Content news={news} changeToadvancedInfo={changeToadvancedInfo}/>}


        </div>
    );
}

export default App;
