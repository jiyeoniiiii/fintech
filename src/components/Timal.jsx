// 사용자가 입력한 금액과 상품의 최대한도,금리를 고려하여 최적의 상품을 나열

import './Timal.css'

export default function Optimal({ data, input }) {
    console.log(data)
    return (
        <div>

            <ul class="custom-list">
                <li class="list-item">
                    <span class="label">은행이름:</span> 
                    <span class="value">[은행 이름]</span>
                </li>
                <li class="list-item">
                    <span class="label">기한:</span> 
                    <span class="value">[기한]</span>
                </li>
                <li class="list-item">
                    <span class="label">기본금리:</span> 
                    <span class="value">[기본금리]</span>
                </li>
                <li class="list-item">
                    <span class="label">우대금리:</span> 
                    <span class="value">[우대금리]</span>
                </li>
                <li class="list-item">
                    <span class="label">넣어야되는 금액:</span> 
                    <span class="value">[넣어야되는 금액]</span>
                </li>
            </ul>

            

            
            <ul>
                {data.map((item) => {
                    if (input > 0) {
                        input -= item.moneyLoe;
                        if (input > 0) {
                            return (
                                <li key={item.id}>
                                    은행이름: {item.bank_name}, 기한: {item.depositPeriod} 기본금리:{item.interest_rate}, 우대금리: {item.ca_interest_rate}, 넣어야되는 금액: {item.moneyLoe}
                                </li>
                            );
                        } else {
                            return (
                                <li key={item.id}>
                                    은행이름: {item.bank_name}, 기한: {item.depositPeriod} 기본금리:{item.interest_rate}, 우대금리: {item.ca_interest_rate}, 넣어야되는 금액: {input + item.moneyLoe}
                                </li>
                            )

                        }


                    } else {
                        return null;
                    }

                })}
            </ul>
        </div>
    )
}