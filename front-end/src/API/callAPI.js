export const USER_LOGIN = 101;
export const USER_LOGOUT = 102;
export const USER_SIGNUP = 103;
export const INSERT_RECEIPT = 201;
export const DONE_RECEIPT = 202;
export const GET_ALL_PRODUCTS = 301;
export const GET_RECEIPTS_BY_CID = 302;
export const GET_5_PRODUCTS_BY_NAME = 303;
export const SEARCH_PRODUCTS_BY_NAME = 304;
export const ADD_NEW_PRODUCT = 305;
export const ADD_NEW_PRODUCT_LINE = 306;
export const GET_ALL_PRODUCT_LINE = 307;

async function APIrequest(action, data) {
    let sendData = new FormData();
    sendData.append("action", action);
    let jsonString = JSON.stringify(data);
    sendData.append("data", jsonString);

    let result = await fetch(
        "http://localhost:2203/learning/store-phone/back-end/api/API.php",
        {
            method: "post",
            body: sendData,
        }
    ).then((response) => {
        // console.log(response.text());
        return response.json();
    });

    return result;
}

export default APIrequest;

//Example : callAPI({data object}).then(obj => document.getElementById("...").innerText = obj.data)
//Hàm callAPI sẽ gửi data object lên server sau đó trả về kết quả (đã xử lí json) dưới dạng object
