<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">設定公休日期</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <DatePicker
            class="date-picker"
            v-model="date"
            :attributes="attributes"
            @dayclick="onDayClick"
          />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="closeModal">
            確定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";
import useCalendarStore from "@/stores/CalendarStore";
import { mapActions, mapState } from "pinia";
import { DatePicker } from "v-calendar";

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      modal: null,
      date: new Date(),
    };
  },
  computed: {
    ...mapState(useCalendarStore, ["dayOff", "attributes"]),
  },
  methods: {
    ...mapActions(useCalendarStore, ["onDayClick"]),

    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
