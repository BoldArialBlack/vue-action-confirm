export const sourcecodeA = `<template>
  <div class="vd-demo__block vd-demo__block-2">
    <vue-action-confirm
      :title="title"
      @confirm="onConfirm"
    />
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title: '确定删除吗'
      }
    },
    methods: {
      onConfirm() {
        console.log('confirm');
      }
    }
  }
</script>`

export const sourcecodeB = `<template>
  <div class="vd-demo__block vd-demo__block-2">
    <vue-action-confirm
      :title="title"
      disabled
      @confirm="onConfirm"
    >
      <el-button
        slot="reference"
        disabled
        type="text-primary"
        class="delete-btn">删除按钮</el-button>
    </vue-action-confirm>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title: '确定删除吗'
      }
    },
    methods: {
      onConfirm() {
        console.log('confirm');
      }
    }
  }
</script>`

export const sourcecodeC = `<template>
<div class="vd-demo__block vd-demo__block-2">
<vue-action-confirm
  :title="title"
  disabled
  @confirm="onConfirm"
>
  <el-button
    slot="reference"
    disabled
    type="text-primary"
    class="delete-btn">删除按钮</el-button>
</vue-action-confirm>
</div>
</template>

<script>
  export default {
    data () {
      return {
        title: '确定删除吗'
      }
    },
    methods: {
      onConfirm() {
        console.log('confirm');
      }
    }
  }
</script>`

export const sourcecodeD = `<template slot="source">
<div class="vd-demo__block vd-demo__block-2">
<el-table
:data="tableData"
>
<el-table-column
  prop="id"
  label="次数"
  data-align="right"
  width="68"/>
<el-table-column
  prop="date"
  label="更新日期"
  width="165"/>
<el-table-column
  prop="name"
  label="姓名"
  width="110"
/>
<el-table-column
  prop="address"
  width="250"
  label="地址"/>
<el-table-column
  label="操作"
  width="150">
  <template slot-scope="scope">
    <el-button
      type="text"
      class="edit-btn">编辑</el-button>
    <vue-action-confirm
      title="确定删除吗？"
      @confirm="onConfirm(scope.row)"
    >
      <el-button
        slot="reference"
        type="text"
        class="delete-btn">删除</el-button>
    </vue-action-confirm>
  </template>
</el-table-column>
</el-table>
</div>
</template>
<script>
  export default {
    data () {
      return {
        title: '确定删除吗',
        tableData: [{
          id: 123,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tags: ["标签1", "标签很长很长很长很长很长很长", "标签很长很长很长很长很长很长", "标签"],
        }, {
          id: 223,
          date: '2016-05-04',
          name: '小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tags: ["标签1", "标签很长很长很长很长很长很长", "标签很长很长很长很长很长很长", "标签"],
        }, {
          id: 32,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tags: ["标签1", "标签很长很长很长很长很长很长", "标签很长很长很长很长很长很长", "标签"],
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tags: ["标签1", "标签很长很长很长很长很长很长", "标签很长很长很长很长很长很长", "标签"],
        }]
      }
    },
    methods: {
      onConfirm() {
        console.log('confirm');
      }
    }
  }
</script>`

export const sourcecodeE = `<div class="vd-demo__block vd-demo__block-2">
<vm-action-confirm type="circle" :percentage="70" :status="status"></vm-action-confirm>
</div>
<div class="vd-demo__block vd-demo__block-2">
<vm-button-group>
  <vm-button type="default" @click="status = 'exception'">错误</vm-button>
  <vm-button type="default" @click="status = 'info'">信息</vm-button>
  <vm-button type="default" @click="status = 'warning'">警告</vm-button>
  <vm-button type="default" @click="status = 'success'">成功</vm-button>
</vm-button-group>
<vm-button-group>
  <vm-button type="default" @click="increase">增加</vm-button>
  <vm-button type="default" @click="decrease">减少</vm-button>
</vm-button-group>
</div>

<script>
  export default {
    data () {
      return {
        percentage: 70,
        status: 'info'
      }
    },
    methods: {
      increase () {
        if (this.percentage === 100) return
        this.percentage += 10
      },
      decrease () {
        if (this.percentage === 0) return
        this.percentage -= 10
      }
    }
  }
</script>
`