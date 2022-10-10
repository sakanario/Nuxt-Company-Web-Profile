<template>
  <div class="gmap_canvas">
    <iframe
      class="w-100"
      id="gmap_canvas"
      :src="ContactData?.map"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
    ></iframe
    ><style>
      .mapouter {
        position: relative;
        text-align: right;
        height: 221px;
        width: 268px;
      }</style
    ><style>
      .gmap_canvas {
        overflow: hidden;
        background: none !important;
        min-width: 350px;
        min-height: 192px;
        border-radius: 19px;
        width: 100%;
        height: 100%;
      }

      #gmap_canvas {
        width: 100%;
        height: 100%;
      }
    </style>
  </div>
</template>


<script>
export default {
  name: "Map",
  computed: {
    ContactData() {
      return this.$store.state.contact.contactData;
    },
  },
};
</script>