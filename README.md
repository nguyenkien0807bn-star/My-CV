# Nguyễn Văn Kiên - Portfolio CV

## Tên dự án

**My-CV** - website portfolio cá nhân của Nguyễn Văn Kiên.

## Mô tả

Website tĩnh giới thiệu cá nhân, kỹ năng, các dự án tiêu biểu và thông tin liên hệ. Giao diện responsive, phù hợp với điện thoại, máy tính bảng và máy tính.

Các thẻ Todo List, Weather Dashboard và Blog trên trang chỉ là nội dung giới thiệu dự án, không phải các ứng dụng hoạt động bên trong website này.

## Chức năng

- Điều hướng đến các phần Giới thiệu, Kỹ năng, Dự án và Liên hệ.
- Hiển thị thông tin giới thiệu và ảnh đại diện.
- Trình bày danh sách kỹ năng và các dự án tiêu biểu.
- Cung cấp liên kết email, điện thoại và GitHub.
- Hiển thị giao diện responsive và hỗ trợ cuộn mượt đến từng phần.

## Công nghệ

- **HTML5:** cấu trúc và nội dung trang.
- **CSS3:** giao diện responsive, Flexbox và CSS Grid.
- **Git/GitHub:** quản lý và lưu trữ mã nguồn.
- **Docker/Nginx:** tùy chọn để phục vụ website trong container.

Website không có bước build và không cần Node.js, npm hoặc thư viện bên thứ ba.

## Cấu trúc dự án

```text
My-CV/
├── index.html
├── README.md
└── assets/
	├── css/
	│   └── styles.css
	└── img/
		├── nguyenvankien.jpg
		├── sanpham1.jpg
		├── sanpham2.jpg
		├── sanpham3.jpg
		└── sanpham4.gif
```

## Yêu cầu môi trường

- Trình duyệt hiện đại như Chrome, Edge, Firefox hoặc Safari.
- Git để tải mã nguồn (không cần nếu đã có thư mục dự án).
- Python 3 nếu muốn chạy web server cục bộ bằng Python.
- Docker Desktop trên Windows/macOS hoặc Docker Engine trên Linux nếu muốn chạy bằng Docker.

## Cài đặt

### Windows (PowerShell)

```powershell
git clone https://github.com/nguyenkien0807bn-star/My-CV.git
Set-Location My-CV
```

### macOS

Mở Terminal và chạy:

```bash
git clone https://github.com/nguyenkien0807bn-star/My-CV.git
cd My-CV
```

### Linux

Mở Terminal và chạy:

```bash
git clone https://github.com/nguyenkien0807bn-star/My-CV.git
cd My-CV
```

## Cấu hình

Dự án không yêu cầu tệp `.env`, khóa API hoặc cấu hình cài đặt.

- Chỉnh nội dung, liên kết và thông tin cá nhân trong `index.html`.
- Chỉnh màu sắc, bố cục và kiểu chữ trong `assets/css/styles.css`.
- Thay ảnh trong `assets/img/`. Nếu đổi tên ảnh, cập nhật đường dẫn `src` tương ứng trong `index.html`.

## Chạy thử

### Mở trực tiếp

Mở tệp `index.html` bằng trình duyệt. Không cần cài thêm phần mềm.

### Chạy web server cục bộ

Chạy lệnh từ thư mục dự án:

**Windows (PowerShell):**

```powershell
py -m http.server 8000
```

**macOS hoặc Linux:**

```bash
python3 -m http.server 8000
```

Truy cập <http://localhost:8000>. Nhấn `Ctrl+C` trong terminal để dừng server.

## Chạy bằng Docker

Cài đặt và khởi động Docker Desktop (Windows/macOS) hoặc Docker Engine (Linux). Chạy lệnh từ thư mục dự án; không cần tạo Dockerfile riêng vì Nginx sẽ phục vụ trực tiếp thư mục này.

**Windows (PowerShell):**

```powershell
docker run --rm -d --name my-cv -p 8080:80 -v "${PWD}:/usr/share/nginx/html:ro" nginx:alpine
```

**macOS hoặc Linux:**

```bash
docker run --rm -d --name my-cv -p 8080:80 -v "$PWD:/usr/share/nginx/html:ro" nginx:alpine
```

Truy cập <http://localhost:8080>. Dừng container bằng:

```bash
docker stop my-cv
```

## Thông tin liên hệ

- **Tên:** Nguyễn Văn Kiên
- **Email:** [nguyenkien0807bn@gmail.com](mailto:nguyenkien0807bn@gmail.com)
- **Điện thoại:** 0389235208
- **GitHub:** [nguyenkien0807bn-star/My-CV](https://github.com/nguyenkien0807bn-star/My-CV)
