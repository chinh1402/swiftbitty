
import moment from 'moment';
import querystring from 'qs';
import crypto from 'crypto';
function sortObject(obj) {
	let sorted = {};
	let str = [];
	let key;
	for (key in obj){
		if (obj.hasOwnProperty(key)) {
		str.push(encodeURIComponent(key));
		}
	}
	str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
}
export default async function handler(amount, orderInfo, returnUrl) {
    // Fetch static data from /public
    const resConfig = await fetch('../../JsonData/TransacConfig.json');
    const configData = await resConfig.json();

    const tmnCode = configData.vnp_TmnCode;
    const secretKey = configData.vnp_HashSecret;
    let vnpUrl = configData.vnp_Url;
    const date = new Date();
    const createDate = moment(date).format('YYYYMMDDHHmmss');
    const orderId = moment(date).format('HHmmss');

    // Get client side ip using api.ipify 
    const resIP = await fetch("https://api.ipify.org/?format=json");
    const ipAddrParsedJSON = await resIP.json();
    const ipAddr = ipAddrParsedJSON.ip;

    const bankCode = "";

    const orderType = 'other';
    let locale = '';
    if (locale === null || locale === '') {
        locale = 'vn';
    }
    const currCode = 'VND';
    let vnp_Params = {};
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    vnp_Params['vnp_Locale'] = locale;
    vnp_Params['vnp_CurrCode'] = currCode;
    vnp_Params['vnp_TxnRef'] = orderId;
    vnp_Params['vnp_OrderInfo'] = orderInfo;
    vnp_Params['vnp_OrderType'] = orderType;
    vnp_Params['vnp_Amount'] = amount * 100 * 23000;
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;
    if (bankCode !== null && bankCode !== '') {
        vnp_Params['vnp_BankCode'] = bankCode;
    }
    vnp_Params = sortObject(vnp_Params);

    const signData = querystring.stringify(vnp_Params, { encode: false });

    const hmac = crypto.createHmac("sha512", secretKey);
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest("hex");
    vnp_Params['vnp_SecureHash'] = signed;
    
    vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });
    
    window.location.href = vnpUrl;
}
