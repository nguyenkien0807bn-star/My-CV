# BÁO CÁO KIỂM THỬ SẢN PHẨM

## 1. Thông tin chung

| Thông tin | Chi tiết |
|---|---|
| Tên dự án | My-CV — Website portfolio cá nhân |
| Phiên bản | v1.0.0 |
| Ngày kiểm thử | 05/11/2026 |
| Người thực hiện/đánh giá | AI hỗ trợ QA — rà soát mã nguồn và kiểm tra trên trình duyệt tích hợp |
| Phạm vi | Đối chiếu HTML, CSS, cấu trúc repository và tài liệu bàn giao |
| Phương pháp | Rà soát tĩnh và kiểm tra responsive trên trình duyệt tích hợp; không dùng thiết bị vật lý |

> **Lưu ý:** Responsive được kiểm tra trên trình duyệt tích hợp tại các viewport nêu trong báo cáo. Kết quả không thay thế việc kiểm thử trên thiết bị vật lý hoặc các trình duyệt khác.

## 2. Bảng tổng quan trạng thái

| # | Nhóm tiêu chí | Trạng thái | Tóm tắt |
|---|---|---|---|
| 1 | Tính đúng đắn và mức độ đáp ứng yêu cầu chức năng | Cần cải thiện | Có đủ các khu vực portfolio chính; liên kết dự án đang là placeholder, chưa xác minh hành vi trên trình duyệt. |
| 2 | Giao diện, trải nghiệm người dùng và khả năng tương thích | Cần cải thiện | Responsive đã kiểm tra tại 3 viewport, không tràn ngang; cần kiểm thử thêm trên thiết bị vật lý, trình duyệt khác và công nghệ hỗ trợ. |
| 3 | Khả năng vận hành, xử lý lỗi và hiệu năng cơ bản | Cần cải thiện | Website tĩnh, không có backend; chưa đo tải trang hoặc kiểm tra lỗi khi vận hành. |
| 4 | Bảo mật, quản lý cấu hình và dữ liệu | Cần cải thiện | README nêu không cần cấu hình bí mật; chưa thực hiện kiểm tra bảo mật chuyên sâu và cần xác nhận cách công khai thông tin liên hệ. |
| 5 | Chất lượng mã nguồn, cấu trúc repository và tài liệu bàn giao | Cần cải thiện | Có README và release note; phát hiện sai thuộc tính `rell` và liên kết GitHub chưa trỏ đến hồ sơ cá nhân. |
| 6 | Khả năng triển khai, kiểm thử và cung cấp minh chứng | Cần cải thiện | Đã có ảnh minh chứng responsive; chưa có kết quả kiểm thử triển khai, biên bản test case tổng thể hoặc các minh chứng kiểm thử khác. |

## 3. Chi tiết kiểm tra

### 3.1. Tính đúng đắn và mức độ đáp ứng yêu cầu chức năng

| Hạng mục kiểm tra | Trạng thái | Ghi chú/Minh chứng |
|---|---|---|
| Hiển thị các khu vực Giới thiệu, Kỹ năng, Dự án và Liên hệ | Đạt | Các section và điểm neo tương ứng được khai báo trong `index.html` (`#about`, `#skills`, `#projects`, `#contact`). Đã xác minh qua mã nguồn, chưa xác minh hiển thị thực tế. |
| Điều hướng nội bộ đến các section | Cần cải thiện | Các liên kết điều hướng dùng fragment tương ứng; cần chạy trên trình duyệt để xác nhận vị trí cuộn và header sticky không che nội dung. |
| Hiển thị ảnh đại diện và ảnh minh họa dự án | Cần cải thiện | Có tham chiếu ảnh trong `assets/img/`; cần xác nhận tất cả ảnh tải thành công và hiển thị đúng kích thước trên môi trường triển khai. |
| Liên kết “Xem chi tiết” của các dự án | Chưa đạt | Bốn liên kết trong thẻ dự án có `href="#"` (`index.html`, khoảng dòng 116–167); hiện chưa dẫn đến trang hoặc nội dung chi tiết. |
| Liên kết email và điện thoại | Cần cải thiện | Có `mailto:` và `tel:` trong mã nguồn; cần kiểm tra mở đúng ứng dụng xử lý trên thiết bị phù hợp. |
| Liên kết GitHub cá nhân | Chưa đạt | Liên kết đang trỏ đến `https://github.com`, không phải hồ sơ cá nhân; thuộc tính viết `rell="noopener "` thay vì `rel`. Cần cập nhật đích liên kết và kiểm tra lại hành vi mở tab mới. |

### 3.2. Giao diện, trải nghiệm người dùng và khả năng tương thích

