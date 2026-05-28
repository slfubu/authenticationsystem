const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwqjVfXhsYTam3mVPjEaxZTr_0kC1LG1yazYhr90tKibmDA0aNhLhtKwXLRv6GA1XA/exec";
async function callApi(actionName, payloadData = {}) {
    try {
        const requestBody = { 
            action: actionName, 
            ...payloadData 
        };

        const response = await fetch(WEB_APP_URL, {
            method: 'POST',
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        console.error("API Connection Error:", error);
        throw new Error("ระบบขัดข้อง ไม่สามารถเชื่อมต่อฐานข้อมูลได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง");
    }
}
