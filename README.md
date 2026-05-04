```markdown
# Bài tập 01 - Công Nghệ Phần Mềm Mới (CCNPMM)

**Ứng dụng quản lý người dùng (CRUD) sử dụng Node.js, Express.js, Sequelize ORM và MySQL.**

## 🎓 Thông tin sinh viên
- **Họ và tên:** Nguyễn Quốc Khánh
- **MSSV:** 23110239
- **Trường:** Đại học Sư Phạm Kỹ Thuật TP. Hồ Chí Minh (HCMUTE)
- **Môn học:** Công Nghệ Phần Mềm Mới (MTSE431179)
- **Giảng viên hướng dẫn:** ThS. Nguyễn Hữu Trung

## 🚀 Tính năng chính
Hệ thống bao gồm các thao tác cơ bản với cơ sở dữ liệu (CRUD):
- **Create:** Thêm mới tài khoản người dùng vào hệ thống.
- **Read:** Xem danh sách toàn bộ người dùng hiển thị dưới dạng bảng.
- **Update:** Chỉnh sửa và cập nhật thông tin cá nhân của người dùng.
- **Delete:** Xóa người dùng khỏi hệ thống.

## 💻 Công nghệ sử dụng
- **Backend:** Node.js, Express.js
- **Database:** MySQL (triển khai qua Docker), Sequelize ORM
- **Frontend (Views):** EJS Engine, Bootstrap 4
- **Công cụ hỗ trợ:** Babel (biên dịch ES6+), Nodemon (tự động reload server)

## 🛠️ Hướng dẫn cài đặt và chạy dự án

### 1. Yêu cầu hệ thống
- Đã cài đặt [Node.js](https://nodejs.org/) (phiên bản > 18.x)
- Đã cài đặt [Docker](https://www.docker.com/) (để khởi chạy database)

### 2. Thiết lập Database (MySQL Docker)
Khởi chạy container MySQL bằng Docker thông qua lệnh sau:
```bash
docker run --name mysql-8.0 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:8.0.44-debian --lower_case_table_names=1
```

### 3. Cài đặt dự án
Clone repository về máy tính:
```bash
git clone [https://github.com/MunKwaii/23110239_NguyenQuocKhanh_BT01_CCNPMM.git](https://github.com/MunKwaii/23110239_NguyenQuocKhanh_BT01_CCNPMM.git)
cd 23110239_NguyenQuocKhanh_BT01_CCNPMM
```

Tiến hành cài đặt các thư viện (dependencies) cần thiết:
```bash
npm install
```

### 4. Khởi tạo Cơ sở dữ liệu và Bảng
Chạy các lệnh sau của Sequelize CLI để tạo database `node_fulltask` và đẩy cấu trúc bảng `users` vào MySQL:
```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

### 5. Khởi động Server
Chạy lệnh khởi động dự án:
```bash
npm start
```

Server sẽ lắng nghe tại cổng `8088`. Bạn có thể mở trình duyệt và trải nghiệm dự án tại:
- **Trang thêm người dùng:** `http://localhost:8088/crud`
- **Trang danh sách người dùng:** `http://localhost:8088/get-crud`
```
