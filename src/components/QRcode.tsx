import React from 'react'
import { useQRCode } from 'next-qrcode';

const QRcode = (props) => {
  let lineUserId = props.lineUserId;
  const { Canvas } = useQRCode();
  return (
    <div className="card">
        <Canvas
          text={lineUserId}
          options={{
            type: 'image/jpeg',
            quality: 0.3,
            level: 'M',
            margin: 3,
            scale: 4,
            width: 240,
            color: {
              // dark: '#010599FF',
              light: '#FFF',
            },
          }}
      />
      </div>
  )
}

export default QRcode