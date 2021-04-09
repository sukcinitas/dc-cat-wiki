import React from 'react';

import Heading from './Heading';
import '../sass/OtherPhotos.scss';

const OtherPhotos = ({ catImageInfo, cb }: {catImageInfo: Array<string>, cb: () => void }) => {
  const imageList = catImageInfo.map((imageInfo) => <img onLoad={cb} key={imageInfo} src={imageInfo} className="photos__photo"></img>)
  return (
    <section className="photos">
      <Heading type="small">Other photos</Heading>
      <div className="photos__grid">
        {imageList}
      </div>
    </section>
  )
}

export default OtherPhotos;