# progress
## 进度条组件
### 1、介绍
进度条组件基于原生开发，自定义封装，使用是，需引入对应的css文件和index.js文件
### 2、使用方式
<script>
var progress = new Progress({
  width: 500,  // 进度条宽带
  height: 20,  // 进度条高度
  backgroundColor: 'tomtat', // 进度条背景色
  fontColor: '#333333',      // 百分比字体颜色
  fontWeight: 400,           // 百分比字重
  percentage: 0              // 百分比
})
</script>

### 3、api
autoPlay(); 自动读满进度条
