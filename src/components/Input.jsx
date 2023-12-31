import { useState } from "react";
import "./Input.css"
// 사용자가 기한과 금액을 입력할 수 있는 형식을 만들고 이를 상위 컴포넌트에 전달하도록 생성

export default function Input({ onNumberChange, onSliderChange }) {

    const [number, setNumber] = useState("");
    const [sliderValue, setSliderValue] = useState(0);
    const [valid, setValid] = useState(true)

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

    let message = "100만원에서 10억 사이의 숫자를 입력해주세요"

    if (number > 1000000000) {
        message = "10억보다 작게 설정해주세요";
    } else if (number < 1000000 && number > 0) {
        message = "100만원보다 크게 설정해주세요";

    } else if (number >= 1000000 && number <= 1000000000) {
        message = "";
    }


let numberMessage = null;
if (number < 1) {
    numberMessage = null;
} else if (number < 1000) {
    numberMessage = number + "원";
} else if (number < 10000) {
    if (number % 1000 === 0) {
        numberMessage = parseInt(number / 1000) + "천원";
    } else {
        numberMessage = number + "원";
    }
} else if (number < 100000000) {
    if (number % 10000 === 0) {
        numberMessage = parseInt(number / 10000) + "만원";
    } else {
        numberMessage = parseInt(number / 10000) + "만" + (number % 10000) + "원";
    }
} else if (number < 1000000000) {
    if (number % 100000000 === 0) {
        numberMessage = parseInt(number / 100000000) + "억원";
    } else {
        numberMessage = parseInt(number / 100000000) + "억 " + parseInt(number % 100000000 / 10000) + "만 " + (number % 10000) + "원";
    }
}



    return (
        <>

            <div className='space'>
                <div id="mainbox">

                    <h2>예금비교</h2>
                    <hr />
                    <div>
                        <p className="p1">예치금액</p>
                    </div>
                    <div>
                        <input
                            className="input_number"
                            type="number"
                            placeholder={"금액을 입력하세요"}
                            value={number}
                            onChange={handleNumberChange}
                        /> 원
                    </div>

                    <span style={{ color: number < 1000000000 && number > 1000000 ? "#415eff" : "#555555",
                        
                        }}>{message}</span>
                       <div>{message === "" && (
    <div>{numberMessage}</div>
)}
</div>

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
                        <datalist className="hi" id="markers">
                            <option value="0"> 0 </option>
                            <option value="6"> 6 </option>
                            <option value="12"> 12 </option>
                            <option value="18"> 18 </option>
                        </datalist>
                        <p>{sliderValue} 개월</p>
                    </div>

                </div>
            </div>
        </>
    );
}