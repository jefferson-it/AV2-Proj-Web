
import { useState } from 'react'
import './App.css'
import { Icon } from '@iconify/react/dist/iconify.js'
import ItemEdit from './components/ItemEdit';
import useLocalStorage from './localhost';
import ViewerList from './components/Viewer';

function App() {
  const [items, setItems] = useLocalStorage('to-do-list', []);
  const [draft, setDraft] = useState([]);

  function editItem({ pos, ...item }) {
    const copyItens = [...items];
    const itemOriginal = copyItens[pos];

    if (itemOriginal) {
      copyItens[pos] = {
        ...copyItens[pos],
        ...item
      }
    }

    setItems(copyItens)
  }


  function putItem(item) {
    const copyItens = [...items];

    if (copyItens.find(({ note }) => item.note.toLowerCase() === note.toLowerCase())) {
      alert(`Já existe o item ${item.note}`);
      return
    }

    copyItens.push({ ...item, pos: items.length, checked: false, created_at: Date.now() })

    setItems(copyItens);

    const copyDraft = [...draft]
    copyDraft.splice(item.pos, 1);

    setDraft(copyDraft)
  }


  function addItem() {
    setDraft([...draft, {
      id: crypto.randomUUID()
    }])
  }

  function closeItem(i) {
    setDraft(d => {
      const copyItens = [...d];

      copyItens.splice(i, 1);

      return copyItens
    })

  }

  return (
    <main>
      <section>
        <h2>Lista</h2>
        <ViewerList
          list={items}
          editItem={editItem}
          setList={setItems}
        />
        {draft.length > 0 && (
          <form>
            {
              draft.map((v, i) => (
                <ItemEdit
                  key={v.id}
                  item={v}
                  close={closeItem.bind(null, i)}
                  setItem={putItem}
                  pos={i} />
              ))
            }
          </form>
        )}

        <div>
          <button
            type='button'
            className='button-add'
            onClick={addItem}
          >
            <Icon icon={'mdi:add'} />
            Adicionar Item
          </button>
        </div>
      </section>

    </main>
  )
}

export default App
