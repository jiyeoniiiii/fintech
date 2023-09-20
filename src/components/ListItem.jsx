import React, { useState } from "react";
import './Show.css'

export default function ListItem({ id, bank_name, item_name, interest_rate, method, who, ca_interest_rate, link }) {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        if (toggle === true) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }
    return (
        <>
        <div className="tr">

            <div className="dd" onClick={handleToggle} key={id}>
                <span className="ss">{bank_name}</span>
                <span className="ss">{item_name}</span>
                <span className="ss">{interest_rate}%</span>
                <span className="ss">{ca_interest_rate}%</span>
            </div>

            {toggle &&
                <div>


                    <div className="show">
                        <div>기간,최대한도, 가입방법,가입대상, 우대조건</div>
                        <div>가입 방법 : {method}</div>
                        <div>가입 대상 : {who}</div>
                        <br/>
                        <div className="link2">
                            {link !== null && (
                                <div>
                                    <a href={link} target="_blank">자세히 보기</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            }

        </div>



        </>

    )
}