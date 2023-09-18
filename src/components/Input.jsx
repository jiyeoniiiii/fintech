// input.jsx

import React, { useState } from "react";
import './input.css'

// 사용자가 기한과 금액을 입력할 수 있는 형식을 만들고 이를 상위 컴포넌트에 전달하도록 생성
export default function Input({ onNumberChange, onSliderChange }) {
    const [number, setNumber] = useState("");
    const [sliderValue, setSliderValue] = useState(0);

    const handleNumberChange = (event) => {
        const newNumber = parseFloat(event.target.value);
        setNumber(newNumber);
        onNumberChange(newNumber);
    };

    const handleSliderChange = (event) => {
        const newValue = event.target.value;
        setSliderValue(newValue);
        onSliderChange(newValue);
    };

    return (
        <div class='space'>
            <div id ="mainbox">
            <h2>예금비교</h2>
            <hr />
            <div>
                <p className="p1">예치금액</p>
            </div>
            <input
                className="input_number"
                type="number"
                value={number}
                onChange={handleNumberChange}
                placeholder="금액을 입력하세요"
            /> 원
       
            <div>
                <p className="p1">예치기한(개월)</p>
                <input
                    className="input_range"
                    type="range"
                    min="0"
                    max="18"
                    step="6"
                    list="markers"
                    value={sliderValue}
                    onChange={handleSliderChange}
                />
                <datalist id="markers">
                    <option value="0">0</option>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                </datalist>
                <p>{sliderValue} 개월</p>
            </div>
        </div>
        </div>
    );
}