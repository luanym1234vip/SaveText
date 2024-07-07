import React from "react";
import "./Home.scss"
const Home = () => {
    return (
        <div className="body">
            <h2>Save Text/File</h2>
            <div className="first-container">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Mã kho của bạn là:</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <button type="button" class="btn btn-secondary btn-vaokho">Vào kho</button>
            </div>

            <button type="button" class="btn btn-secondary btn-create">Tạo kho mới</button>

        </div>

    )
}
export default Home