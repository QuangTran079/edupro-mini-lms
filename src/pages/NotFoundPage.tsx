import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="page not-found">
      <span className="not-found__code">404</span>
      <h1>Không tìm thấy trang</h1>
      <p>Đường dẫn bạn truy cập không tồn tại.</p>

      <Link to="/" className="not-found__link">
        Về trang chủ
      </Link>
    </section>
  );
}

export default NotFoundPage;