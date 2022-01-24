import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const list = items.map(({ category }) => category)

  // remove duplicates
  const newCategories = list.reduce(
    (total, curr) => {
      if (!total.includes(curr)) {
        total.push(curr)
      }
      return total
    },
    ['all']
  )

  const [categories, setcategories] = useState(newCategories)
  const [menuItems, setMenuItems] = useState(items)

  return (
    <main className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories}></Categories>
      <Menu items={menuItems}></Menu>
    </main>
  )
}

export default App
