import React from "react"
import { Accordion, Card, Button } from "react-bootstrap"

const Directions = ({setQuery}) => {

    // Generate a random word to search for "demo mode"
    const generateSearchTerm = () => { 
        setQuery(getRandomWord())
    }

    return (
   
        <Accordion className="directions" defaultActiveKey="0">
            <Card bg='dark' text='white'>
                <Accordion.Toggle as={Card.Header} className = "directions-title" eventKey="0">
                    <h5>Demo Mode:</h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="directions-body">
                        <ul>
                            <li>Click "Generate Search Term" below to populate the search box with a random Japanese term, then click "Search" to look up the word.</li>
                            <li>Select desired dictionary set with the dropdown menu to the left of the search box.</li>
                            <li>Change the interface language with the dropdown menu in the upper right corner.</li>
                        </ul>
                        <Button variant="outline-light" onClick={generateSearchTerm}>Generate Search Term</Button>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )


}

// 50 random words to look up in "demo mode"
const getRandomWord = () => { 
    const words = [
        "こんにちは",
        "こんばんは",
        "時間",
        "日本",
        "アメリカ",
        "写真",
        "時計",
        "時々",
        "仕事",
        "会社",
        "月曜日",
        "火曜日",
        "水曜日",
        "木曜日",
        "金曜日",
        "土曜日",
        "日曜日",
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
        "月",
        "日",
        "彗星",
        "水星",
        "地球",
        "火星",
        "木星",
        "土星",
        "コーヒ",
        "りんご",
        "植物",
        "花火",
        "夜",
        "昼",
        "歩く",
        "新幹線",
        "飛行機",
        "電車",
        "寿司",
        "魚",
        "言う"]

    const idx = Math.floor(Math.random() * words.length)
    return words[idx]
}

export default Directions