| Hạng mục kiểm tra | Trạng thái | Ghi chú/Minh chứng |
|---|---|---|
| Bố cục responsive trên mobile, tablet và desktop | Đạt | Đã kiểm tra trên trình duyệt tích hợp: mobile 390×844 (1 cột), tablet 768×1024 (2 cột), desktop 1366×900 (3 cột). Không phát hiện tràn ngang tại các viewport này. Ảnh chụp toàn trang: [mobile](screenshots/responsive-mobile.png), [tablet](screenshots/responsive-tablet.png), [desktop](screenshots/responsive-desktop.png). |
| Điều hướng và trạng thái focus bàn phím | Cần cải thiện | Có kiểu `:focus-visible` cho liên kết; chưa chạy kiểm thử chỉ dùng bàn phím để xác nhận thứ tự tab và khả năng nhận biết focus trên toàn trang. |
| Văn bản thay thế cho hình ảnh | Đạt | Các ảnh nội dung trong `index.html` có `alt`; cần đánh giá chất lượng mô tả trong kiểm tra khả năng tiếp cận đầy đủ. |
| Hỗ trợ giảm chuyển động | Đạt | CSS có quy tắc `prefers-reduced-motion`; chưa xác nhận trực quan khi bật tùy chọn hệ điều hành/trình duyệt. |
| Khả năng tương thích trình duyệt | Cần cải thiện | README nêu các trình duyệt mục tiêu hiện đại; chưa có kết quả kiểm thử Chrome, Edge, Firefox hoặc Safari. |

#### Minh chứng chụp màn hình Responsive

| Thiết bị mô phỏng | Viewport | Kết quả | Minh chứng |
|---|---:|---|---|
| Mobile | 390×844 | Đạt — hiển thị 1 cột, không tràn ngang | [responsive-mobile.png](screenshots/responsive-mobile.png) |
| Tablet | 768×1024 | Đạt — lưới dự án hiển thị 2 cột, không tràn ngang | [responsive-tablet.png](screenshots/responsive-tablet.png) |
| Desktop | 1366×900 | Đạt — lưới dự án hiển thị 3 cột, không tràn ngang | [responsive-desktop.png](screenshots/responsive-desktop.png) |

Ảnh được chụp trực tiếp từ trang `index.html` trên trình duyệt tích hợp bằng viewport mô phỏng; đây không phải ảnh chụp từ thiết bị vật lý.

### 3.3. Khả năng vận hành, xử lý lỗi và hiệu năng cơ bản

| Hạng mục kiểm tra | Trạng thái | Ghi chú/Minh chứng |
|---|---|---|
| Mở trang tĩnh trực tiếp hoặc qua web server | Cần cải thiện | README hướng dẫn mở `index.html` hoặc chạy Python HTTP server; chưa thực thi các bước này trong lần đánh giá. |
| Tải các tài nguyên cục bộ | Cần cải thiện | CSS và ảnh dùng đường dẫn tương đối; chưa kiểm tra Network/console để phát hiện lỗi 404 hoặc lỗi tải tài nguyên. |
| Hành vi khi thiếu tài nguyên hoặc mất kết nối | Cần cải thiện | Chưa có kiểm thử lỗi vận hành; cần xác nhận ảnh bị thiếu không làm vỡ bố cục và trang vẫn dùng được. |
| Hiệu năng tải cơ bản | Cần cải thiện | Chưa đo thời gian tải, dung lượng trang hoặc chỉ số hiệu năng bằng công cụ trình duyệt. Không có dữ liệu để kết luận đạt ngưỡng hiệu năng. |
| Thành phần động/backend | Đạt | Theo README, đây là website tĩnh, không có backend hay bước build; các thẻ dự án là nội dung giới thiệu, không phải ứng dụng chạy bên trong website. |

### 3.4. Bảo mật, quản lý cấu hình và dữ liệu

| Hạng mục kiểm tra | Trạng thái | Ghi chú/Minh chứng |
|---|---|---|
| Bí mật và thông tin cấu hình | Cần cải thiện | README ghi dự án không cần `.env` hoặc khóa API; chỉ rà soát tài liệu/mã nguồn, chưa chạy công cụ quét bí mật trên toàn bộ lịch sử repository. |
| Mã chạy phía trình duyệt và phụ thuộc bên thứ ba | Đạt | Trong HTML được rà soát không thấy thẻ `<script>` hoặc thư viện bên thứ ba; kết luận giới hạn ở kiểm tra tĩnh các tệp hiện có. |
| Liên kết mở tab mới | Chưa đạt | Liên kết GitHub dùng `target="_blank"` nhưng thuộc tính `rel` bị viết sai thành `rell`; cần sửa để áp dụng bảo vệ `noopener` như dự kiến. |
| Dữ liệu cá nhân được công khai | Cần cải thiện | Trang hiển thị email và số điện thoại. Chủ sở hữu cần xác nhận đây là thông tin được phép công khai trước khi triển khai. |
| Xử lý dữ liệu người dùng | Đạt | Không thấy biểu mẫu nhập liệu hoặc chức năng gửi/lưu dữ liệu người dùng trong trang tĩnh được kiểm tra. |

