import React from "react";

// 无状态组件，UI组件（）
export default function(props) {
  console.log(props);
  return (
    <div id="one" className="page">
      <h1>首页</h1>
    </div>
  );
}
