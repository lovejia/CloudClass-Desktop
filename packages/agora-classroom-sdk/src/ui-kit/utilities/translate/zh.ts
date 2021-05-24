export const zh = {
  'role': {
    'teacher': '老师',
    'student': '学生',
    'assistant': '助教',
  },
  'whiteboard': {
    'converting': '转换中',
  },
  'screen_share': '屏幕共享',
  'kick': {
    'kick_out_student': '移出学生',
  },
  'radio': {
    'kicked_once': '仅移出教室一次',
    'ban': '禁止再次进入教室',
  },
  'course': {
    'pre_class': '课前',
    'in_class': '已上课',
    'end_class': '课程已结束',
    'join_failed': '加入失败',
    'screen_sharing': '屏幕共享',
  },
  'device': {
    'camera': '摄像头',
    'microphone': '麦克风',
    'speaker': '扬声器',
    'microphone_volume': '麦克风音量',
    'speaker_volume': '扬声器音量',
  },
  'student': {
    'student_name': '学生姓名',
    'camera': '摄像头',
    'microphone': '麦克风',
    'operation': '踢人',
  },
  'roster': {
    'chat': '禁言',
    'teacher_name': '教师姓名：',
    'user_list': '人员列表',
    'student_name': '姓名',
    'student_co_video': '上下台',
    'close_student_co_video': '你已下台，暂时不能进行互动了哦',
    'open_student_co_video': '你已被老师邀请上台，请积极互动哦',
    'board_state': '学生授权',
    'camera_state': '摄像头',
    'microphone_state': '麦克风',
    'reward': '奖励',
    'kick': '踢人',
    'granted': '授权',
  },
  'hands_up': '举手',
  'co_video': {
    'remote_open_camera': '摄像头已打开',
    'remote_open_microphone': '你可以发言了',
    'remote_grant_board': '你可以使用白板了',
    'remote_close_camera': '摄像头已关闭',
    'remote_close_microphone': '你暂时不能发言了',
    'remote_revoke_board': '你现在无权使用白板了',
    'received_student_hands_up': '有学生举手了',
    'received_teacher_accepted': '老师已同意上台',
    'received_teacher_refused': '老师拒绝了上台',
    'received_student_cancel': '学生取消了举手',
    'received_message_timeout': '消息未响应，请重新尝试',
    'hands_up_requsted': '发送举手申请成功',
    'hands_up_cancelled': '举手申请已取消'
  },
  'private_media_chat': {
    'chat_started': '私密聊天开始',
    'chat_ended': '私密聊天结束'
  },
  'placeholder': {
    'muted_chat': '禁言中',
    'empty_chat': '还没有消息',
    'enable_chat_muted': '已开启学生禁言',
    'input_message': '请输入消息',
  },
  'signal': {
    'delay': '网络延迟',
    'lose': '丢包率',
    'status': '网络状态',
    'CPU': 'CPU',
  },
  'error': {
    'banned': '禁止进入',
    'cannot_join': '你已被禁止进入这个教室！',
    'not_found': '页面找不到',
    'apply_co_video_limit': '举手超出连麦人数限制',
    'send_co_video_limit': '点名超出连麦人数限制',
    'components': {
      'paramsEmpty': '参数：{reason}不能为空',
    },
    'class_end': '课程已结束，请点击确定离开教室',
    'unknown': '发生未知错误，错误代码: {errCode}, 信息: {message}',
    'room_is_full': '当前房间已满，请点击确认离开教室',
  },
  'toast': {
    'mute_chat': '你已被老师禁言了',
    'unmute_chat': '你被解除禁言了',
    'remote_mute_chat': '{reason}被老师禁言了',
    'remote_unmute_chat': '{reason}被老师解除禁言了',
    'add_screen_share': '老师开启了屏幕共享',
    'remove_screen_share': '老师关闭了屏幕共享',
    'granted_board_success': '授权白板成功',
    'revoke_board_success': '收回白板成功', 
    'create_screen_share_failed': '创建屏幕分享失败',
    'kick_by_other_side': '被其他端踢出',
    'screen_share': '屏幕共享',
    'close_ppt': '关闭当前课件',
    'sure_close_ppt': '你确定要关闭吗？',
    'end_class': '课程已结束',
    'quit_from_room': '离开教室',
    'kick_by_teacher': '你已被踢出教室',
    'upload_log_failure': '上传日志失败，错误类型：{reason}, 详情参考开发者工具',
    'show_log_id': `请提供你的日志ID: {no}`,
    'api_login_failured': '房间加入失败, 原因: {reason}',
    'confirm': '确定',
    'cancel': '取消',
    'leave_room': '离开教室',
    'quit_room': '确定退出课程吗？',
    'kick': '其他端登录，被踢出房间',
    'login_failure': '登录房间失败',
    'whiteboard_lock': '设置白板跟随',
    'whiteboard_unlock': '取消白板跟随',
    'canceled_screen_share': '已取消屏幕共享',
    'screen_sharing_failed': '屏幕分享失败, 原因：{reason}',
    'recording_failed': '开启云录制失败, 原因：{reason}',
    'start_recording': {
      'title': '录制提示',
      'body': '你确定要开始录制吗?',
      'success': '录制开启成功'
    },
    'stop_recording': {
      'title': '停止录制',
      'body': '你确定要停止录制吗?',
      'success': '录制停止成功'
    },
    'recording_too_short': '录制太短，至少15秒',
    'rtm_login_failed': '房间登录失败, 请检查网络设置',
    'rtm_login_failed_reason': '房间登录失败, 原因： {reason}',
    'replay_failed': '回放失败，请刷新页面重试',
    'teacher_exists': '该房间老师已存在，请等待30秒或重新创建教室',
    'student_over_limit': '超出学生最大人数，请等待30秒或重新创建教室',
    'teacher_and_student_over_limit': '超出学生和老师的最大人数',
    'teacher_accept_whiteboard': '老师已授权了你白板的权限',
    'teacher_cancel_whiteboard': '老师已收回了你白板的权限',
    'teacher_accept_co_video': '老师已允许连麦',
    'teacher_reject_co_video': '老师已拒绝连麦',
    'teacher_cancel_co_video': '老师已取消连麦',
    'student_cancel_co_video': '学生已取消连麦',
    'student_send_co_video_apply': '"{reason}" 学生发起了连麦申请',
    'student_peer_leave': '"{reason}" 离开了',
    'stop_co_video': '教师停止了"{reason}"的连麦',
    'reject_co_video': '您取消了学生的连麦申请',
    'close_co_video': '您关闭了学生的连麦',
    'close_youself_co_video': '你关闭了自己的连麦',
    'accept_co_video': '您同意了连麦',
    'successfully_joined_the_room': '加入房间成功',
    'failed_to_join_the_room': '加入房间失败',
    'failed_to_authorize_whiteboard': '授权白板失败',
    'failed_to_deauthorize_whiteboard': '取消授权白板失败',
    'failed_to_query_playback_list': '查询回放列表失败',
    'audio_equipment_has_changed': '音频设备发生了变化',
    'video_equipment_has_changed': '视频设备发生了变化',
    'failed_to_initiate_screen_sharing': '发起屏幕共享失败',
    'failed_to_end_screen_sharing': '结束屏幕共享失败',
    'failed_to_initiate_screen_sharing_to_remote': '向远端发起屏幕共享失败',
    'failed_to_enable_screen_sharing': '开启屏幕共享失败',
    'failed_to_enable_screen_sharing_permission_denied': '开启屏幕共享失败！请先授权屏幕共享权限！',
    'failed_to_send_chat': '发送聊天失败',
    'failed_to_translate_chat': '翻译聊天失败',
    'failed_to_send_reward': '发送奖励失败',
    'failed_to_join_rtc_please_refresh_and_try_again': '加入rtc失败，请刷新重试',
    'leave_rtc_channel': '离开rtc频道',
    'failed_to_leave_rtc': '离开rtc失败',
    'co_video_close_success': '下麦成功',
    'co_video_close_failed': '下麦失败',
    'publish_rtc_success': '发布RTC成功',
    'open_whiteboard_follow': '打开白板跟随',
    'close_whiteboard_follow': '关闭白板跟随',
    'i': '我',
    'teacher': '老师',
    'the_teacher_authorized_your_whiteboard': '老师授权了你的白板',
    'the_teacher_cancelled_your_whiteboard_permission': '老师取消了你的白板权限',
    'publish_business_flow_successfully': '发布业务流成功',
    'media_method_call_failed': '媒体方法调用失败',
    'successfully_left_the_business_channel': '离开业务频道成功',
    'course_started_successfully': '课程开始成功',
    'setting_start_failed': '设置开始失败',
    'the_course_ends_successfully': '课程结束成功',
    'setting_ended_failed': '设置结束失败',
    'start_recording_successfully': '开始录制成功',
    'start_recording_failed': '开始录制失败',
    'successfully_ended_recording': '结束录制成功',
    'failed_to_end_recording': '结束录制失败',
    'you_have_a_default_message': '你有一条默认消息',
    'the_teacher_agreed': '老师同意了',
    'student_applied': '学生申请了',
    'you_were_dismissed_by_the_teacher': '你被老师下麦了',
    'student_canceled': '学生取消了',
    'the_teacher_refused': '老师拒绝了',
    'failed_to_initiate_a_raise_of_hand_application': '发起举手申请失败',
    'failed_to_end_the_call': '结束通话失败',
    'failed_to_join_board': '加入白板失败',
    'stop_screen_share_failed': '屏幕共享停止失败',
    'classroom_remote_join': '账号在远端设备登录，您已离开教室',
    'time_interval_between_start': `距离上课开始还有: {reason}`,
    'time_interval_between_end': `课程还有{reason}结束`,
    'class_is_end': `下课咯，教室还有{reason}关闭`,
    'time_interval_between_close': `教室还有{reason}关闭`,
    'reward_limit': '奖杯已全部发完',
    'chat_enable': '禁言模式开启',
    'chat_disable': '禁言模式关闭',
  },
  'end_class_confirm': '确定要结束教室吗？',
  'notice': {
    'student_interactive_apply': `"{reason}"想和你连麦`
  },
  'scaffold': {
    'search': '搜索',
    'student_list': '学生列表',
    'pencil': '画笔',
    'laser_pointer': '激光笔',
    'countdown': '倒计时',
    'straight': '直线',
    'circle': '圆圈',
    'rectangle': '矩形',
    'selector': '选择',
    'eraser': '橡皮擦',
    'color': '颜色',
    'blank_page': '新增一页',
    'move': '移动工具',
    'follow': '跟随模式',
    'un_follow': '解除跟随',
    'screen_share': '屏幕共享',
    'stop_screen_share': '停止共享',
    'cloud_storage': '云盘',
    'text': '文本',
    'tools': '工具栏',
    'user_list': '用户列表'
  },
  'cloud': {
    'fileName': '文件名',
    'size': '大小',
    'progress': '进度条',
    'operation': '操作',
    'updated_at': '修改时间',
    'publicResources': '公共资源',
    'personalResources': '我的资源',
    'downloadResources': '下载资源',
    'upload': '上传',
    'delete': '删除',
    'download': '下载',
    'downloading': '下载中',
    'pause': '暂停',
    'upload_success': '上传成功',
  },
  'media': {
    'camera': '摄像头',
    'switch_camera': '切换摄像头',
    'microphone': '麦克风',
    'switch_microphone': '切换麦克风',
    'microphone_volume': '麦克风音量',
    'speaker': '扬声器',
    'switch_speaker': '切换扬声器',
    'volume': '音量',
    'adjust_volume': '调整音量',
    'test_speaker': '检测',
    'camera_error': '摄像头被拔出或摄像头已占用，无法显示视频！',
    'microphone_error': '麦克风被拔出或麦克风被占用，无法使用麦克风！',
    'mirror': '镜像模式',
  },
  'pretest': {
    'title': '设备检测',
    'settingTitle': '设备设置',
    'finishTest': '完成'
  },
  'biz-header': {
    'setting': '设置',
    'exit': '退出',
    'recording': '录制中',
    'start_record': '开启录制'
  },
  'message': '消息',
  'quiz': '提问',
  'zh': '中文',
  'nav': {
    'delay': '延迟: ',
    'network': '网络: ',
    'cpu': 'CPU: ',
    'class_end': '课程结束',
    'class_start': '课程开始',
    'back': '返回',
    'to_start_in': '距离上课还有：',
    'started_elapse': '已开始上课：',
    'ended_elapse': '已经下课：',
    'hours': '小时',
    'minutes': '分钟',
    'seconds': '秒',
    'short': {
      'hours': '小时',
      'minutes': '分钟',
      'seconds': '秒',
    },
    'signal_good': '优',
    'signal_weak': '良',
    'signal_bad': '差',
    'signal_unknown': '未知',
  },
  'tool': {
    'board_name': '白板',
    'screen_share': '屏幕共享',
    'selector': '鼠标选择器',
    'pencil': '画笔',
    'rectangle': '矩形',
    'ellipse': '椭圆',
    'eraser': '橡皮擦',
    'text': '文字',
    'color_picker': '调色板',
    'add': '新增一页',
    'upload': '上传',
    'hand_tool': '手抓工具',
    'extension_tool': '扩展',
    'clear': '清除',
    'disk': '云盘',
    'prev': '后退',
    'next': '前进',
    'zoomIn': '放大',
    'zoomOut': '缩小',
    'fullScreen': '全屏',
    'reduction': '还原',
    'reset': '居中',
  },
  'send': '发送',
  'home': {
    'form_title': '免费试用',
    'roomId': 'roomId',
    'roomId_placeholder': '请输入roomId',
    'userId': 'userId',
    'userId_placeholder': '请输入userId',
    'roomName': '房间',
    'roomName_placeholder': '请输入房间名',
    'nickName': '昵称',
    'nickName_placeholder': '请输入昵称',
    'roomType': '类型',
    'roomType_placeholder': '请选择课堂类型',
    'roomType_1v1': '1对1',
    'roomType_interactiveSmallClass': '互动小班课',
    'roomType_interactiveBigClass': '大班课',
    'role': '角色',
    'role_placeholder': '请选择你的角色',
    'role_teacher': '老师',
    'role_student': '学生',
    'role_assistant': '助教',
    'role_audience': '观众',
    'language': '语言：',
    'language_placeholder': '请选择语言',
    'duration': '时长',
    'duration_unit': '分钟',
    'enter_classroom': '进入教室',
    'region_placeholder': '请选择区域',
    'region': '区域：',
    'header-left-title': '声网灵动课堂',
    'about': '关于',
    'input-error-msg': '只能输入字母、数字'
  },
  'home-about': {
    'privacy-policy': '隐私条例',
    'product-disclaimer': '免责声明',
    'sign-up': '注册声网账号',
    'version-time': '发版时间',
    'sdk-version': 'SDK版本',
    'classroom-version': '灵动课堂版本',
    'check': '查看',
    'register': '注册'
  },
  'disclaimer': {
    'title': '免责声明',
    'content-a': `灵动课堂（“本产品”）是由上海兆言网络科技有限公司（“上海兆言”）提供的一款测试产品，上海兆言享有本产品的著作权和所有权。特此免费授予获得本产品和相关文档文件（以下简称“软件”）副本的任何人无限制地使用软件的权利，包括但不限于使用，复制，修改，合并，发布，分发，但本产品不得用于任何商业用途，不得再许可和/或出售该软件的副本。 `,
    'content-b': `本产品按“现状”提供，没有任何形式的明示担保，包括但不限于对适配性、特定目的的适用性和非侵权性的担保。无论是由于与本产品或本产品的使用或其他方式有关的任何合同、侵权或其他形式的行为，上海兆言均不对任何索赔、损害或其他责任负责。 `,
    'content-c': `您可以自由选择是否使用本产品提供的服务，如果您下载、安装、使用本产品中所提供的服务，即表明您信任该产品所有人，上海兆言对任何原因在使用本产品中提供的服务时可能对您自身或他人造成的任何形式的损失和伤害不承担任何责任。`,
  }
}