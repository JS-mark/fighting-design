import {
  setBooleanProp,
  setObjectProp,
  setStringProp,
  setStringNumberProp,
  setNumberProp,
  setFunctionProp
} from '../../_utils'
import type { ExtractPropTypes } from 'vue'
import type { DrawerDirection } from './interface'
import type { FightingIcon } from '../../_interface'
import type { PopupCallback } from '../../popup'

export const Props = {
  /**绑定值，控制是否展示 */
  visible: setBooleanProp(),
  /** 是否追加到 body */
  appendToBody: setBooleanProp(),
  /** 弹出方向 */
  direction: setStringProp<DrawerDirection>('right', (val: DrawerDirection): boolean => {
    return (['left', 'top', 'right', 'bottom'] as const).includes(val)
  }),
  /** 大小尺寸 */
  size: setStringNumberProp('30%'),
  /** 标题文字内容 */
  title: setStringProp(),
  /** 是否展示遮罩层 */
  showMask: setBooleanProp(true),
  /** 点击遮罩层是否可关闭 */
  maskClose: setBooleanProp(true),
  /** 是否模糊遮罩层 */
  maskBlur: setBooleanProp(),
  /**是否展示关闭按钮 */
  showCloseIcon: setBooleanProp(true),
  /** 自定义关闭按钮 icon */
  closeIcon: setObjectProp<FightingIcon>(),
  /**
   * 层级 原生属性
   *
   * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
   */
  zIndex: setNumberProp(1999),
  /** 打开动画开始的回调 */
  onOpen: setFunctionProp<PopupCallback>(),
  /** 打开动画结束的回调 */
  onOpenEnd: setFunctionProp<PopupCallback>(),
  /** 关闭动画开始的回调 */
  onClose: setFunctionProp<PopupCallback>(),
  /** 关闭动画结束的回调 */
  onCloseEnd: setFunctionProp<PopupCallback>()
} as const

/** drawer 组件 props 类型 */
export type DrawerProps = ExtractPropTypes<typeof Props>
