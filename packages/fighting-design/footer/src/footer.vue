<script lang="ts" setup>
  import { Props } from './props'
  import { useList } from '../../_hooks'

  defineOptions({ name: 'FFooter' })

  const prop = defineProps(Props)

  const { styles } = useList(prop, 'footer')

  /** 样式列表 */
  const styleList = styles(['height', 'padding'])
</script>

<template>
  <footer class="f-footer" :style="styleList">
    <slot />
  </footer>
</template>