### 3.5. Chất lượng mã nguồn, cấu trúc repository và tài liệu bàn giao

| Hạng mục kiểm tra | Trạng thái | Ghi chú/Minh chứng |
|---|---|---|
| Cấu trúc và phân tách HTML/CSS/tài nguyên | Đạt | Có `index.html`, `assets/css/styles.css` và thư mục ảnh; CSS được tách khỏi HTML. |
| Ngữ nghĩa HTML và metadata cơ bản | Đạt | Có `lang="vi"`, metadata viewport/description, các vùng `header`, `nav`, `main`, `section` và `footer`. |
| Tính nhất quán của liên kết/nội dung | Chưa đạt | Các nút dự án còn `href="#"`; liên kết và nhãn GitHub chưa nhất quán với hồ sơ cá nhân; cần rà soát nội dung trước bàn giao. |
| README hướng dẫn cài đặt và chạy | Đạt | README có hướng dẫn mở trực tiếp, dùng Python HTTP server và Docker/Nginx. Các lệnh chưa được thực thi để xác nhận. |
| Tài liệu phiên bản và thay đổi | Đạt | Có `docs/RELEASENOTE.md` cho v1.0.0 và `docs/AI_LOG.md` ghi nhận thay đổi lớn. |
| Chất lượng cú pháp và quy ước mã | Cần cải thiện | Chưa chạy validator HTML/CSS hoặc công cụ lint; phát hiện `rell` sai chính tả trong HTML. |

### 3.6. Khả năng triển khai, kiểm thử và cung cấp minh chứng

| Hạng mục kiểm tra | Trạng thái | Ghi chú/Minh chứng |
|---|---|---|
| Hướng dẫn triển khai cục bộ | Đạt | README mô tả chạy bằng trình duyệt và Python HTTP server; chưa thực hiện xác nhận kết quả. |
| Hướng dẫn triển khai Docker | Cần cải thiện | README có lệnh Docker/Nginx; chưa xác nhận Docker khả dụng, container khởi động thành công hoặc website truy cập được tại cổng đã nêu. |
| Kết quả kiểm thử chức năng và giao diện | Chưa đạt | Chưa có test run thực tế hoặc kết quả xác nhận trên trình duyệt trong phạm vi báo cáo. |
| Minh chứng kiểm thử | Chưa đạt | Chưa đính kèm ảnh chụp màn hình, log trình duyệt, kết quả validator hoặc báo cáo hiệu năng. |
| Khả năng tái lập kiểm thử | Cần cải thiện | Cần ghi lại trình duyệt/phiên bản, thiết bị hoặc viewport, bước thực hiện, kết quả mong đợi/thực tế và minh chứng cho từng test case. |

## 4. Đánh giá tổng kết và đề xuất

### Nhận định chung

Sản phẩm có phạm vi gọn, là website portfolio tĩnh với các thành phần HTML/CSS và tài liệu hướng dẫn chạy cơ bản. Kiểm tra tĩnh cho thấy cấu trúc nội dung chính và định hướng responsive đã có. Tuy nhiên, báo cáo này **chưa xác nhận sản phẩm hoạt động qua kiểm thử thực thi**, và còn các điểm chức năng/chất lượng cần xử lý. Vì vậy, trạng thái hiện tại là **chưa đủ căn cứ để xác nhận sẵn sàng bàn giao**.

### Vấn đề cần khắc phục trước khi bàn giao

1. Thay các liên kết dự án `href="#"` bằng đích đến hợp lệ hoặc trình bày rõ đây là thẻ không có liên kết.
2. Cập nhật URL GitHub đến hồ sơ/repository chính xác; sửa `rell` thành `rel` và xác nhận nhãn hiển thị đúng.
3. Xác nhận email và số điện thoại được phép công khai.
4. Chạy kiểm thử trên trình duyệt ở mobile, tablet và desktop; kiểm tra điều hướng, ảnh, liên kết, bàn phím và console/network.
5. Thực thi ít nhất một phương thức triển khai được tài liệu hóa (mở trực tiếp, Python server hoặc Docker) và lưu lại kết quả.
6. Bổ sung minh chứng bàn giao: test case đã chạy, kết quả đạt/không đạt, ảnh chụp màn hình và thông tin môi trường kiểm thử.

### Điều kiện đề xuất để xác nhận bàn giao

- Không còn lỗi **Chưa đạt** ảnh hưởng đến liên kết và chức năng được giới thiệu.
- Các mục **Cần cải thiện** đã được kiểm thử thực tế hoặc có chấp thuận rõ ràng về phạm vi chưa kiểm thử.
- Có kết quả kiểm thử và minh chứng đủ để người khác có thể đối chiếu, tái lập.