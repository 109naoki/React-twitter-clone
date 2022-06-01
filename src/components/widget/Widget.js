import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton,TwitterTweetEmbed} from 'react-twitter-embed';

import "./Widget.css";
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
      <TwitterTweetEmbed
  tweetId={'933354946111705097'}
/>

 <TwitterTimelineEmbed
  sourceType="profile"
  screenName="saurabhnemade"
  options={{height: 400}}
/>

  <TwitterShareButton
    url={'https://facebook.com/saurabhnemade'}
    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
  />
    </div>
    </div>
  )
}

export default Widget
