import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

// 좋아요 버튼 컴포넌트 정의
const LikeButton = () => {
  // liked 상태와 likeCount 상태를 useState 훅을 사용하여 초기화
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // 좋아요 버튼 클릭 시 처리 함수
  const handleLike = () => {
    // 현재 liked 상태를 반전시킴
    setLiked(!liked);
    // 만약 liked가 true이면 likeCount를 1 감소시키고, false이면 1 증가시킴
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    // 좋아요 버튼 컨테이너
    <div className="like-button-container">
      {/* 좋아요 버튼과 좋아요 개수를 보여주는 섹션 */}
      <div className="button-section">
        {/* 좋아요 버튼 */}
        <button
          className="like-button"
          onClick={handleLike}
          // 스타일을 인라인으로 지정하여 버튼의 디자인을 설정
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            outline: "none",
            paddingLeft: "20px"
          }}
        >
          {/* liked 상태에 따라 다른 하트 아이콘을 보여줌 */}
          {liked ? (
            <FaHeart color="red" size={20} /> // 좋아요 눌린 상태의 하트
          ) : (
            <FaRegHeart color="black" size={20} /> // 좋아요 안 눌린 상태의 하트
          )}
        </button>
        {/* 좋아요 개수를 보여주는 텍스트 */}
        <span className="like-count">
          좋아요 {likeCount === 1 ? "1개" : likeCount + "개"}
        </span>
      </div>
    </div>
  );
};

export default LikeButton;