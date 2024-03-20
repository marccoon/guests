<template>
  <div v-click-outside="close" class="relative">
    <div
      class="font-light cursor-pointer border border-select text-select lg:text-base text-sm w-full p-3 flex items-center justify-between"
      @click="active = !active"
    >
      {{ placeholder }} {{ selectedLabel }}
      <svg
        :class="{
          'rotate-180': active,
        }"
        class="transition-all duration-150 transform"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.83589 3.55986C8.05471 3.77858 8.05471 4.13319 7.83589 4.352L4.39606 7.79194C4.2867 7.90109 4.14334 7.95588 3.99998 7.95588C3.85662 7.95588 3.71328 7.90131 3.60395 7.79194L0.164125 4.352C-0.0547082 4.13319 -0.0547082 3.77858 0.164125 3.55986C0.382902 3.3411 0.737604 3.3411 0.956326 3.55986L3.99996 6.60351L7.04362 3.55986C7.26234 3.34121 7.61717 3.34121 7.83589 3.55986ZM3.60395 4.44035C3.71326 4.5495 3.85662 4.60429 3.99998 4.60429C4.14334 4.60429 4.2867 4.5495 4.39606 4.44035L7.83589 1.00052C8.05471 0.781654 8.05471 0.426935 7.83589 0.208157C7.61708 -0.0105477 7.26234 -0.0105477 7.04364 0.208157L3.99998 3.25181L0.956345 0.208157C0.737622 -0.0105477 0.382921 -0.0105477 0.164143 0.208157C-0.0546899 0.426935 -0.0546899 0.781654 0.164143 1.00052L3.60395 4.44035Z"
          fill="#C9AB81"
        />
      </svg>
    </div>

    <div
      v-if="active"
      class="font-light z-10 absolute top-full uppercase w-full py-2 text-select bg-black lg:text-base text-sm"
    >
      <ul>
        <li
          v-for="(option) in options"
          :key="getOptionValue(option)"
          class="py-1 px-3 transition-all duration-150 hover:text-select-hover cursor-pointer"
          @click="optionClick(option)"
        >
          {{ getOptionLabel(option) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    selectValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('select', val)
      }
    },
    selectedLabel () {
      const option = this.options.find(option => this.getOptionValue(option) === this.value)
      return this.getOptionLabel(option)
    }
  },

  methods: {
    getOptionValue (val) {
      return val.value || val
    },
    getOptionLabel (val) {
      return val.label || val
    },
    optionClick (val) {
      this.selectValue = this.getOptionValue(val)
      this.close()
    },
    close () {
      this.active = false
    }
  }
}
</script>
