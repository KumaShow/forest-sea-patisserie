<template>
  <div class="border rounded-4 p-6 bg-white">
    <div class="">
      <div class="mb-8 d-flex justify-content-between align-items-center">
        <h3 class="fs-4 d-flex align-items-center">
          <span
            class="material-symbols-outlined me-4"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="近 10 筆訂單內已付款總額"
          >
            insights
          </span>
          營業額
        </h3>
        <p class="fs-3">NT$ {{ ordersTotal }}</p>
      </div>
    </div>
    <!-- 已付款營業額圖表 -->
    <div class="text-center">
      <div ref="chart" class="d-inline-block"></div>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import c3 from "c3";
import Tooltip from "bootstrap/js/dist/tooltip";
import { mapState } from "pinia";
import useOrderStore from "@/stores/OrderStore";

export default {
  data() {
    return {
      chart: null,
    };
  },
  computed: {
    ...mapState(useOrderStore, ["chartDataTotal", "ordersTotal"]),
  },
  watch: {
    // 監聽 Data 觸發圖表更新(僅在 Dashboard 初始有效)
    chartDataTotal() {
      this.loadChart();
    },
  },
  methods: {
    // 初始化 Total Chart
    initChartTotal() {
      this.chart = null;
      this.chart = c3.generate({
        bindto: this.$refs.chart,
        size: {
          height: 80,
          width: 170,
        },
        data: {
          columns: [["", 0, 0, 0, 0, 0]],
          type: "bar",
        },
        bar: {
          width: {
            ratio: 0.2,
          },
        },
        legend: {
          show: false,
        },
        point: {
          show: false,
        },
        axis: {
          x: {
            show: false,
            tick: {
              count: 3,
            },
          },
          y: {
            show: false,
          },
        },
        tooltip: {
          format: {
            title: function () {
              return "";
            },
            // 將 hover 數值 format 成 $x,xxx
            value: function (value) {
              const format = d3.format("$,");
              return format(value);
            },
          },
        },
      });
    },

    loadChart() {
      this.chart.load({
        columns: [["", ...this.chartDataTotal]],
      });
    },
  },
  mounted() {
    document
      .querySelectorAll('[data-bs-toggle="tooltip"]')
      .forEach((tooltipTriggerEl) => {
        new Tooltip(tooltipTriggerEl);
      });
    this.initChartTotal();
  },
};
</script>
