function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="brand">
          <span className="brand__icon">E</span>
          <span>EduPro</span>
        </span>

        <p>© {new Date().getFullYear()} EduPro LMS. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;