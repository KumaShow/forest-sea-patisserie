<template>
  <Form ref="form" class="p-8" v-slot="{ errors }" @submit="submitOrder">
    <h2 class="mb-6 fs-5">訂購人資料</h2>
    <div class="mb-6">
      <label for="email" class="form-label">
        Email <span class="text-danger">*</span>
      </label>
      <Field
        :class="{ 'is-invalid': errors['email'] }"
        id="email"
        class="form-control"
        name="email"
        placeholder="請輸入 Email"
        type="email"
        rules="email|required"
        v-model="order.user.email"
      ></Field>
      <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
    </div>

    <div class="mb-6">
      <label for="name" class="form-label">
        訂購人姓名 <span class="text-danger">*</span>
      </label>
      <Field
        :class="{ 'is-invalid': errors['姓名'] }"
        id="name"
        class="form-control"
        name="姓名"
        placeholder="請輸入姓名"
        rules="required"
        v-model="order.user.name"
        type="text"
      ></Field>
      <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
    </div>

    <div class="mb-6">
      <label for="tel" class="form-label">
        訂購人電話 <span class="text-danger">*</span>
      </label>
      <Field
        :class="{ 'is-invalid': errors['電話'] }"
        id="tel"
        class="form-control"
        name="電話"
        placeholder="請輸入電話"
        type="tel"
        v-model="order.user.tel"
        :rules="isPhone"
      ></Field>
      <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
    </div>

    <div class="mb-6">
      <label for="address" class="form-label">
        訂購人地址 <span class="text-danger">*</span>
      </label>
      <Field
        :class="{ 'is-invalid': errors['地址'] }"
        id="address"
        class="form-control"
        name="地址"
        placeholder="請輸入地址"
        rules="required"
        type="text"
        v-model="order.user.address"
      ></Field>
      <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
    </div>

    <div class="mb-6">
      <label for="message" class="form-label">留言</label>
      <textarea
        id="message"
        class="form-control"
        cols="20"
        rows="4"
        v-model="order.message"
      ></textarea>
    </div>
    <div class="text-end">
      <button
        type="submit"
        class="btn btn-primary"
        :disabled="!cart.carts.length"
      >
        送出訂單
      </button>
    </div>
  </Form>
</template>

<script>
import { mapActions, mapState } from "pinia";
import useCartStore from "@/stores/useCartStore";
import useToastMessageStore from "@/stores/useToastMessageStore";
const { VITE_API, VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      order: {
        user: {
          email: "",
          name: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      orderId: "",
    };
  },
  computed: {
    ...mapState(useCartStore, ["cart"]),
  },
  methods: {
    ...mapActions(useCartStore, ["getCarts"]),
    ...mapActions(useToastMessageStore, ["pushMessage"]),

    // 提交訂單
    submitOrder() {
      const url = `${VITE_API}/api/${VITE_API_PATH}/order`;
      const data = this.order;

      if (this.cart?.carts?.length) {
        this.$http
          .post(url, { data })
          .then((res) => {
            this.getCarts();
            this.$refs.form.resetForm();
            this.order.message = "";
            this.orderId = res.data.orderId;
            this.$router.push({
              name: "checkPayment",
              params: { id: this.orderId },
            });
          })
          .catch((err) => {
            this.pushMessage({
              style: "danger",
              title: "發送訂單失敗",
              content: `${err.response.data.message}`,
            });
          });
      } else {
        this.pushMessage({
          style: "danger",
          title: "請先加入商品才能送出訂單!",
        });
      }
    },

    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/; // 09開頭共10碼
      return phoneNumber.test(value)
        ? true
        : "需要正確的電話號碼: 09xx xxx xxx";
    },
  },
};
</script>
