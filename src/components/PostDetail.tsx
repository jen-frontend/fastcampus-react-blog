import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">패스트캠퍼스</div>
            <div className="post__date">2023.07.08 토요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
          </div>
          <div className="post__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
            pretium nunc. Duis sed arcu eget leo maximus fermentum vel ut risus.
            Morbi quis enim consequat, venenatis mauris a, bibendum justo.
            Vestibulum eros risus, feugiat eget auctor et, lacinia in quam.
            Pellentesque pellentesque nunc ultricies nulla convallis finibus.
            Nulla interdum laoreet ex, id euismod arcu. Vestibulum pulvinar sem
            dolor, in laoreet nunc faucibus eu. Suspendisse convallis vehicula
            turpis ut dignissim. Sed nec turpis suscipit, ultricies nisi non,
            ullamcorper diam. Duis non ullamcorper enim. Suspendisse egestas
            lorem sed enim gravida, sit amet ultricies ligula dignissim.
            Praesent nec consequat est. Praesent interdum blandit dolor, a
            dapibus erat gravida ut. Maecenas blandit diam est, ut viverra augue
            faucibus ut. Curabitur varius vestibulum erat sit amet malesuada.
          </div>
        </div>
      </div>
    </>
  );
}
