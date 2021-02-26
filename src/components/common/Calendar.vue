
<template>
  <div id="calendar">
    <!-- 年份 月份 -->
    <div class="month">
      <ul>
        <!--点击会触发pickpre函数，重新刷新当前日期 -->
        <li class="arrow" @click="pickPre(currentYear, currentMonth)">&lt;</li>
        <li class="year-month">
          <span class="choose-year">{{ currentYear }}年</span>
          <span class="choose-month">{{ currentMonth }}月</span>
        </li>
        <li class="arrow" @click="pickNext(currentYear, currentMonth)">&gt;</li>
      </ul>
    </div>
    <!-- 星期 -->
    <ul class="weekdays">
      <li>日</li>
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
    </ul>
    <!-- 日期 -->
    <ul class="days">
      <!-- 核心 v-for循环 每一次循环用<li>标签创建一天 -->
      <li v-for="(dayobject, i) in days" :key="i">
        <!--本月-->
        <!--如果不是本月  占个坑-->
        <span
          v-if="dayobject.day.getMonth() + 1 != currentMonth"
          class="other-month"
          >{{ dayobject.day.getDate() }}</span
        >
        <!--如果是本月  还需要判断是不是这一天-->
        <span v-else>
          <!--今天  同年同月同日-->
          <span
            v-if="
              dayobject.day.getFullYear() == new Date().getFullYear() &&
              dayobject.day.getMonth() == new Date().getMonth() &&
              dayobject.day.getDate() == new Date().getDate()
            "
            class="active"
            @click="getDayTime(dayobject.day)"
            >{{ dayobject.day.getDate() }}</span
          >
          <span
            v-else
            @click="getDayTime(dayobject.day, i)"
            :class="{ clickStyle: i == yIndex }"
            >{{ dayobject.day.getDate() }}</span
          >
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "calendar",
  data() {
    return {
      currentDay: 1,
      currentMonth: 1,
      currentYear: 1970,
      currentWeek: 1,
      days: [],
      birth: {},
      yIndex: -1,
      week: -1,
    };
  },
  created: function () {
    // 在vue初始化时调用
    this.initData(null);
  },
  methods: {
    initData: function (cur) {
      // var leftcount = 0 // 存放剩余数量
      var date;
      if (cur) {
        date = new Date(cur);
      } else {
        var now = new Date(); //Sat Feb 06 2021 18:14:41 GMT+0800
        var d = new Date(this.formatDate(now.getFullYear(), now.getMonth(), 1)); //返回到上一个月的第一天(2021-01-01)Fri Jan 01 2021 08:00:00 GMT+0800
        d.setDate(35); //Thu Feb 04 2021 08:00:00 GMT+0800 进位到下个月的4~7天
        date = new Date(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1)); //Thu Feb 04 2021 08:00:00 GMT+0800
      }
      this.currentDay = date.getDate(); //4
      this.currentYear = date.getFullYear(); //2021
      this.currentMonth = date.getMonth() + 1; //2
      this.currentWeek = date.getDay(); // 获得星期数4 1...6,0
      if (this.currentWeek === 0) {
        this.currentWeek = 7;
      }
      var str = this.formatDate(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      );
      this.days.length = 0;
      // 今天是周日，放在第一行第7个位置，前面6个
      // 初始化本周
      for (var i = this.currentWeek; i >= 0; i--) {
        var d2 = new Date(str);
        d2.setDate(d2.getDate() - i);
        var dayobjectSelf = {}; // 用一个对象包装Date对象  以便为以后预定功能添加属性
        dayobjectSelf.day = d2;
        this.days.push(dayobjectSelf); // 将日期放入data 中的days数组 供页面渲染使用
      }
      // 其他周
      for (var j = 1; j <= 35 - this.currentWeek; j++) {
        var d3 = new Date(str);
        d3.setDate(d3.getDate() + j);
        var dayobjectOther = {};
        dayobjectOther.day = d3;
        this.days.push(dayobjectOther);
      }
    },
    getDayTime(el, i) {
      switch (el.getDay()) {
        case 0:
          this.week = "日";
          break;
        case 1:
          this.week = "一";
          break;
        case 2:
          this.week = "二";
          break;
        case 3:
          this.week = "三";
          break;
        case 4:
          this.week = "四";
          break;
        case 5:
          this.week = "五";
          break;
        case 6:
          this.week = "六";
          break;
      }
      this.birth = {
        year: el.getFullYear(),
        month: el.getMonth() + 1,
        day: el.getDate(),
        week: this.week,
      };
      this.yIndex = i;
      this.$emit("birthday", this.birth);
    },
    pickPre: function (year, month) {
      this.yIndex = -1;
      // setDate(0); 上月最后一天
      // setDate(-1); 上月倒数第二天
      // setDate(dx) 参数dx为 上月最后一天的前后dx天
      var d = new Date(this.formatDate(year, month, 1));
      d.setDate(0);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1)); //2021-01-01
    },
    pickNext(year, month) {
      this.yIndex = -1;
      var d = new Date(this.formatDate(year, month, 1));
      d.setDate(35);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    // 返回 类似 2016-01-02 格式的字符串
    formatDate(year, month, day) {
      var y = year;
      var m = month;
      if (m < 10) m = "0" + m;
      var d = day;
      if (d < 10) d = "0" + d;
      return y + "-" + m + "-" + d;
    },
  },
};
</script>
<style>
#calendar {
  font-size: 12px;
  background: #fff;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
}
.month {
  width: 100%;
  color: #000;
  font-size: 600;
}
.month ul {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
}
.year-month {
  display: flex;
  align-items: center;
}
.arrow {
  font-size: 20px;
  padding: 0 27px;
}
.choose-month {
  text-align: center;
}
.weekdays {
  margin: 0;
  padding: 10px;
  display: flex;
  align-items: center;
  color: #999;
  justify-content: space-around;
}
/* .weekdays li {
  display: inline-block;
  width: 13.6%;
  text-align: center;
} */
.days {
  padding: 10px;
  background: #ffffff;
  margin: 0;
  display: flex;
  align-items: center;
  padding-left: 30px;
  /* justify-content: space-around; */
  flex-wrap: wrap;
}
.days li {
  list-style-type: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #000;
}
.days li .active {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fc7297;
  color: #fff;
}
.days li .other-month {
  display: none;
}
.clickStyle {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #ccc;
  color: #fff;
}
</style>
