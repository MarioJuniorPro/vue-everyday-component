<template>
  <div>
    Github activity
    <div class="contribuions">
      <div v-for="day of daysOfYear"
           class="day"
           :class="{poor: day.score > 0 && day.score < 3, good: day.score >= 3}"
           :title="day.title">
      </div>
    </div>
  </div>
</template>

<script>

import * as moment from 'moment'

export default {
  name: 'github-activity',
  mounted() {
    console.log('MONTH CREATED!')
    this.$http.get('https://api.github.com/users/MarioJuniorPro/events?sort=created_at&per_page=1000&access_token=189237662398c3cdd5eb036e94b127749fb0fb30').then((resp) => {
      this.events = this.transformGithubData(resp.body)

      this.daysOfYear = this.createDaysofYearMatrix(this.year)
    })
  },
  data() {
    return {
      events: [],
      year: 2017,
      daysOfYear: 0
    }
  },
  computed: {

  },
  methods: {
    transformGithubData(events) {
      return events
        .filter((action) => ['PushEvent', 'ForkEvent', 'IssueEvent'].indexOf(action.type) > -1)
        .map((action) => {
          let actionDate = moment(action.created_at)
          return {
            id: action.id,
            created_at: action.created_at,
            date: actionDate,
            day: actionDate.date(),
            day_of_week: actionDate.day(),
            month: actionDate.month() + 1,
            year: actionDate.year(),
            day_of_year: actionDate.dayOfYear()
          }
        })
    },
    generateDaysOfYear(year) {
      let days_in_year = moment({ year, day: 31, month: 11 }).dayOfYear()
      return Array(days_in_year).fill(0).reduce((acc, cur, idx) => {
        acc[idx + 1] = 0;
        return acc;
      }, {})
    },
    generateContributionsArray() {

    },
    createDaysofYearMatrix(year) {
      let daysOfYear = this.generateDaysOfYear(year)
      let contributions = this.getContributionsByDay()
      let result = Object.assign(daysOfYear, contributions);

      const firstDayofYear = moment({ year, day: 1, month: 0 }).day()

      console.log(firstDayofYear)
      result = Object.entries(result).map((elem) => {
        let key = elem[0]
        let val = elem[1]
        return {
          day: key,
          score: val,
          title: `${moment().dayOfYear(key).format("DD/MM/YYYY")} - ${val} contributions`
        }
      })


      return result
    },
    getContributionsByDay() {
      return this.events.reduce((acc, cur) => {
        acc[cur.day_of_year] = acc[cur.day_of_year] || 0
        acc[cur.day_of_year]++
        return acc
      }, {})
    }
  }
}
</script>

<style>
.contribuions {
  margin: 0 auto;
  height: 250px;
  width: 800px;
  outline: 1px solid grey;

  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
}

.contribuions .day {
  padding: 1px;
  margin: 2px;
  width: 12px;
  height: 12px;
  font-size: 6px;
  background-color: lightgrey;
}

.day.poor {
  background-color: lightgreen;
}

.day.good {
  background-color: green;
}
</style>
