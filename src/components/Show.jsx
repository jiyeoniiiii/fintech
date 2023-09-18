import React, { useState } from 'react';
import Optimal from "./Timal";
import './Box.css'
import './input.css'
import './show.css'

import Condition from "./Condition";
import ListItem from "./ListItem";


export default function Show({ input, firstItem, secondItem }) {

    const temp = firstItem.map(data => ({ ...data, ca_interest_rate: data.interest_rate }))
    const nowItem = temp.sort((a, b) => b.interest_rate - a.interest_rate);

    const [item, setItem] = useState(nowItem);

    const handleNewItem = (newItem) => {
        setItem(newItem);
    };

    console.log(item)


    return (
        <div id ="mainbox">
            <h2>우대조건</h2>

            <div>
                {/* 각 조건 컴포넌트를 렌더링 */}
                <Condition name={"재예치"} preData={secondItem} nowdata={item} what={"재예치"} onDataChange={handleNewItem} />
                <Condition name={"비대면가입"} preData={secondItem} nowdata={item} what={"비대면가입"} onDataChange={handleNewItem} />
                <Condition name={"카드샤용"} preData={secondItem} nowdata={item} what={"카드샤용"} onDataChange={handleNewItem} />
                <Condition name={"카드사용"} preData={secondItem} nowdata={item} what={"카드사용"} onDataChange={handleNewItem} />
            </div>

            <div>
                <h2>현재 최선의 선택은?</h2>
                <div class ="optimalbox">
                <Optimal data={item} input={input} />
                </div>
                <hr />

            </div>

            <div>
                <h2>우대 금리가 높은 순서에 따른 나열</h2>

                <ul>
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
                </ul>

                {/* 테이블 헤더 */}
            <div class ="tablebox">
                <table>
                    <thead>
                        <tr>
                            <th className="table-header">은행</th>
                            <th className="table-header">상품명</th>
                            <th className="table-header">기본금리</th>
                            <th className="table-header">우대적용금리</th>
                        </tr>
                    </thead>

                    <tbody>
                        {item.map((i) => (
                            <tr key={i.id}>
                                <td>{i.bank_name}</td>
                                <td>{i.item_name}</td>
                                <td>{i.interest_rate}</td>
                                <td>{i.ca_interest_rate}</td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
       


  

                       


            </div>
        </div>
    );
}