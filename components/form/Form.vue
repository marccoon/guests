<template>
  <form
    class="bg-form w-full lg:px-10 md:px-4 px-3"
    :class="{
      'xl:py-20 lg:py-12 py-8': title,
      'xl:py-12 lg:py-10 py-6': !title,
    }"
    @submit.prevent="submitHandler"
  >
    <div class="sm:w-11/12 w-full mx-auto">
      <Title
        v-if="title"
        :title="$t('form.title')"
        class="mx-auto text-center"
      />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <Select
          class="w-full"
          :options="personOptions"
          :value="currentPerson"
          :placeholder="$t('form.persons')"
          @select="currentPerson = $event"
        />

        <Select
          class="w-full"
          :options="reasonOptions"
          :value="currentReason"
          :placeholder="$t('form.reason')"
          @select="currentReason = $event"
        />

        <vue-tel-input
          ref="vueTel"
          v-model="phone"
          default-country="BY"
          :input-options="{
            showDialCode: true,
            required: true,
            placeholder: $t('form.phone'),
            styleClasses: 'date-time placeholder-select bg-transparent p-3',
          }"
          style-classes="font-light border border-select rounded-none flex justify-center align-middle text-select lg:text-base text-sm w-full h-full"
          area-required
          class="phone-wrap"
          :invalid-msg="$t('validation.requiredPhone')"
          @validate="errors.phone = $event"
        />

        <div class="w-full flex flex-row border-collapse">
          <input
            v-model="date"
            type="date"
            required
            class="date-time font-light bg-transparent cursor-pointer border border-select text-select lg:text-base text-sm w-7/12 p-3"
          >

          <input
            v-model="time"
            type="time"
            min="15:00"
            max="23:30"
            step="600"
            class="date-time font-light bg-transparent cursor-pointer border border-select text-select lg:text-base text-sm w-5/12 p-3"
          >
        </div>

        <Button
          class="w-full lg:col-span-2"
          :btn="$t('form.reserve')"
          :class="{ 'pointer-events-none': success }"
        />

        <div
          v-if="success"
          class="text-center mt-5 w-full font-light bg-transparent text-select lg:text-base text-sm"
        >
          {{ $t('form.message') }}
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Title from '~/components/app/Title'
import Select from '~/components/form/Select'
import Button from '~/components/form/Button'

const DEFAULT_VALUES = {
  person: 1,
  phone: '',
  date: '',
  time: '',
  reason: 'other'
}
export default {
  name: 'Form',
  components: { Title, Select, Button },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    personOptions: [1, 2, 3, 4, 5, 6, 7, '8 и более'],
    currentPerson: DEFAULT_VALUES.person,

    currentReason: DEFAULT_VALUES.reason,

    phone: DEFAULT_VALUES.phone,
    date: DEFAULT_VALUES.date,
    time: DEFAULT_VALUES.time,
    errors: {},
    success: false
  }),
  computed: {
    reasonOptions () {
      return [
        { value: 'business', label: this.$t('form.reasonOptions.business') },
        { value: 'romantic', label: this.$t('form.reasonOptions.romantic') },
        { value: 'birthday', label: this.$t('form.reasonOptions.birthday') },
        { value: 'third', label: this.$t('form.reasonOptions.third') },
        { value: 'other', label: this.$t('form.reasonOptions.other') }
      ]
    }
  },
  methods: {
    async submitHandler () {
      if (!this.errors.phone.valid) {
        return
      }

      try {
        const formData = new FormData()
        formData.set('person', this.personOptions[this.currentPerson].toString())
        formData.set('date', this.date)
        formData.set('time', this.time)
        formData.set('phone', this.phone)
        formData.set('reason', this.currentReason)

        await this.$axios.$post(
          'https://wp.gosti-minsk.by/wp-json/contact-form-7/v1/contact-forms/5/feedback',
          formData
        )
        this.success = true
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
        if (e.res?.invalid_fields) {
          this.success = true
          // eslint-disable-next-line no-console
          console.error(e.res.invalid_fields)
        }
      } finally {
        this.currentPerson = DEFAULT_VALUES.person
        this.phone = DEFAULT_VALUES.phone
        this.date = DEFAULT_VALUES.date
        this.time = DEFAULT_VALUES.time
        this.currentReason = DEFAULT_VALUES.reason
        this.errors = {}
      }
    }
  }
}
</script>

<style scoped>
.date-time::-webkit-calendar-picker-indicator {
  filter: invert(1);
  margin-left: 2px;
}
::v-deep .vti__dropdown-list.below {
  top: 48px;
}
</style>
