# DC-SDK

<p>
<img src="https://img.shields.io/github/workflow/status/dvgis/dc-sdk/build"/>
<img src="https://img.shields.io/badge/license-Apache%202-blue"/>
<a href="https://www.npmjs.com/package/@dvgis/dc-sdk" target="_blank">
 <img src="https://img.shields.io/npm/v/@dvgis/dc-sdk?color=orange&logo=npm" />
</a>
<a href="https://www.npmjs.com/package/@dvgis/dc-sdk" target="_blank">
 <img src="https://img.shields.io/npm/dt/@dvgis/dc-sdk?logo=npm"/>
</a>
<a href="https://resource.dvgis.cn/dc-docs/v2.x/zh" target="_blank">
 <img src="https://img.shields.io/badge/docs-online-yellow.svg"/>
</a>
<a href="http://dc.dvgis.cn" target="_blank">
 <img src="https://img.shields.io/badge/demo-online-red.svg"/>
</a>
</p>

[**ð¨ð³ ä¸­æ**](./README_zh.md) | [**ð¬ð§English**](./README.md)

> `DC-SDK` æ¯åºäºå¼æºé¡¹ç® `Cesium` è¿è¡äºæ¬¡å¼åçäºä¸ç»´ä¸ä½ç `WebGis` åºç¨æ¡æ¶ï¼è¯¥æ¡æ¶ä¼åäºé¨å `Cesium` çä½¿ç¨æ¹å¼åå¢æ·»ä¸äºéç¨åè½ï¼æ¨å¨ä¸ºå¼åèå¿«éæå»º `WebGis` åºç¨ã

```warning
Tipsï¼æ¬æ¡æ¶æ¯ JS+GIS çæ¡æ¶åãå¼åèéè¦æä¸å®çåç«¯ææ¯å GIS ç¸å³ææ¯
```

## å®è£

`NPM / YARN` **_`(æ¨èä½¿ç¨)`_**

NPM / YARN çæ¹å¼å®è£ï¼å®è½æ´å¥½å°å `webpack` æåå·¥å·éåä½¿ç¨ã

```shell
yarn add @dvgis/dc-sdk
-------------------------
npm install @dvgis/dc-sdk
```

```js
import DC from '@dvgis/dc-sdk/dist/dc.base.min' //åºç¡å
import DcCore from '@dvgis/dc-sdk/dist/dc.core.min' //æ ¸å¿å
import DcChart from '@dvgis/dc-sdk/dist/dc.chart.min' //chartå
import DcMapv from '@dvgis/dc-sdk/dist/dc.mapv.min' //mapvå
import DcS3M from '@dvgis/dc-sdk/dist/dc.s3m.min' // s3må
import '@dvgis/dc-sdk/dist/dc.core.min.css' // ä¸»è¦æ ·å¼
```

`NPM / YARN` **_`(æéå®è£)`_**

```shell
yarn add @dvgis/dc-base
yarn add @dvgis/dc-core
yarn add @dvgis/dc-chart
yarn add @dvgis/dc-mapv
yarn add @dvgis/dc-s3m
-------------------------
npm install @dvgis/dc-base
npm install @dvgis/dc-core
npm install @dvgis/dc-chart
npm install @dvgis/dc-mapv
npm install @dvgis/dc-s3m
```

```js
import DC from '@dvgis/dc-base' //åºç¡å
import DcCore from '@dvgis/dc-core' //æ ¸å¿å
import DcChart from '@dvgis/dc-chart' //chartå
import DcMapv from '@dvgis/dc-mapv' //mapvå
import DcS3M from '@dvgis/dc-s3m' //mapvå
import '@dvgis/dc-core/dist/dc.core.min.css' // ä¸»è¦æ ·å¼
```

`CDN`

