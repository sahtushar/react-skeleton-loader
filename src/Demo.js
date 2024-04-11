import "./index.css"

import Card from "./components/Card/Card";
import React from "react";

function Demo() {
  const data1 = {
    mainImg: "https://b3391880.smushcdn.com/3391880/wp-content/uploads/g2-grid-gen.png?lossy=0&strip=1&webp=1",
    title: "Procure. Pay. Close.",
    subTitle: "Guided Procurement • AP Automation • Expense Management • Corporate Cards",
  };

  const data2 = {
    mainImg: "https://b3391880.smushcdn.com/3391880/wp-content/uploads/tour-sq.png?lossy=0&strip=1&webp=1",
    title: "Interactive Product Tours",
    subTitle: "Ready to test-drive? Explore Airbase with these interactive demos. Simply select the module you’d like to explore, and follow the flow.",
  };
  
  const tableRows = [
    ['Hello', 'Content', 'Loader'],
    ["It's a", 'Better', 'Loader'],
    ['Like used on', 'Instagram', 'Facebook']
  ];
  
  // const tableData = tableRows.map(row => {
  //   return {
  //     column1: row[0],
  //     column2: row[1],
  //     column3: row[2]
  //   };
  // });
  
  return (
    <div
     className="appWrapper"
    >
      <Card
       data={data1}
      />
       <Card
       data={data2}
       tableData={tableRows}
      />
    </div>
  );
}

export default Demo;
