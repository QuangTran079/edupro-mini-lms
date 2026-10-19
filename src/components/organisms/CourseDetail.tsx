import type { CourseDetailProps } from "../../types/course";
import { Link } from "react-router-dom";


function CourseDetail({
  course,
}: CourseDetailProps) {
  const {
    title,
    description,
    thumbnail,
    category,
    instructor,
    lessons,
    level,
    durationHours,
    price,
  } = course;

  return (
    <article className="course-detail">
      <div className="course-detail__navigation">
        <Link to="/courses" className="course-detail__back">
          ← Back to Courses
        </Link>
      </div>
      <header className="course-detail__hero">
        <span className="course-detail__badge">{category}</span>

        <h1>{title}</h1>
        <p className="course-detail__description">{description}</p>

        <ul className="course-detail__meta">
          <li>Giảng viên: {instructor}</li>
          <li>{durationHours} giờ</li>
          <li>{lessons} bài học</li>
          <li>{level}</li>
        </ul>
      </header>

      <div className="course-detail__layout">
        <div className="course-detail__content">
          <section className="course-detail__section">
            <h2>About This Course</h2>
            <p>{description}</p>
          </section>

          <section className="course-detail__section">
            <h2>Course Information</h2>

            <dl className="course-detail__information">
              <div>
                <dt>Danh mục</dt>
                <dd>{category}</dd>
              </div>

              <div>
                <dt>Giảng viên</dt>
                <dd>{instructor}</dd>
              </div>

              <div>
                <dt>Cấp độ</dt>
                <dd>{level}</dd>
              </div>

              <div>
                <dt>Số bài học</dt>
                <dd>{lessons}</dd>
              </div>

              <div>
                <dt>Thời lượng</dt>
                <dd>{durationHours} giờ</dd>
              </div>
            </dl>
          </section>
        </div>

        <aside
          className="course-detail__summary"
          aria-label="Thông tin giá khóa học"
        >
          <img src={thumbnail} alt={title} className="course-detail__image" />
          <button
            type="button"
            className="course-detail__favorite"
           
          >
            {"♡ Thêm vào yêu thích"}
          </button>

          <strong className="course-detail__price">${price}</strong>
          <p>
            {lessons} bài học · {durationHours} giờ
          </p>
          <p>Giảng viên: {instructor}</p>
        </aside>
      </div>
    </article>
  );
}

export default CourseDetail;
