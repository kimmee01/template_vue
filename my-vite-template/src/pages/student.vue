<route lang="yaml">
meta:
  layout: public
</route>

<template>
  <div>
    <table class="border-separate border-spacing-5 border border-slate-400">
      <thead>
        <tr>
          <th class="border border-slate-300 bg-gray-100">
            CODE
          </th>
          <th class="border border-slate-300 bg-gray-100">
            NAME
          </th>
          <th class="border border-slate-300 bg-gray-100">
            GRADE
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in studentList" :key="student.code">
          <td class="border border-slate-300">
            {{ student.code }}
          </td>
          <td class="border border-slate-300">
            {{ student.fName }} {{ student.lName }}
          </td>
          <td class="border border-slate-300">
            {{ student.grade }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useAppStore } from '../store/app-store'

export default {
  data() {
    let studentList = []
    let gradeArray = ['A', 'B', 'C', 'D']
    for (let i = 1; i < 50; i++) {
      studentList.push({
        code: '6116' + String(i).padStart(4, 0),
        fName: 'Sirapop',
        lName: 'Koonsinchai',
        grade: gradeArray[Math.floor(Math.random() * (4))],
      })
    }
    return {
      studentList,
    }
  },
  computed: {
    ...mapState(useAppStore, ['lang']),
  },
}
</script>