[Resources ä¸è½½é¾æ¥](https://github.com/dvgis/dc-sdk/releases)

```html
<!--åºç¡å-->
<script src="https://cdn.jsdelivr.net/npm/@dvgis/dc-sdk/dist/dc.base.min.js"></script>
<!--æ ¸å¿å-->
<script src="https://cdn.jsdelivr.net/npm/@dvgis/dc-sdk/dist/dc.core.min.js"></script>
<!--chartå-->
<script src="https://cdn.jsdelivr.net/npm/@dvgis/dc-sdk/dist/dc.chart.min.js"></script>
<!--mapvå-->
<script src="https://cdn.jsdelivr.net/npm/@dvgis/dc-sdk/dist/dc.mapv.min.js"></script>
<!--s3må-->
<script src="https://cdn.jsdelivr.net/npm/@dvgis/dc-sdk/dist/dc.s3m.min.js"></script>
<!--ä¸»è¦æ ·å¼-->
<link
  href="https://cdn.jsdelivr.net/npm/@dvgis/dc-sdk/dist/dc.core.min.css"
  rel="stylesheet"
  type="text/css"
/>
```

```
è¯·å° resources æ¾ç½®å·¥ç¨æ ¹ç®å½ libs/dc-sdk ä¸ï¼å¦ææ¾ç½®å°å¶ä»ç®å½ä¸ï¼æ¡æ¶å°æ æ³æ­£å¸¸è¿è¡
```

## éç½®

> éç½®ä¸»è¦ç¨äº `NPM / YARN` çæ¹å¼

ç±äº `DC` æ¡æ¶ä¸­å° `CESIUM_BASE_URL` è®¾ç½®ä¸º `./libs/dc-sdk/resources/` ï¼è¿æ ·éå° Cesium ç¸å³çéæèµæºæä»¶: `Assets` ã`Workers` ã`ThirdParty` å¤å¶å°å·¥ç¨ç `libs/dc-sdk/resources` ç®å½ä¸ä»¥ä¿è¯ä¸ç»´åºæ¯è½å¤æ­£å¸¸åç°,ä¹å¯éè¿ `DC.baseUrl` è¿è¡ `Cesium` ç¸å³çéæèµæºè·¯åºè®¾ç½®

`Webpack`

[å·¥ç¨æ¨¡æ¿](https://github.com/cavencj/dc-vue-app)

```js
// webpack.config.js

const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dvgisDist = './node_modules/@dvgis'

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(dvgisDist, 'dc-sdk/dist/resources'),
        to: 'libs/dc-sdk/resources',
      },
    ]),
  ],
}
```

`Vue2.x`

[å·¥ç¨æ¨¡æ¿](https://github.com/dvgis/dc-vue)

```js
// vue.config.js

const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dvgisDist = './node_modules/@dvgis'

module.exports = {
  // å¶ä»éç½®
  chainWebpack: (config) => {
    config.plugin('copy').use(CopywebpackPlugin, [
      [
        {
          from: path.join(dvgisDist, 'dc-sdk/dist/resources'),
          to: 'libs/dc-sdk/resources',
        },
      ],
    ])
  },
}
```

`Vue3.x`

[å·¥ç¨æ¨¡æ¿](https://github.com/dvgis/dc-vue-next)

```js
// vue.config.js

const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dvgisDist = './node_modules/@dvgis'

module.exports = {
  // å¶ä»éç½®
  chainWebpack: (config) => {
    config.plugin('copy').use(CopywebpackPlugin, [
      {
        patterns: [
          {
            from: path.join(dvgisDist, 'dc-sdk/dist/resources'),
            to: path.join(__dirname, 'dist', 'libs/dc-sdk/resources'),
          },
        ],
      },
    ])
  },
}
```


## å¼å§

```js
global.DC = DC
DC.use(DcCore) // Node æ¹å¼
DC.ready(() => {
  let viewer = new DC.Viewer(divId) // divId ä¸ºä¸ä¸ªdivèç¹çIdå±æ§å¼ï¼å¦æä¸ä¼ å¥ï¼ä¼æ æ³åå§å3Dåºæ¯
})
```

## ç¤ºä¾

|  ![picture](http://dc.dvgis.cn/examples/images/baselayer/baidu.png?v=3) | ![picture](http://dc.dvgis.cn/examples/images/baselayer/tdt.png?v=2) | ![picture](http://dc.dvgis.cn/examples/images/baselayer/arcgis.png?v=3) | ![picture](http://dc.dvgis.cn/examples/images/mini-scene/china.gif) |
|  :-----------------------------------------------------------: | :-----------------------------------------------------------: | :------------------------------------------------------------------: | :--------------------------------------------------------------: |
|  ![picture](http://dc.dvgis.cn/examples/images/mini-scene/dfmz.gif) | ![picture](http://dc.dvgis.cn/examples/images/mini-scene/factory.gif?v=1) | ![picture](http://dc.dvgis.cn/examples/images/layer/cluster_circle.gif) | ![picture](http://dc.dvgis.cn/examples/images/model/shp_custom_shader.gif) |
|  ![picture](http://dc.dvgis.cn/examples/images/overlay/polyline_image_trail.gif) | ![picture](http://dc.dvgis.cn/examples/images/overlay/wall_trail.gif?v=1) | ![picture](http://dc.dvgis.cn/examples/images/overlay/water.gif?v=2)  |  ![picture](http://dc.dvgis.cn/examples/images/overlay/plot-overlay.png?v=3)   |

[æ´å¤>>](http://dc.dvgis.cn/#/examples)

## QQ ç¾¤

<p>
<img src="http://dc.dvgis.cn/examples/images/base/q1.png?v=2" style="width:60px;height:60px" title="æ°å­è§è§"/>
<img src="http://dc.dvgis.cn/examples/images/base/q2.png?v=6" style="width:60px;height:60px" title="Cesiumå¼å¿ååº"/>
</p>

## æ¯æ

> å¦ædc-sdkè½å¤ç»æ¨å¸¦æ¥æçï¼è¯·æ¯æä¸ä¸å~
<p>
<img src="http://dc.dvgis.cn/examples/images/base/sponsor.jpg?v=2" style="width:60px;height:60px" title="æ°å­è§è§"/>
</p>

## çæå£°æ

```warning
1.æ¡æ¶ä½ä¸ºä¸ä¸ªåºç¡å¹³å°ï¼ä»£ç å¼æºï¼ä»»ä½ä¸ªäººåæºæå¯ä»¥ä¿®æ¹ãéæï¼æ éç»è¿ææ¹ææã
2.ä»»ä½ä¸ªäººåæºæä¿®æ¹æ¡æ¶åºç°çé®é¢ï¼ææ¹æ éè´è´£ã
3.åæä¼æ·»å ä¸äºè¡ä¸æ§çæä»¶åå·¥å·ï¼ä»£ç ä¼ééå¼æºã
4.å¯¹äºææ¹åå¸çç¨åºåï¼ä»»ä½ä¸ªäººåæºæå¨éµå®ä¸åæ¡ä»¶çåæä¸å¯ä»¥æ°¸ä¹åè´¹ä½¿ç¨:
   1)ç¨åºåå®æ´å¼ç¨ï¼
   2)ä¿çæ­¤çæä¿¡æ¯å¨æ§å¶å°è¾åº
ææ¹ä¿çå¯¹æ­¤çæä¿¡æ¯çæç»è§£éæã
```

## è°¢è°¢
