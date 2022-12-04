import React from 'react'
import { useQRCode } from 'next-qrcode';

const QRcode = (props: any) => {
  let lineUserId = props.profile.userId;
  const { Canvas } = useQRCode();

  if (!lineUserId) {
    return (
      <div>読み込み中・・・</div>
    )
  } else {
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

}

export default QRcode