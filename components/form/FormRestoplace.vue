<template>
  <div class="sm:w-11/12 w-full mx-auto">
    <div
      class="bg-form lg:px-10 md:px-4 px-3"
      :class="{
        'xl:py-20 lg:py-12 py-8': title,
        'xl:py-12 lg:py-10 py-6': !title,
      }"
    >
      <Title
        v-if="title"
        :title="$t('form.title')"
        class="mx-auto text-center"
      />

      <Button
        class="max-w-128 mx-auto lg:col-span-2 restoplace-click-open"
        :btn="$t('buttons.bookTable')"
        onclick="window.restoOpenModal('banquet')"
      />
    </div>
  </div>
</template>

<script>
import Title from '~/components/app/Title'
import Button from '~/components/form/Button'

export default {
  name: 'Form',
  components: { Title, Button },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
