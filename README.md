# 星彩乐亨网 - 静态门户官网

一个简洁、响应式的静态网站，包含：首页、关于我们、产品服务、新闻动态、联系我们等模块，并在底部显示备案信息“星彩乐亨网 粤ICP备18006391号”。

## 目录结构
```
/（项目根）
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
└── README.md
```

## 本地预览
使用任何静态服务器均可，例如：

### Python 3
```bash
cd "星彩乐亨网"
python3 -m http.server 8080
```
打开浏览器访问 http://localhost:8080

### Node.js（npx）
```bash
cd "星彩乐亨网"
npx serve -l 8080 .
```
打开浏览器访问 http://localhost:8080

## 自定义
- 在 `index.html` 修改文案或模块顺序
- 在 `assets/css/styles.css` 调整配色与布局
- 在 `assets/js/main.js` 修改导航与交互逻辑

## 参考
- 内容结构与版块灵感参考：`https://huixuiot.com/`


