import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  }
  else {
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [alert, setAlert] = useState({show:false, msg:'', type:''})
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      // setAlert({show:true, msg:'please enter a value', type:'danger'})
      showAlert(true, 'please enter a value', 'danger')
    }
    else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return {...item, title:name}
          }
          return item
        })
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'item edited successfully', 'success')
    } else {
      showAlert(true, 'item added succesfully', 'success')
      const newItem = {id: new Date().getTime().toString(), title:name}
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type})
  }

  const clearList = () => {
    showAlert(true, 'items cleared successfully', 'success')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'item removed successfully', 'success')
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => {
      return item.id === id
    })
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g eggs" value={name} onChange={(e) => setName(e.target.value)} />
          <button className="submit-btn" type="submit">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List items={list} removeItem={removeItem} editItem={editItem} />
        <button className="clear-btn" onClick={clearList}>clear items</button>
      </div>
    </section>
  )
}

export default App
