import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function ItemEdit({
    setItem,
    pos,
    close,
    item
}) {
    const [info, setInfo] = useState(item || null);

    function change(e) {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="item-sec">
            <input
                onChange={change}
                name="note"
                defaultValue={item.note}
                placeholder="Nome do item"
            />
            <button
                onClick={setItem.bind(null, { ...info, pos })}
                type="button" className="send">
                <Icon icon="material-symbols:send-rounded" width="24" height="24" />
            </button>
            <button onClick={close} type="button" className="delete">
                <Icon icon="mdi:close" width="24" height="24" />
            </button>
        </div>
    )
}