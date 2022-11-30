import React from 'react'
import { useQRCode } from 'next-qrcode';

const QRcode = () => {
  // let lineUserId = props.lineUserId;
  let lineUserId = "111111"
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