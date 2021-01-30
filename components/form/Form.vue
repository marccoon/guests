<template>
  <form class="bg-form w-full"
        :class="{
              'lg:px-10 xl:py-20 lg:py-12 md:px-4 py-8 sm:px-3 px-1': title,
              'lg:px-10 xl:py-12 lg:py-10 md:px-4 sm:py-6 sm:p-3': !title
            }"
        @submit.prevent="submitHandler"
  >
    <div class="sm:w-11/12 w-full mx-auto">
      <Title
        v-if="title"
        :title="$t('form.title')"
        class="mx-auto text-center"
      />
      <div class="flex xl:justify-between lg:justify-around justify-center flex-wrap">
        <div class="xl:w-1/4 md:w-1/3 sm:w-1/2 w-full lg:max-w-64 max-w-56 lg:px-0 px-2 md:m-0 m-2">
          <Select
            class="w-full mx-auto"
            :active="personSelect"
            :options="personOptions"
            :value="currentPerson"
            :placeholder="$t('form.placeholder1')"
            @select="currentPerson = $event"
            @change="personSelect = $event"
          />
        </div>
        <div class="xl:w-1/4 md:w-1/3 sm:w-1/2 lg:max-w-64 max-w-56 w-full flex flex-row lg:px-0 px-2 md:m-0 m-2">
          <input type="date"
                 v-model="date"
                 class="date-time font-light bg-transparent cursor-pointer border border-select text-select lg:text-base text-sm w-7/12 p-3"
          />
          <input type="time"
                 v-model="time"
                 min="15:00"
                 max="23:30"
                 step="600"
                 class="date-time font-light bg-transparent cursor-pointer border border-select text-select lg:text-base text-sm w-5/12 p-3"
          />
        </div>
        <div class="xl:w-1/4 md:w-1/3 sm:w-1/2 w-full lg:max-w-64 max-w-56 lg:px-0 px-2 md:m-0 m-2">
          <client-only>
            <PhoneMaskInput
              v-model="phone"
              autoDetectCountry
              defaultCountry="by"
              showFlag
              :placeholder="$t('form.placeholder2')"
              wrapperClass="font-light border border-select flex justify-center align-middle text-select lg:text-base text-sm w-full p-2"
              inputClass="date-time placeholder-select bg-transparent"
              flagClass=""
            />
          </client-only>
        </div>

        <div
          class="xl:w-1/5 md:w-1/3 sm:w-1/2 w-full md:max-w-none lg:max-w-64 max-w-56  lg:px-0 px-2 lg:mt-6 md:mt-4 md:m-0 m-2 xl:m-0 ">

          <Button
            class="w-full mx-auto"
            :btn="$t('form.btn')"
            :class="{'pointer-events-none': success}"
          />

        </div>

        <div v-if="success"
             class="text-center mt-5 w-full font-light bg-transparent text-select lg:text-base text-sm w-full">
          {{ $t('form.message') }}
        </div>

      </div>
    </div>
  </form>
</template>

<script>
import Title from "~/components/app/Title"
import Select from "~/components/form/Select"
import Button from "~/components/form/Button"

export default {
  name: "Form",
  props: {
    title: {
      type: String,
      required: false,
    },

  },
  components: {Title, Select, Button},
  data: () => ({
    personSelect: false,
    personOptions: [1, 2, 3, 4, 5, 6, 7, '8 и более'],
    currentPerson: 0,
    phone: '',
    date: '',
    time: '',
    success: false
  }),
  methods: {
    submitHandler() {
      console.log(
        this.personOptions[this.currentPerson],
        this.date,
        this.time,
        this.phone
      )
      this.success = true
    }
  }
}
</script>

<style scoped>

.date-time::-webkit-calendar-picker-indicator {
  filter: invert(1);
  margin-left: 2px;
}
</style>
