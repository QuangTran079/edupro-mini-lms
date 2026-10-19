# EduPro — Mini LMS Dashboard

Ứng dụng mô phỏng hệ thống học trực tuyến, xây dựng trong
React Core Assessment Project.

## Demo

Bổ sung URL Vercel sau khi deploy.

## Công nghệ

- React + TypeScript
- Vite
- React Router
- Redux Toolkit + React Redux
- CSS responsive
- Atomic Design

## Tính năng

- Trang chủ với khóa học nổi bật.
- Danh sách khóa học, tìm kiếm và lọc theo danh mục.
- Chi tiết khóa học theo ID trên URL.
- Thêm và bỏ khóa học yêu thích, đồng bộ giữa các trang.
- Đăng nhập, đăng xuất giả lập.
- Bảo vệ khu vực Dashboard.
- Dashboard và My Courses theo học viên.
- Tải dữ liệu bất đồng bộ giả lập.
- Loading, error, empty state và thử lại.
- Trang 404 và giao diện mobile/desktop.

## Chạy project

```bash
npm install
npm run dev
```

## Build và preview

```bash
npm run build
npm run preview
```

## Tài khoản demo

Dùng một trong các email sau với mật khẩu từ 6 ký tự:

| Email | Khóa học đã tham gia |
|---|---:|
| huy@gmail.com |  |
| test@gmail.com |  |

Email hợp lệ khác vẫn đăng nhập được nhưng chưa có khóa học
trong dữ liệu mock.
password có thể là bất kỳ chuỗi nào từ 6 ký tự trở lên.

## Cấu trúc chính

- pages: trang và logic của trang.
- layouts: bố cục public/private.
- components/atoms: thành phần cơ bản.
- components/molecules: nhóm UI nhỏ.
- components/organisms: nhóm UI lớn.
- components/ui: Header và Footer.
- store: Redux state, actions và selectors.
- hooks: các hook dùng chung.
- services: tải dữ liệu giả lập.
- data: dữ liệu mock.
- types: kiểu TypeScript.
- lib: hàm tính toán dùng chung.
- styles: toàn bộ CSS.

## Data flow

UI → dispatch → thunk/reducer → Redux state → selector → UI.

Auth ban đầu được triển khai bằng Context API, sau đó chuyển
sang Redux trong task MEX1.60.

## Giới hạn demo

- Không có backend hoặc xác thực tài khoản thật.
- Auth và Favorites được đặt lại khi reload trang.
- Favorites dùng chung trong phiên chạy, chưa tách theo tài khoản.
- Dữ liệu khóa học và quá trình học là mock.
- Settings hiện là trang thông tin placeholder.
- Ảnh khóa học tải từ nguồn bên ngoài.

Các nút giả lập lỗi và danh sách rỗng chỉ xuất hiện ở development.
## deploy vecel
https://edupro-mini-lms.vercel.app/