import { Link } from "react-router-dom";
import { CourseCardProps } from "../../types/course";

function CourseCard({
  course,
  isFavorite = false,
  onToggleFavorite,
}: CourseCardProps) {
  return (
    <article className="course-card">
      <Link to={`/courses/${course.id}`} className="course-card__link">
        <div className="course-card__image-wrapper">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="course-card__image"
            loading="lazy"
          />

          <span className="course-card__badge">{course.category}</span>
        </div>

        <div className="course-card__body">
          <h2 className="course-card__title">{course.title}</h2>

          <p className="course-card__description">{course.description}</p>

          <div className="course-card__meta">
            <span>{course.lessons} Lessons</span>
            <span>{course.level}</span>
          </div>

          <p className="course-card__category">{course.category}</p>

          <div className="course-card__footer">
            <div className="course-card__instructor">
              <span className="course-card__avatar" aria-hidden="true">
                {course.instructor.charAt(0)}
              </span>
              <span>{course.instructor}</span>
            </div>
          </div>
        </div>
      </Link>

      {onToggleFavorite && (
        <button
          type="button"
          className={`course-card__favorite ${
            isFavorite ? "course-card__favorite--active" : ""
          }`}
          aria-label={
            isFavorite ? `Bỏ yêu thích ${course.title}` : `Yêu thích ${course.title}`
          }
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(course.id)}
        >
          <span aria-hidden="true">{isFavorite ? "♥" : "♡"}</span>
        </button>
      )}
    </article>
  );
}
export default CourseCard;
