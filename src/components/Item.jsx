import { Draggable } from "@hello-pangea/dnd";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import ItemEdit from "./ItemEdit";
import moment from "moment";


export default function Item({
    note,
    pos,
    checked,
    editItem,
    created_at,
    id,
    remove
}) {
    const [inEdit, setInEdit] = useState(false);

    return (
        <Draggable draggableId={id} index={pos}>
            {
                (prov) => (
                    <span
                        ref={prov.innerRef}
                        {...prov.dragHandleProps}
                        {...prov.draggableProps}
                        className="item-note"
                    >
                        <Icon icon="mdi:drag" width="50" height="50" />

                        {
                            !inEdit && <>
                                <p>{pos + 1}</p>
                                <span>
                                    <p>{note}</p>
                                    <small>{moment(created_at).format('DD HH:MM:SS')}</small>
                                </span>

                                <span style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {
                                        !checked && (
                                            <>
                                                <button
                                                    onClick={setInEdit.bind(null, true)}
                                                    type="button"
                                                    className="sample"><Icon icon="mdi:pencil" width="24" height="24" /></button>
                                                <button
                                                    onClick={() => {
                                                        editItem({
                                                            pos,
                                                            checked: true
                                                        })
                                                    }}
                                                    type="button"
                                                    className="sample"><Icon icon="line-md:confirm" width="24" height="24" /></button>
                                            </>
                                        )
                                    }

                                    {
                                        checked && <button
                                            onClick={() => {
                                                editItem({
                                                    pos,
                                                    checked: false
                                                })
                                            }}
                                            type="button"
                                            className="sample"><Icon icon="line-md:close" width="24" height="24" /></button>
                                    }

                                    <button
                                        onClick={remove}
                                        type="button"
                                        className="delete"><Icon icon={'mdi:trash'} width="24" height="24" /></button>


                                </span>
                            </>
                        }

                        {
                            inEdit && <ItemEdit
                                setItem={(item) => {
                                    editItem(item)
                                    setInEdit(false)
                                }}
                                item={{
                                    note
                                }}
                                pos={pos}
                                close={setInEdit.bind(null, false)}

                            />
                        }
                    </span>
                )
            }
        </Draggable>
    )
}