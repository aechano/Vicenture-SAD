
import React, { useState } from "react";
import {Chips} from 'primereact/chips';


export default function ChipsInputComponent() {
    const [value, setValue] = useState([]);

    return (
        <div className="border-2 rounded-xl p-2">
            <Chips value={value} onChange={(e) => setValue(e.value)} separator="," />
        </div>
    )
}
        