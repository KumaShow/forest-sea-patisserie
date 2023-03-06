<template>
  <section class="order-process pt-4 pb-3 mb-3 mb-lg-7">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-9 col-md-7 timeline timeline-step-2"></div>
      </div>
      <div class="row">
        <div class="col-3 col-md-5">
          <div class="timeline-pointer text-center step-1 active">
            <p>購物車</p>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <div class="timeline-pointer text-center step-2" :class="stepCheck">
            <p>確認結帳</p>
          </div>
        </div>
        <div class="col-3 col-md-5">
          <div
            class="timeline-pointer text-center step-3"
            :class="stepComplete"
          >
            <p>訂單成立</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["step"],
  computed: {
    stepCheck() {
      if (this.step === 2 || this.step === 3) {
        return "active";
      } else {
        return "";
      }
    },
    stepComplete() {
      if (this.step === 3) {
        return "active";
      } else {
        return "";
      }
    },
  },
};
</script>

<style scope lang="scss">
.timeline {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 9px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: green;
  }
  &-step-2 {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 9px;
      left: 0;
      right: 50%;
      height: 2px;
      background-color: green;
    }
    &::after {
      content: "";
      position: absolute;
      top: 9px;
      left: 50%;
      right: 0;
      height: 2px;
      background-color: green;
    }
  }
  &-step-3 {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 9px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: green;
    }
  }

  &-pointer {
    position: relative;
    color: white;
    p {
      padding-top: 24px;
      margin-bottom: 0;
      line-height: 1.5;
    }
    &::before {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 20px;
      border: 1px solid gray;
      border-radius: 50%;
      background-color: gray;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      z-index: 1;
    }
    &.step-1::before {
      content: "1";
    }
    &.step-2::before {
      content: "2";
    }
    &.step-3::before {
      content: "3";
    }
    &.active {
      color: green;
      &::before {
        color: white;
        background-color: green;
        border-color: green;
      }
    }
  }
}
</style>
