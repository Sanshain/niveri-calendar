# niveri-calendar

Once on codepen I came across a [simple calendar](https://codepen.io/m4r1vs/pen/MOOxyE) with an amazing design and couldn't pass it by. Its author is [Marius Niveri](https://github.com/m4r1vs/). I haven't found him posting this code on either github or npm. So this inspired me so much that I decided to do it myself and so that the author does not sink into obscurity, I named him in his honor

![image](https://user-images.githubusercontent.com/40761960/195103535-d4858ba5-53ac-42ab-bce7-894fb0f5949b.png)


This is the simplest calendar for react/react projects, which weighs only 5 kb after minification, but looks very cool. But if you need a full-fledged calendar with the ability to restrict the user in the choice of dates and other configurable things, it probably won't suit you



## About the base template: 

- Usage styled components via [`goober`](https://www.npmjs.com/package/goober) with minimal runtime (look [`App.jsx`](https://github.com/Sanshain/preact-boilerplate/blob/main/source/App.jsx)) 
- Isolated styles via postcss modules (like `react-css-modules`)
- prerender out of the box

- Created on Preact 10.* + Rollup 2.* + Babel 7 template for SPAs.

## Setup

```sh
npm i Sanshain/niveri-calendar.git
```


### `npm run build`

Build a production bundle in `release` folder.

### `npm run serve`

Serve production assets on localhost.

