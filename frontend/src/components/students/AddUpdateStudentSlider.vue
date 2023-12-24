<template>
  <div>
    <Sidebar v-bind:visible="isOpened" header="Sidebar"
    @update:visible="close()"
    >
      <form @submit="onSubmit" class="edit">
        <label for="fullName">Фио</label>
        <InputText id="fullName" type="text" v-model="student.fullName"/>
        <label for="date">Дата рождения</label>
        <Calendar id="date" dateFormat="dd.mm.yy" v-model="student.birthDate"/>
        <label for="date">Дата поступления</label>
        <Calendar id="date" dateFormat="dd.mm.yy" v-model="student.admissionYear"/>
        <label for="univer">Универ</label>
        <Dropdown id="univer" v-model="selectedUniversity" :options="university" optionLabel="name" placeholder="Выберите универ" class="w-full md:w-14rem" />
        <label for="univer">Группа</label>
        <Dropdown id="univer" v-model="selectedGroup" :options="groups" optionLabel="name" placeholder="Выберите универ" class="w-full md:w-14rem" />
        <Button type="submit" style="margin-top: 10px;" label="Submit" />
      </form>
    </Sidebar>
  </div>
</template>

<script>
import Sidebar from 'primevue/sidebar';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext'
export default {
  name: 'add-update-slider',
  components: {Sidebar,Calendar,Dropdown,Button, InputText},
  props: {
    isOpened:{type: Boolean, default: false}
  },
  data: () => ({
    selectedUniversity: null,
    selectedGroup: null,
    university: [],
    groups: [],
    student: {
      fullName: '',
      birthDate: '',
      admissionYear: '',
      groupCode: '',
    }
  }),
  async mounted() {
    const univers = await this.$axios.get('university')
    this.university = univers.data;
  },
  watch: {
    selectedUniversity: {
      async handler(val) {
        if (val) {
          const groups = await this.$axios.get(`group?code=${val.code}`);
          this.groups = groups.data;
        }
      }
    },
    selectedGroup: {
      async handler(val) {
        if (val) {
          this.student.groupCode = val.code;
        }
      }
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const { data } = await this.$axios.post('student', this.student)
      console.log(data);
      if(data) this.$emit('updateStudents', data);
    },
    clear() {
      this.student = {
        fullName: '',
        birthDate: '',
        admissionYear: '',
        groupCode: '',
      }
    },
    close() {
      this.clear();
      this.$emit('toggleVisible', this.isOpened)
    }
  }
}
</script>

<style>

</style>