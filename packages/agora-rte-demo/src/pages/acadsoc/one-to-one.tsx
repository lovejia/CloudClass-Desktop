import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import styles from './style.module.scss'
import { StudentVideo, TeacherVideo } from './containers/video'
import { ChatView } from './containers/chat'
import { Nav } from './containers/nav'
import { BoardView } from './containers/board'
import { useAcadsocRoomStore, useAppStore, useUIStore } from '@/hooks'
import { useHistory } from 'react-router-dom'
import { Loading } from '@/components/loading'
import { AutoplayToast } from '@/components/autoplay-toast'

export const AcadsocOneToOne = observer(() => {

  const history = useHistory()
  const appStore = useAppStore()
  const uiStore = useUIStore()
  const acadsocStore = useAcadsocRoomStore()

  useEffect(() => {
    if (appStore.userRole < 0) {
      uiStore.unblock()
      history.push('/')
      return
    }
    acadsocStore.join()
  }, [])

  return (
    <div className={styles.container}>
      <>
        {uiStore.loading ? <Loading /> : null}
        <AutoplayToast />
      </>
      <Nav />
      <div className={styles.flexBox}>
        <div className={styles.leftContainer}>
          <BoardView />
        </div>
        <div className={styles.rightContainer}>
          <TeacherVideo />
          <StudentVideo />
          <ChatView />
        </div>
      </div>
    </div>
  )
})