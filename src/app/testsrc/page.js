import TransacHandler from "../components/Server__components/TransacHandler.js";
TransacHandler(500000, "Thanh toan cho don hang abcxyz");

export default async function Page() {
    const res = await fetch("https://api.ipify.org/?format=json");
    const ipaddr = await res.json();
    const ip = ipaddr.ip;
    return (
        <>
            <h1>${ip}</h1>
        </>
    )
}