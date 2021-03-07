import React from 'react';

import Heading from './Heading';
import '../sass/OtherPhotos.scss';

const OtherPhotos = ({ catImageInfo }: {catImageInfo: Array<string>}) => {
  const imageList = catImageInfo.map((imageInfo) => <img key={imageInfo} src={imageInfo} className="photos__photo"></img>)
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