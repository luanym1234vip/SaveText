import React from "react";
import "./Empty.scss";
import rocket from "../assets/image/rocket.png"
import astronomy from "../assets/image/astronomy.png"
const Empty = () => {
    return (
        <main>
            <div>
                <div>
                    <span>
                        Rất tiếc&nbsp;</span>
                    <span>Kho này&nbsp;không&nbsp;tồn tại</span>
                </div>
                <svg viewBox='0 0 200 600'>
                    <polygon points='118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514 200 591.044514 200 8'></polygon>
                </svg>
            </div>
            <svg className='crack' viewBox='0 0 200 600'>
                <polyline points='118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514'></polyline>
            </svg>
            <div>
                <svg viewBox='0 0 200 600'>
                    <polygon points='118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514 0 591.044514 0 8'></polygon>
                </svg>
                <div>
                    <span>Nhập kho khác&nbsp;đi&nbsp;nhé!

                    </span>

                    <span style={{ marginTop: '1rem' }}>
                        <a href="/">
                            <b>Quay&nbsp;về</b>
                            <img height={40} width={40} style={{ marginLeft: '2rem' }} src={astronomy} />

                        </a>
                    </span>
                </div>
            </div>

        </main >

    )
}
export default Empty