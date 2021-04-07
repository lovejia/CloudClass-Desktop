export const en = {
  'role': {
    'teacher': 'Teacher',
    'student': 'Student',
    'assistant': 'Assistant',
  },
  'screen_share': 'Screen Share',
  'kick': {
    'kick_out_student': 'Kick Out',
  },
  'radio': {
    'kicked_once': 'Kick out room this time',
    'ban': 'Banned',
  },
  'course': {
    'pre_class': 'Pre Class',
    'in_class': 'In Class',
    'end_class': 'End Class',
    'join_failed': 'Join Failure',
    'screen_sharing': 'Screen Sharing',
  },
  'device': {
    'camera': 'Camera',
    'speaker': 'Speaker',
    'microphone': 'Microphone',
    'microphone_volume': 'Microphone Volume',
    'speaker_volume': 'Speaker Volume',
  },
  'roster': {
    'teacher_name': 'Teacher：',
    'user_list': 'User List',
    'student_name': 'Name',
    'student_co_video': 'CoVideo',
    'close_student_co_video': '{{teacher}}, Close Student CoVideo',
    'open_student_co_video': '{{teacher}}, Open Student CoVideo',
    'board_state': 'Board',
    'camera_state': 'Camera',
    'microphone_state': 'Microphone',
    'reward': 'Reward',
    'kick': 'Kick'
  },
  'hands_up': 'Hands Up',
  'co_video': {
    'remote_open_camera': '{reason} Open your camera',
    'remote_open_microphone': '{reason} Open your microphone',
    'remote_grant_board': '{reason} Grant your board',
    'remote_close_camera': '{reason} Close your Camera',
    'remote_close_microphone': '{reason} Close your Microphone',
    'remote_revoke_board': '{reason} Revoke your board',
    'received_student_hands_up': 'Hands Up ',
    'received_teacher_accepted': 'Teacher Accepted',
    'received_teacher_refused': 'Teacher Refused',
    'received_student_cancel': 'Teacher Canceled',
    'received_message_timeout': 'No Responder, Try again',
  },
  'signal': {
    'delay': 'Delay',
    'lose': 'Lose',
    'status': 'Status',
    'CPU': 'CPU',
  },
  'placeholder': {
    'empty_chat': 'Empty Message',
    'enable_chat_muted': 'Student Chat Muted',
    'input_message': 'Please Input Message',
  },
  'error': {
    'conflict': 'Hands Up Conflict',
    'not_found': 'Page Not Found',
    'apply_co_video_limit': 'Apply co-video over maximum',
    'send_co_video_limit': 'Roll call co-video over maximum',
    'components': {
      'paramsEmpty': 'params：{reason} can`t be empty',
    },
    'class_end': 'The classroom is end.',
    'unknown': 'Unknown error occured. Code: {errCode} Details: {message}',
    'room_is_full': 'The room is full',
  },
  'toast': {
    'kick_by_other_side': 'Kick by other client',
    'screen_share': 'Screen Share',
    'close_ppt': 'Close CourseWare',
    'sure_close_ppt': 'Are you sure to close?',
    'end_class': 'End Class',
    'quit_from_room': 'Leave Class Room',
    'kick_by_teacher': 'Kicked by teacher',
    'upload_log_failure': 'Upload Log Failure，ErrorName: {reason}，see more details in devtool',
    'show_log_id': `Report your log ID: {reason}`,
    'api_login_failured': 'Join Failured, Reason: {reason}',
    'confirm': 'Confirm',
    'cancel': 'Cancel',
    'leave_room': 'Leave Classroom',
    'quit_room': 'Are you sure to exit the classroom?',
    'kick': 'kicked',
    'login_failure': 'login failure',
    'whiteboard_lock': 'Whiteboard follow',
    'whiteboard_unlock': 'Whiteboard nofollow',
    'canceled_screen_share': 'Canceled screen sharing',
    'screen_sharing_failed': 'Screen sharing failed, reason: {reason}',
    'recording_failed': 'Start cloud recording failed, reason: {reason}',
    'start_recording': {
      'title': 'Start Recording',
      'body': 'Are you sure to start recording the classroom?',
      'success': 'Recording successfully started'
    },
    'stop_recording': {
      'title': 'Stop Recording',
      'body': 'Are you sure to stop recording the classroom?',
      'success': 'Recording successfully stopped'
    },
    'recording_too_short': 'Recording too short, at least 15 seconds',
    'rtm_login_failed': 'login failure, please check your network',
    'rtm_login_failed_reason': 'login failure, reason: {reason}',
    'replay_failed': 'Replay Failed please refresh browser',
    'teacher_exists': 'Teacher already exists, Please waiting for 30s or reopen new class',
    'student_over_limit': 'Student have reached upper limit, , Please waiting for 30s or rejoin new class',
    'teacher_and_student_over_limit': 'The number of students and teacher have reached upper limit',
    'teacher_accept_whiteboard': 'Teacher already grant your whiteboard',
    'teacher_cancel_whiteboard': 'Teacher already cancel your whiteboard',
    'teacher_accept_co_video': 'Teacher already accept co-video',
    'teacher_reject_co_video': 'Teacher already rejected co-video',
    'teacher_cancel_co_video': 'Teacher already canceled co-video',
    'student_cancel_co_video': 'Student canceled co-video',
    'student_peer_leave': '"{reason}" Left',
    'student_send_co_video_apply': '"{reason}" send the co-video request',
    'stop_co_video': 'Stop "{reason}" co-video',
    'reject_co_video': 'Reject co-video',
    'close_co_video': 'Close co-video',
    'close_youself_co_video': 'Stop co-video',
    'accept_co_video': 'Accept co-video',
    'successfully_joined_the_room': 'Successfully joined the room',
    'failed_to_join_the_room': 'Failed to join the room',
    'failed_to_authorize_whiteboard': 'Failed to authorize whiteboard',
    'failed_to_deauthorize_whiteboard': 'Failed to deauthorize whiteboard',
    'failed_to_query_playback_list': 'Failed to query playback list',
    'audio_equipment_has_changed': 'Audio equipment has changed',
    'video_equipment_has_changed': 'Video equipment has changed',
    'failed_to_initiate_screen_sharing': 'Failed to initiate screen sharing',
    'failed_to_end_screen_sharing': 'Failed to end screen sharing',
    'failed_to_initiate_screen_sharing_to_remote': 'Failed to initiate screen sharing to remote',
    'failed_to_enable_screen_sharing': 'Failed to enable screen sharing',
    'failed_to_enable_screen_sharing_permission_denied': 'Open screen capture failed！Please grant permission for screen capture!',
    'failed_to_send_chat': 'Failed to send chat',
    'failed_to_translate_chat': 'Failed to translate chat',
    'failed_to_send_reward': 'Failed to send reward',
    'failed_to_join_rtc_please_refresh_and_try_again': 'Failed to join rtc, please refresh and try again',
    'leave_rtc_channel': 'Leave rtc channel',
    'failed_to_leave_rtc': 'Failed to leave rtc',
    'co_video_close_success': 'CoVideo dismissed success',
    'co_video_close_failed': 'CoVideo dismissed failure',
    'publish_rtc_success': 'Publish RTC Success',
    'open_whiteboard_follow': 'open whiteboard follow',
    'close_whiteboard_follow': 'close whiteboard follow',
    'i': 'I',
    'teacher': 'Teacher',
    'the_teacher_authorized_your_whiteboard': 'The teacher authorized your whiteboard',
    'the_teacher_cancelled_your_whiteboard_permission': 'The teacher cancelled your whiteboard permission',
    'publish_business_flow_successfully': 'Publish business flow successfully',
    'media_method_call_failed': 'Media method call failed',
    'successfully_left_the_business_channel': 'Successfully left the business channel',
    'course_started_successfully': 'Course start successfully',
    'setting_start_failed': 'Setting start failed',
    'the_course_ends_successfully': 'Course end successfully',
    'setting_ended_failed': 'Setting ended failed',
    'start_recording_successfully': 'Start recording successfully',
    'start_recording_failed': 'Start recording failed',
    'successfully_ended_recording': 'Successfully_ended_recording',
    'failed_to_end_recording': 'Failed to end recording',
    'you_have_a_default_message': 'You have a default message',
    'the_teacher_agreed': 'Teacher Agreed',
    'student_applied': 'Student applied',
    'you_were_dismissed_by_the_teacher': 'You were dismissed by the teacher',
    'student_canceled': 'Student canceled',
    'the_teacher_refused': 'Teacher refused',
    'failed_to_initiate_a_raise_of_hand_application': 'Failed to initiate a raise of hand application',
    'failed_to_end_the_call': 'Failed to end the call',
    'failed_to_join_board': 'Failed to join board',
    'classroom_remote_join': 'Account was logged in from remote device, you have left the classroom',
    'time_interval_between_start': `The class will start in {reason}`,
    'time_interval_between_end': `The class will be over in {reason}`,
    'class_is_end': `Class is over. The classroom will be closed in {reason}`,
    'time_interval_between_close': `The classroom will be closed in {reason}`,
    'reward_limit': 'The maximum number of trophies in the room has been reached',
    'chat_disable': 'Turn on mute mode',
    'chat_enable': 'Turn off mute mode',
  },
  'end_class_confirm': 'Are sure end classroom',
  'notice': {
    'student_interactive_apply': `"{reason}" want to co-video`
  },
  'scaffold': {
    'pencil': 'Pencil',
    'laser_pointer': 'Laser pointer',
    'straight': 'straight',
    'circle': 'circle',
    'rectangle': 'rectangle',
    'selector': 'selector',
    'eraser': 'eraser',
    'color': 'color',
    'blank_page': 'add page',
    'move': 'move',
    'follow': 'Follow',
    'un_follow': 'UnFollow',
    'screen_share': 'Screen Share',
    'stop_screen_share': 'Stop Screen Share',
    'cloud_storage': 'Cloud Storage',
    'text': 'Text',
    'tools': 'Tools',
    'user_list': 'User List'
  },
  'message': 'message',
  'en': 'English',
  'cloud': {
    'fileName': 'file name',
    'size': 'size',
    'progress': 'progress',
    'updated_at': 'updated at',
    'operation': 'operation',
    'publicResources': 'Public Resources',
    'personalResources': 'Personal Resources',
    'downloadResources': 'Download Resources',
    'upload': 'Upload',
    'delete': 'Delete',
    'download': 'Download',
    'downloading': 'Downloading',
    'pause': 'Pause',
    'upload_success': 'Upload Success',
  },
  'media': {
    'camera': 'Camera',
    'switch_camera': 'Switch Camera',
    'microphone': 'Microphone',
    'switch_microphone': 'Switch Microphone',
    'microphone_volume': 'Microphone Volume',
    'speaker': 'Speaker',
    'switch_speaker': 'Switch Speaker',
    'volume': 'Volume',
    'adjust_volume': 'Adjust Volume',
    'test_speaker': 'Test',
    'camera_error': 'Device exception, camera is unplugged or occupied and cannot be used!',
    'microphone_error': 'Device exception, microphone is unplugged or occupied and cannot be used!',
    'mirror': 'mirror',
  },
  'tool': {
    'board_name': 'Whiteboard',
    'selector': 'mouse selector',
    'pencil': 'pencil',
    'rectangle': 'rectangle',
    'ellipse': 'ellipse',
    'eraser': 'eraser',
    'text': 'text',
    'color_picker': 'color picker',
    'add': 'add new page',
    'upload': 'upload ',
    'hand_tool': 'hand selector',
    'extension_tool': 'extension tool',
    'clear': 'clear',
    'disk': 'disk',
    'prev': 'back',
    'next': 'forward',
    'zoomIn': 'zoom in',
    'zoomOut': 'zoom out',
    'fullScreen': 'full screen',
    'reduction': 'reduction',
    'reset': 'center',
  },
  'pretest': {
    'title': 'Device Test',
    'finishTest': 'Finish'
  },
  'nav': {
    'delay': 'Delay: ',
    'network': 'Network: ',
    'cpu': 'CPU: ',
    'class_end': 'Class end',
    'class_start': 'Class start',
    'back': 'Back',
    'to_start_in': 'To start in: ',
    'started_elapse': 'Started: ',
    'hours': 'hours',
    'minutes': 'minutes',
    'seconds': 'seconds',
    'short': {
      'hours': 'hrs',
      'minutes': 'mins',
      'seconds': 'secs',
    },
    'signal_good': 'Good',
    'signal_weak': 'Weak',
    'signal_bad': 'Bad',
    'signal_unknown': 'Unknown',
  },
  'send': 'Send',
}