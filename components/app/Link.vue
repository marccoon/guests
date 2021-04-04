<template>
  <n-link
    v-if="linkName"
    :to="localePath(`/${link}`)"
    class="text-link flex items-center w-max hover:text-link-hover transition-all duration-150"
  >
    <span class="uppercase underline lg:text-base text-xs">{{ linkName }}</span>
    <svg
      class="lg:ml-4 ml-2 fill-arrow hover:fill-arrowHover"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M4.4498 0.205133C4.72321 -0.068386 5.16647 -0.068386 5.43999 0.205133L9.73991 4.50492C9.87634 4.64162 9.94483 4.82082 9.94483 5.00002C9.94483 5.17922 9.87661 5.3584 9.73991 5.49506L5.43999 9.79484C5.16647 10.0684 4.72321 10.0684 4.4498 9.79484C4.17635 9.52137 4.17635 9.078 4.4498 8.80459L8.25437 5.00005L4.4498 1.19548C4.17649 0.922072 4.17649 0.478536 4.4498 0.205133ZM5.55043 5.49506C5.68685 5.35842 5.75534 5.17922 5.75534 5.00002C5.75534 4.82082 5.68685 4.64162 5.55043 4.50492L1.25064 0.205132C0.977052 -0.0683861 0.533653 -0.0683861 0.260181 0.205132C-0.0131998 0.47865 -0.0131998 0.922072 0.260181 1.19545L4.06475 5.00002L0.260181 8.80457C-0.0131999 9.07797 -0.0131999 9.52135 0.260181 9.79482C0.533653 10.0684 0.977052 10.0684 1.25064 9.79482L5.55043 5.49506Z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="10"
            height="10"
            transform="translate(0 10) rotate(-90)"
          />
        </clipPath>
      </defs>
    </svg>
  </n-link>
</template>
<script>
export default {
  name: 'Link',
  props: {
    linkName: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
