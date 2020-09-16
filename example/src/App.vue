<template>
  <div id="app" class="vue-action-confirm">
    <demonstration
        tag="h2"
        title="ActionConfirm 二次确认组件"
        description="一般用于表格中的二次确认。"
        :show-content="false">
    </demonstration>
    <demonstration
      title="基本"
      :highlight="sourcecodeA"
      :multiple="true"
    >
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2">
          <!-- <span class="vd-demo__demonstartion">默认文字</span> -->
          <vue-action-confirm
            :title="title"
            @confirm="onConfirm"
          />
        </div>
      </template>
      <!-- <template slot="explanation">
        <code>Progress</code> 组件设置 <code>percentage</code> 属性即可，表示进度条对应的百分比，必填，必须在 <code>0-100</code>。
      </template> -->
    </demonstration>
    <demonstration
      title="自定义"
      :highlight="sourcecodeB"
      :multiple="true"
    >
      <template slot="source">
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
      <template slot="explanation">
        组件设置 <code>disabled</code> 属性即可取消弹出触发
      </template> 
    </demonstration>
    <demonstration
        title="自定义弹出框内容"
        :highlight="sourcecodeD"
        >
      <template slot="source">
        <vue-action-confirm
        @confirm="onConfirm"
      >
        自定义弹出框内容
      </vue-action-confirm>
      </template>
    </demonstration>
    <demonstration
        title="基本场景"
        :highlight="sourcecodeC">
      <template slot="source">
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
    </demonstration>
  </div>
</template>

<script>
  import { sourcecodeA, sourcecodeB, sourcecodeC, sourcecodeD, sourcecodeE } from './template'

  export default {
    data () {
      return {
        sourcecodeA,
        sourcecodeB,
        sourcecodeC,
        sourcecodeD,
        sourcecodeE,
        title: '确定删除吗？',
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
</script>

<style lang="less" rel="stylesheet/less">
  #app {
    margin: 60px auto;
  }
</style>
