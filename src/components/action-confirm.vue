<template>
  <el-popover
    :ref="popperRef"
    v-bind="popperProps"
    v-model="visible"
    :disabled="disabled"
    popper-class="vue-action-confirm-popover"
    @show="onShow"
    @hide="onHide"
    @visible-change="onVisibleChange"
  >
    <div class="vue-action-confirm">
      <slot>
        <i
          class="vue-action-confirm-tip-icon el-icon-warning-outline"
        />{{ title }}
      </slot>
    </div>
    <div class="vue-action-confirm-footer">
      <slot name="footer">
        <el-button
          v-if="showConfirm"
          :class="btnOkClass"
          :disabled="btnOkDisabled"
          :loading="loading"
          type="text"
          @click="onConfirm"
        >{{ btnOkLabel }}</el-button>
        <el-button
          v-if="showCancel"
          :class="btnCancelClass"
          :disabled="loading || btnCancelDisabled"
          type="text"
          @click="onCancel"
        >{{ btnCancelLabel }}</el-button>
      </slot>
    </div>
    <slot
      slot="reference"
      name="reference"
    >
      <el-button
        slot="reference"
        :class="btnReferenceClass"
        :disabled="disabled"
        type="text"
      >{{ btnReferenceLabel }}</el-button>
    </slot>
  </el-popover>
</template>

<script>
import {
  Icon,
  Button,
  Popover
} from 'element-ui';

export default {
  name: 'ActionConfirm',

  components: {
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Popover.name]: Popover
  },

  props: {
    title: {
      type: String,
      default: ''
    },
    popperRef: {
      type: String,
      default: 'popover'
    },
    popperProps: {
      type: Object,
      default: function () {
        return {
          placement: 'top'
        };
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    btnOkClass: {
      type: String,
      default: 'vue-action-confirm-ok'
    },
    btnOkLabel: {
      type: String,
      default: '确认'
    },
    btnOkDisabled: {
      type: Boolean,
      default: false
    },
    btnCancelClass: {
      type: String,
      default: 'vue-action-confirm-cancel'
    },
    btnCancelLabel: {
      type: String,
      default: '取消'
    },
    btnCancelDisabled: {
      type: Boolean,
      default: false
    },
    btnReferenceClass: {
      type: String,
      default: 'reference-btn'
    },
    btnReferenceLabel: {
      type: String,
      default: '删除'
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      visible: false
    };
  },

  methods: {
    onVisibleChange() {
      this.$emit('visible-change');
    },

    onShow() {
      this.$emit('show');
    },

    onHide() {
      this.$emit('hide');
    },

    onConfirm() {
      this.visible = false;
      this.$emit('confirm');
    },

    onCancel() {
      this.visible = false;
      this.$emit('cancel');
    }
  }
};
</script>
