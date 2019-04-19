import React from 'react';
import { Link } from 'dva/router';
import styles from './Home.css'
function Home() {
  return (
    <div className={styles.container} >
      <div className={styles.title} >性能优化及技巧</div>
      <p><Link to='/render' >1.重复渲染</Link></p>
      <p><Link to='/image' >2.图片加载</Link></p>
      <p><Link to='/data'  >3.大数据处理</Link></p>
      <p ><Link to='/tools' >4.lodash-decorators</Link></p>
    </div>
  );
}
export default Home