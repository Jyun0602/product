import React, { useState } from "react";
import Intro1 from "./Intro1";
import Intro2 from "./Intro2";
import Intro3 from "./Intro3";
import Intro4 from "./Intro4";
import Intro5 from "./Intro5";
import Intro6 from "./Intro6";

const LinkToIntro = () => {
  // 使用 useState 跟踪所選圖片的ID
  const [selectedImageId, setSelectedImageId] = useState(null);

  // 點擊圖片時更新所選圖片的ID
  const handleImageClick = (id) => {
    setSelectedImageId(id);
  };

  // 根據所選ID來顯示不同的 Intro 組件
  if (selectedImageId === 1) {
    return <Intro1 />;
  } else if (selectedImageId === 2) {
    return <Intro2 />;
  } else if (selectedImageId === 3) {
    return <Intro3 />;
  } else if (selectedImageId === 4) {
    return <Intro4 />;
  } else if (selectedImageId === 5) {
    return <Intro5 />;
  } else if (selectedImageId === 6) {
    return <Intro6 />;
  } else {
    // 如果沒有圖片被選擇，返回空
    return null;
  }
};

export default LinkToIntro;
