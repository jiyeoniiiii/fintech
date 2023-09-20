import React, { useState } from 'react';
import Optimal from "./Timal";
import './Box.css'
import Condition from "./Condition";
import ListItem from "./ListItem";
import './Show.css'

export default function Show({ input, firstItem, secondItem }) {

    const temp = firstItem.map(data => ({ ...data, ca_interest_rate: data.interest_rate }))
    const nowItem = temp.sort((a, b) => b.interest_rate - a.interest_rate);

    const [item, setItem] = useState(nowItem);

    const handleNewItem = (newItem) => {
        setItem(newItem);
    };

    console.log(item)


    return (
        <div className='pad' id="mainbox">
            <hr />
            <h2>우대조건</h2>
            <div>
                {/* 각 조건 컴포넌트를 렌더링 */}
                <Condition name={"첫거래"} preData={secondItem} nowdata={item} what={"첫거래"} onDataChange={handleNewItem} />
                <Condition name={"은행앱사용"} preData={secondItem} nowdata={item} what={"은행앱사용"} onDataChange={handleNewItem} />
                <Condition name={"재예치"} preData={secondItem} nowdata={item} what={"재예치"} onDataChange={handleNewItem} />
                <Condition name={"급여연동"} preData={secondItem} nowdata={item} what={"급여연동"} onDataChange={handleNewItem} />
                <Condition name={"카드사용"} preData={secondItem} nowdata={item} what={"카드사용"} onDataChange={handleNewItem} />
                <Condition name={"공과금연동"} preData={secondItem} nowdata={item} what={"공과금연동"} onDataChange={handleNewItem} />
                <Condition name={"연금"} preData={secondItem} nowdata={item} what={"연금"} onDataChange={handleNewItem} />
                <Condition name={"비대면가입"} preData={secondItem} nowdata={item} what={"비대면가입"} onDataChange={handleNewItem} />
                <Condition name={"입출금통장"} preData={secondItem} nowdata={item} what={"입출금통장"} onDataChange={handleNewItem} />

            </div>
            <div>
            <hr />
                <h2>현재 최적의 상품은?</h2>
                <div className="optimalbox">
                    <Optimal data={item} input={input} />

                </div>

            </div>
            <hr />
            <h2>우대 금리가 높은 순서에 따른 나열</h2>


            <div className="tablebox">
                <div className="th">
                    <div className="dd">
                        <span className="head">은행명</span>
                        <span className="head">상품명</span>
                        <span className="head">기본금리</span>
                        <span className="head">우대금리</span>
                    </div>
                </div>

                {item.slice(0, 5).map((i) => (
                    <ListItem
                        id={i.id}
                        bank_name={i.bank_name}
                        item_name={i.item_name}
                        interest_rate={i.interest_rate}
                        ca_interest_rate={i.ca_interest_rate}
                        who={i.who}
                        method={i.method}
                        link={i.link} />
                ))}


            </div>
            

            <ul>
            </ul>
        </div>

    );
}