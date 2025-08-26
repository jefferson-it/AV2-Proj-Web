import { Droppable } from "@hello-pangea/dnd";
import { DragDropContext } from "@hello-pangea/dnd";
import Item from "./Item";

export default function ViewerList({
    list,
    setList,
    editItem
}) {
    async function onDragEnd(res) {
        const { destination, source } = res;

        if (!destination || destination.index === source.index) return;

        const newList = Array.from(list);

        const [moved] = newList.splice(source.index, 1);

        newList.splice(destination.index, 0, moved);

        setList(newList.map((v, i) => ({ ...v, pos: i })));
    }

    function remove(index) {

        const newList = Array.from(list);

        newList.splice(index, 1);

        setList(newList.map((v, i) => ({ ...v, pos: i })));
    }
    return (
        <DragDropContext onDragEnd={onDragEnd} >
            <Droppable droppableId="cat-list" type="list" direction="vertical" >
                {(prov) => (
                    <div
                        ref={prov.innerRef}
                        {...prov.droppableProps}
                    >
                        {
                            list.map((v, i) => (<Item
                                {...v}
                                editItem={editItem}
                                remove={remove.bind(null, i)}
                                key={v.id} />))
                        }
                        {prov.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}