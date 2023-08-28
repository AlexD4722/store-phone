import { useEffect, useState } from "react";
import { useAccountContext } from "../store";

function AccountData() {
    const [time, setTime] = useState("");
    const account = useAccountContext()[0];

    useEffect(() => {
        let d = new Date();
        d = d.toUTCString();
        setTime(d);
        let timer = setInterval(() => {
            let d1 = new Date();
            d1 = d1.toUTCString();
            setTime(d1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            Account: {account.username}
            <br />
            User type: {account.user_type}
            <br />
            {time}
        </>
    );
}

export default AccountData;
