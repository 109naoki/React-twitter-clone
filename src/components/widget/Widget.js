import { Search } from '@mui/icons-material'
import React from 'react'

function Widget() {
  return (
    <div className='widgets'>
      <div className='widgets--input'>
        <Search className='widgets--searchIcon' />
        <input placeholder='キーワードを検索' type="text"/>
      </div>

    <div className='widgets--widgetContainer'>
      <h2>今どうしてる？</h2>
      {/* ライブラリを追加 */}
    </div>
    </div>
  )
}

export default Widget
