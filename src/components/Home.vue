<template lang="pug">
  q-layout(ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}")
    q-toolbar(slot="header" class="glossy")
      q-btn.flat(@click="$refs.layout.toggleLeft()")
        q-icon(name="menu")

      q-toolbar-title Pizza
        div(slot="subtitle") Running on Quasar v{{$q.version}}

    div(slot="left")
      q-list(no-border link inset-separator)
        q-list-header Menu
        q-side-link(item to="Menu")
          q-item-side(icon="school")
          q-item-main(label="Menu" sublabel="Meal options")
        q-side-link(item to="Admin")
          q-item-side(icon="school")
          q-item-main(label="Admin" sublabel="Admin options")

    router-view.layout-view
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QSideLink
} from 'quasar'

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QSideLink
  },
  data () {
    return {
      orienting: window.DeviceOrientationEvent && !this.$q.platform.is.desktop,
      rotating: window.DeviceMotionEvent && !this.$q.platform.is.desktop,
      moveX: 0,
      moveY: 0,
      rotateY: 0,
      rotateX: 0
    }
  }
}
</script>

<style lang="stylus">

</style>
