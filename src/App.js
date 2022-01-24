import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  // remove duplicates

  // const list = items.map(({ category }) => category)
  // const categories = list.reduce(
  //   (total, curr) => {
  //     if (!total.includes(curr)) {
  //       total.push(curr)
  //     }
  //     return total
  //   },
  //   ['all']
  // )
  const categories = ['all', ...new Set(items.map((item) => item.category))]
  const [menuItems, setMenuItems] = useState(items)

  const filterItem = (type) => {
    if (type === 'all') {
      setMenuItems(items)
      return
    }
    const list = items.filter(({ category }) => category === type)

    setMenuItems(list)
  }

  return (
    <main className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItem={filterItem}></Categories>
      <Menu items={menuItems}></Menu>
    </main>
  )
}

export default App
