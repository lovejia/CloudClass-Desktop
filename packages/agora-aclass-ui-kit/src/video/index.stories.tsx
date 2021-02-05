import React, {useCallback, useState} from 'react'
import {Video, VideoItem} from '.'

export default {
  title: '视频'
}

export const TeacherVideo = (props: any) => {

  const [video, setVideo] = useState<boolean>(false)
  const [audio, setAudio] = useState<boolean>(false)

  const handleClick = useCallback((target: VideoItem) => {
    if (target.sourceType === 'video') {
      setVideo(!target.enabled)
    }
    if (target.sourceType === 'audio') {
      setAudio(!target.enabled)
    }
  }, [setVideo, setAudio])

  return (
    <Video
      className=""
      uid={1}
      nickname="Nancy"
      minimal={true}
      resizable={false}
      trophyNumber={0}
      visibleTrophy={false}
      role={"teacher"}
      videoState={video}
      audioState={audio}
      onClick={handleClick}
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      {/* <div>media</div> */}
    </Video>
  )
}

TeacherVideo.args = {
  width: '200px',
  height: '150px',
}


export const StudentVideo = (props: any) => {

  const [video, setVideo] = useState<boolean>(false)
  const [audio, setAudio] = useState<boolean>(false)

  const handleClick = useCallback((target: VideoItem) => {
    if (target.sourceType === 'video') {
      setVideo(!target.enabled)
    }
    if (target.sourceType === 'audio') {
      setAudio(!target.enabled)
    }
  }, [setVideo, setAudio])

  return (
    <Video
      className=""
      uid={1}
      nickname="Nancy"
      minimal={props.minimal}
      resizable={false}
      visibleTrophy={true}
      trophyNumber={10}
      role={"student"}
      videoState={video}
      audioState={audio}
      onClick={handleClick}
      style={{
        width: props.width,
        height: props.height,
      }}
      disableButton={props.disableButton}
    >
      {/* <div>media</div> */}
    </Video>
  )
}

StudentVideo.args = {
  width: '200px',
  height: '150px',
  minimal: true,
  disableButton: false,
}