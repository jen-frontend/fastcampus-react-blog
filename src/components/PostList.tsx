import { useState } from "react";
import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

type TabType = "all" | "my";

export default function PostList({ hasNavigation = true }: PostListProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div
            role="presentation"
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "post__navigation--active" : ""}
          >
            전체
          </div>
          <div
            role="presentation"
            onClick={() => setActiveTab("my")}
            className={activeTab === "my" ? "post__navigation--active" : ""}
          >
            나의 글
          </div>
        </div>
      )}
      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">패스트캠퍼스</div>
                <div className="post__date">2023.07.08 토요일</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget pretium nunc. Duis sed arcu eget leo maximus fermentum vel
                ut risus. Morbi quis enim consequat, venenatis mauris a,
                bibendum justo. Vestibulum eros risus, feugiat eget auctor et,
                lacinia in quam. Pellentesque pellentesque nunc ultricies nulla
                convallis finibus. Nulla interdum laoreet ex, id euismod arcu.
                Vestibulum pulvinar sem dolor, in laoreet nunc faucibus eu.
                Suspendisse convallis vehicula turpis ut dignissim. Sed nec
                turpis suscipit, ultricies nisi non, ullamcorper diam. Duis non
                ullamcorper enim. Suspendisse egestas lorem sed enim gravida,
                sit amet ultricies ligula dignissim. Praesent nec consequat est.
                Praesent interdum blandit dolor, a dapibus erat gravida ut.
                Maecenas blandit diam est, ut viverra augue faucibus ut.
                Curabitur varius vestibulum erat sit amet malesuada.
              </div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
