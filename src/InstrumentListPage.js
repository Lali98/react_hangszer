import {useEffect, useState} from "react";

export function InstrumentListPage() {
    const [instruments, setInstruments] = useState([]);
    const [isFatchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch("https://kodbazis.hu/api/instruments", {credentials: "include"})
            .then((res) => res.json())
            .then((hangszerek) => setInstruments(hangszerek))
            .catch(console.log)
            .finally(() => {
                setFetchPending(false);
            });
    }, []);
    return (
        <p>oldal</p>
    );
}