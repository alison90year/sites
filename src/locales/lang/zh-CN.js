import index from '@lang/zh/index'
import MokeJSON from '@lang/zh/moke'
// @lang 根据启动参数引入对应站点的语言包
const Settings = {
  settings: '站点配置',
  search: '搜索',
  airplaneMode: '飞行模式',
  wlan: '无线局域网',
  bluetooth: '蓝牙'
}

// 按功能模块导出
export default {
  index,
  MokeJSON,
  Settings,
}

