<template>
  <main class="faq container py-11 main-height">
    <h2 class="text-center mb-10 font-serif">常見問題</h2>
    <div class="accordion rounded-1 mb-10" id="accordionQA">
      <!-- 保存方式 -->
      <div class="accordion-item">
        <h3 class="accordion-header" id="heading1">
          <button
            class="accordion-button fs-5 fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-expanded="true"
            aria-controls="collapse1"
          >
            保存方式 ?
          </button>
        </h3>
        <div
          id="collapse1"
          class="accordion-collapse collapse show"
          aria-labelledby="heading1"
          data-bs-parent="#accordionQA"
        >
          <div class="accordion-body">
            <p>為保有食品最佳賞味期限，建議您拿到餐點後盡快食用完畢。</p>
            <br />
            <p class="mb-1">詳細保存參考:</p>
            <ul>
              <li><p class="ms-0 ms-md-9">可麗露: 冷凍可保存 7 天。</p></li>
              <li>
                <p class="ms-0 ms-md-9">
                  磅蛋糕: 冷凍可保存 10 天，室溫可保存 2 天。
                </p>
              </li>
              <li>
                <p class="ms-0 ms-md-9">
                  單包裝: 冷凍可保存 14 天，室溫可保存 7 天。
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 食用方式 -->
      <div class="accordion-item">
        <h3 class="accordion-header" id="heading2">
          <button
            class="accordion-button collapsed fs-5 fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse2"
            aria-expanded="false"
            aria-controls="collapse2"
          >
            食用方式 ?
          </button>
        </h3>
        <div
          id="collapse2"
          class="accordion-collapse collapse"
          aria-labelledby="heading2"
          data-bs-parent="#accordionQA"
        >
          <div class="accordion-body">
            <p>
              從冷凍取出後，室溫退冰 5-10 分鐘後可直接食用。 <br />
              為保食物最佳賞味期，建議拆封後請盡速食用完畢。 <br />
              退冰後仍需注意硬度，請小心食用!
            </p>
          </div>
        </div>
      </div>
      <!-- 運送方式 -->
      <div class="accordion-item">
        <h3 class="accordion-header" id="heading3">
          <button
            class="accordion-button collapsed fs-5 fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse3"
            aria-expanded="false"
            aria-controls="collapse3"
          >
            運送方式 ?
          </button>
        </h3>
        <div
          id="collapse3"
          class="accordion-collapse collapse"
          aria-labelledby="heading3"
          data-bs-parent="#accordionQA"
        >
          <div class="accordion-body">
            <p>目前僅提供外帶 & 宅配。</p>
          </div>
        </div>
      </div>
      <!-- 運費計算方式 -->
      <div class="accordion-item">
        <h3 class="accordion-header" id="heading4">
          <button
            class="accordion-button collapsed fs-5 fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse4"
            aria-expanded="false"
            aria-controls="collapse4"
          >
            運費計算方式 ?
          </button>
        </h3>
        <div
          id="collapse4"
          class="accordion-collapse collapse"
          aria-labelledby="heading4"
          data-bs-parent="#accordionQA"
        >
          <div class="accordion-body">
            <p>依照訂購之禮盒大小有所不同，請私訊粉絲團或來電洽詢。</p>
          </div>
        </div>
      </div>
      <!-- 買多少有打折呢 -->
      <div class="accordion-item">
        <h3 class="accordion-header" id="heading5">
          <button
            class="accordion-button collapsed fs-5 fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse5"
            aria-expanded="false"
            aria-controls="collapse5"
          >
            買多少有打折呢 ?
          </button>
        </h3>
        <div
          id="collapse5"
          class="accordion-collapse collapse"
          aria-labelledby="heading5"
          data-bs-parent="#accordionQA"
        >
          <div class="accordion-body">
            <p>請隨時關注最新消息，或是訂閱粉絲團不錯過任何優惠 !</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
