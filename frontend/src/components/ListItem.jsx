import React from "react";

export default function ListItem(props) {
const {index, platform,last,buy,sell}=props;

const diff = Math.round((((sell-buy)*100)/buy)*100)/100;
const saving = Math.round((sell-buy)*100)/100;
  return (
    <div className="list--item">
      <div className="list-no">{index+1}</div>
      <div className="list-platform">{platform}</div>
      <div className="list-last">{last}</div>
      <div className="list-buy-sell">{buy}/{sell}</div>
      <div style={{color:`${sell-buy>0?"#5dc7c2":"#da5757"}`}} className="list-diff">{diff}%</div>
      <div style={{color:`${sell-buy>0?"#5dc7c2":"#da5757"}`}}className="list-saving">{sell-buy?"▲":"▼"} {saving}</div>
    </div>
  );
}
