import React from 'react'

type Props = {
  progress: number
}

const ProgressBar = ({ progress }: Props) => {
  return (
    <div className="w-full bg-black-100 rounded-full h-2.5">
      <div
        className="bg-green h-full rounded-full"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  )
}

export default ProgressBar
