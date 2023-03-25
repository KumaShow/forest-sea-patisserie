<template>
  <div ref="chart"></div>
</template>

<script>
import c3 from "c3";
import { mapActions, mapState } from "pinia";
import useOrderStore from "@/stores/OrderStore";

export default {
  data() {
    return {
      chart: null,
    };
  },
  computed: {
    ...mapState(useOrderStore, ["chartDataCategory", "orders"]),
  },
  watch: {
    orders() {
      this.getCategoryChartData();
    },
    chartDataCategory() {
      this.loadChart();
    },
  },
  methods: {
    ...mapActions(useOrderStore, ["getCategoryChartData"]),

    initChartCategory() {
      this.chart = null;
      this.chart = c3.generate({
        bindto: this.$refs.chart,
        size: {
          height: 300,
          width: 480,
        },
        data: {
          columns: this.chartDataCategory,
          type: "pie",
        },
        legend: {
          position: "right",
        },
      });
    },

    loadChart() {
      this.chart.load({
        columns: this.chartDataCategory,
      });
    },
  },
  mounted() {
    this.initChartCategory();
  },
};
</script>
