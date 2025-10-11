import React from "react";
import "./MainContent.css";

function MainContent() {
  return (
    <div className="main-container">
      {/* Cột trái */}
      <div className="left-section">
        <h2>Bài liên quan</h2>
        <ul>
          <li>Hộ kinh doanh phải đăng ký mã số thuế trước ngày 30/12/2025</li>
          <li>Cập nhật chính sách kế toán mới cho hộ kinh doanh nhỏ</li>
          <li>Thủ tục cấp phép hoạt động kinh doanh trực tuyến</li>
        </ul>
      </div>

      {/* Cột giữa - Thông tư */}
      <div className="center-section">
        <h2>THÔNG TƯ HƯỚNG DẪN QUẢN LÝ HỘ KINH DOANH</h2>

        
        <div className="quocgia"><p><strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong><br />
        Độc lập – Tự do – Hạnh phúc<br />——————</p></div>

        <p><strong>Số:</strong> 64/2025/TT-BKH<br />
        <strong>Tp.Hồ Chí Minh, ngày 10 tháng 10 năm 2025</strong></p>

        <h3>Chương I. QUY ĐỊNH CHUNG</h3>
        <p><strong>Điều 1. Phạm vi điều chỉnh:</strong> Hướng dẫn việc quản lý, theo dõi, kiểm soát hoạt động kinh doanh và trách nhiệm kế toán, lưu trữ, báo cáo tài chính của các hộ kinh doanh.</p>
        <p><strong>Điều 2. Đối tượng áp dụng:</strong> Hộ kinh doanh, cá nhân kinh doanh và các cơ quan quản lý liên quan.</p>
        <p><strong>Điều 3. Nguyên tắc quản lý:</strong> Minh bạch, trung thực, lưu trữ và khai báo điện tử đúng quy định.</p>

        <h3>Chương II. QUẢN LÝ HOẠT ĐỘNG KINH DOANH</h3>
        <p><strong>Điều 4.</strong> Đăng ký và kê khai hoạt động kinh doanh theo quy định của pháp luật thuế và kinh doanh.</p>
        <p><strong>Điều 5.</strong> Sử dụng chứng từ kế toán hợp pháp, lưu trữ tối thiểu 5 năm.</p>
        <p><strong>Điều 6.</strong> Ghi chép sổ sách kế toán trung thực, kịp thời.</p>
        <p><strong>Điều 7.</strong> Báo cáo tài chính và báo cáo thuế định kỳ hàng năm.</p>

        <h3>Chương III. TỔ CHỨC THỰC HIỆN</h3>
        <p><strong>Điều 8.</strong> Trách nhiệm cơ quan quản lý và hộ kinh doanh.</p>
        <p><strong>Điều 9.</strong> Hiệu lực thi hành kể từ ngày … tháng … năm 2025.</p>

        <p><em>BỘ TRƯỞNG<br />(Ký, đóng dấu)</em></p>

        <h2>Phương pháp lập chứng từ kế toán</h2>
        
        <h3>Phiếu thu</h3>
        <p><strong>1. Mục đích: </strong>Phiếu thu được lập nhằm xác định số tiền mặt thực tế nhập quỹ, làm căn cứ để thủ quỹ thu tiền, ghi sổ quỹ tiền mặt và kế toán hạch toán các khoản thu. Mọi khoản tiền mặt nhập quỹ, không phân biệt nguồn gốc, đều phải có Phiếu thu kèm theo chứng từ gốc hợp lệ.</p>
        <p><strong>2. Phương pháp và trách nhiệm ghi:</strong></p>
        <p>- Góc trên bên trái ghi rõ tên và địa chỉ hộ/cá nhân kinh doanh.</p>
        <p>- Phiếu thu được lập thành quyển, đánh số thứ tự liên tục trong kỳ kế toán; ghi rõ ngày, tháng, năm lập phiếu và ngày, tháng, năm thu tiền.</p>
        <p>- Ghi đầy đủ họ tên, địa chỉ người nộp tiền; lý do nộp tiền; số tiền bằng số và bằng chữ; đơn vị tính là đồng Việt Nam; số lượng chứng từ gốc kèm theo.</p>
        <p>- Phiếu thu lập thành 02 liên:</p>
        <p>   + Liên 1 lưu tại hộ/cá nhân kinh doanh, dùng để ghi sổ quỹ tiền mặt.</p>
        <p>   + Liên 2 giao cho người nộp tiền.</p>
        <p>- Phiếu thu phải có đủ chữ ký, họ tên của người lập phiếu, người đại diện hộ/cá nhân kinh doanh, thủ quỹ và các bên liên quan.</p>
        <p>- Trường hợp người đại diện hộ/cá nhân kinh doanh đồng thời kiêm nhiệm thủ quỹ hoặc người lập phiếu thì được ký đồng thời các chức danh đó.</p>
        <h3>Phiếu chi</h3>
        <p><strong>1. Mục đích: </strong>Phiếu chi được lập nhằm xác định các khoản tiền mặt thực tế xuất quỹ, làm căn cứ để thủ quỹ chi tiền và kế toán ghi sổ quỹ tiền mặt. Mọi khoản chi bằng tiền mặt của hộ/cá nhân kinh doanh đều phải có Phiếu chi kèm theo chứng từ gốc hợp lệ.</p>
        <p><strong>2. Phương pháp và trách nhiệm ghi:</strong></p>
        <p>- Góc trên bên trái ghi rõ tên và địa chỉ hộ/cá nhân kinh doanh.</p>
        <p>- Phiếu chi được lập thành quyển, đánh số thứ tự liên tục trong kỳ kế toán; ghi rõ ngày, tháng, năm lập phiếu và ngày, tháng, năm chi tiền.</p>
        <p>- Ghi đầy đủ họ tên, địa chỉ người nhận tiền; lý do chi tiền; số tiền bằng số và bằng chữ; đơn vị tính là đồng Việt Nam; số lượng chứng từ gốc kèm theo.</p>
        <p>- Phiếu chi lập thành 02 liên:</p>
        <p>   + Liên 1 lưu tại hộ/cá nhân kinh doanh, dùng để ghi sổ quỹ tiền mặt.</p>
        <p>   + Liên 2 giao cho người nhận tiền.</p>
        <p>- Phiếu chi chỉ có giá trị thực hiện khi có đủ chữ ký của người lập phiếu, người đại diện hộ/cá nhân kinh doanh và thủ quỹ. Sau khi nhận tiền, người nhận phải ghi rõ số tiền đã nhận bằng chữ, ký và ghi họ tên.</p>
        <p>- Trường hợp người đại diện hộ/cá nhân kinh doanh đồng thời kiêm nhiệm thủ quỹ hoặc người lập phiếu thì được ký đồng thời các chức danh đó.</p>
        
        <h3>Phiếu nhập kho</h3>
        <p><strong>1. Mục đích:</strong> Phiếu nhập kho được lập nhằm xác định số lượng và giá trị vật liệu, dụng cụ, sản phẩm, hàng hóa nhập kho; làm căn cứ để kế toán ghi sổ chi tiết và tổng hợp. Mọi trường hợp nhập kho như mua ngoài, tự sản xuất, thuê gia công hoặc thừa kiểm kê đều phải có Phiếu nhập kho kèm chứng từ hợp lệ.</p>
        <p><strong>2. Phương pháp và trách nhiệm ghi:</strong></p>
        <p>- Góc trên bên trái ghi rõ tên và địa chỉ hộ/cá nhân kinh doanh.</p>
        <p>- Phiếu nhập kho được lập theo thứ tự liên tục trong kỳ kế toán; ghi rõ số phiếu, ngày lập, người giao hàng, số hóa đơn hoặc lệnh nhập kho, và địa điểm nhập kho.</p>
        <p>- Cột A–D: Ghi số thứ tự, tên, quy cách, đơn vị tính, mã số hàng hóa.</p>
        <p>- Cột 1: Số lượng theo chứng từ (hóa đơn hoặc lệnh nhập).</p>
        <p>- Cột 2: Số lượng thực nhập kho.</p>
        <p>- Cột 3–4: Ghi đơn giá và thành tiền của từng loại vật tư, hàng hóa thực nhập.</p>
        <p>- Dòng “Cộng”: Ghi tổng giá trị nhập kho. Dòng “Số tiền viết bằng chữ”: ghi tổng số tiền bằng chữ.</p>
        <p>- Phiếu nhập kho được lập thành 02 liên:</p>
        <p>   + Liên 1 lưu tại hộ/cá nhân kinh doanh để ghi sổ kế toán.</p>
        <p>   + Liên 2 giao cho người giao hàng.</p>
        <p>- Phiếu nhập kho phải có đầy đủ chữ ký và họ tên của người lập phiếu, người giao hàng, thủ kho và người đại diện hộ/cá nhân kinh doanh.</p>
        <p>- Trường hợp người đại diện hộ/cá nhân kinh doanh đồng thời kiêm nhiệm thủ kho hoặc người lập phiếu thì được ký đồng thời các chức danh đó.</p>
        
        <h3>Phiếu xuất kho</h3>
        <p><strong>1. Mục đích:</strong> Phiếu xuất kho được lập nhằm xác định số lượng và giá trị vật liệu, dụng cụ, sản phẩm, hàng hóa xuất kho cho các bộ phận sử dụng; làm căn cứ để theo dõi chi phí và ghi sổ kế toán. Mọi trường hợp xuất kho của hộ/cá nhân kinh doanh đều phải có Phiếu xuất kho kèm chứng từ hợp lệ.</p>
        <p><strong>2. Phương pháp và trách nhiệm ghi:</strong></p>
        <p>- Góc trên bên trái ghi rõ tên và địa chỉ của hộ/cá nhân kinh doanh.</p>
        <p>- Phiếu xuất kho được lập cho một hoặc nhiều loại vật liệu, dụng cụ, hàng hóa cùng một kho và cùng mục đích sử dụng.</p>
        <p>- Khi lập phiếu cần ghi rõ họ tên người nhận hàng, đơn vị (bộ phận) sử dụng, số và ngày lập phiếu, lý do xuất kho và địa điểm xuất kho.</p>
        <p>- Cột A–D: Ghi số thứ tự, tên, quy cách, đơn vị tính, mã số hàng hóa.</p>
        <p>- Cột 1: Số lượng theo yêu cầu xuất kho.</p>
        <p>- Cột 2: Số lượng thực tế xuất kho (bằng hoặc ít hơn số lượng yêu cầu).</p>
        <p>- Cột 3–4: Ghi đơn giá và thành tiền của từng loại vật tư, hàng hóa thực xuất (Cột 4 = Cột 2 × Cột 3).</p>
        <p>- Dòng “Cộng”: Ghi tổng giá trị hàng hóa thực xuất. Dòng “Tổng số tiền viết bằng chữ”: ghi tổng số tiền bằng chữ.</p>
        <p>- Phiếu xuất kho được lập thành 02 liên:</p>
        <p>   + Liên 1 lưu tại hộ/cá nhân kinh doanh để ghi sổ kế toán.</p>
        <p>   + Liên 2 giao cho người nhận hàng.</p>
        <p>- Phiếu phải có đầy đủ chữ ký và họ tên của người lập phiếu, người nhận hàng, thủ kho và người đại diện hộ/cá nhân kinh doanh.</p>
        <p>- Trường hợp người đại diện hộ/cá nhân kinh doanh đồng thời kiêm nhiệm thủ kho hoặc người lập phiếu thì được ký đồng thời các chức danh đó.</p>
        
        <h3>Bảng thanh toán tiền lương và các khoản thu nhập của người lao động</h3>
        <p><strong>1. Mục đích:</strong> Bảng thanh toán tiền lương và các khoản thu nhập của người lao động là chứng từ dùng để xác định, thanh toán và thống kê tiền lương, phụ cấp, tiền thưởng và thu nhập khác của người lao động làm việc tại hộ/cá nhân kinh doanh. Đây cũng là căn cứ kiểm tra việc chi trả lương và ghi sổ kế toán tiền lương.</p>
        <p><strong>2. Phương pháp và trách nhiệm ghi:</strong></p>
        <p>- Bảng được lập hàng tháng dựa trên số công, sản phẩm hoặc khối lượng công việc hoàn thành và các thông tin theo dõi về đơn giá tiền lương, phụ cấp, thưởng.</p>
        <p>- Cột A, B: Ghi số thứ tự và họ tên người lao động.</p>
        <p>- Cột 1: Bậc hoặc hệ số lương.</p>
        <p>- Cột 2–5: Ghi số sản phẩm, số công và số tiền tính theo lương sản phẩm, lương thời gian hoặc nghỉ hưởng lương.</p>
        <p>- Cột 8–10: Ghi các khoản phụ cấp, tiền thưởng, thu nhập khác của người lao động.</p>
        <p>- Cột 11: Tổng tiền lương, phụ cấp và tiền thưởng được hưởng.</p>
        <p>- Cột 12–17: Ghi các khoản khấu trừ lương gồm BHXH, BHYT, BHTN, thuế TNCN... Trong đó, cột 17 là tổng cộng các khoản khấu trừ.</p>
        <p>- Cột 18: Số tiền thực nhận = Tổng thu nhập (cột 11) – Tổng khấu trừ (cột 17).</p>
        <p>- Cột C: Người lao động ký nhận khi nhận lương.</p>
        <p>- Cuối tháng, căn cứ chứng từ liên quan, hộ/cá nhân kinh doanh lập bảng, ký duyệt, lập phiếu chi và thực hiện thanh toán. Trường hợp trả lương qua ngân hàng thì không yêu cầu ký nhận trực tiếp.</p>
        <p>- Tùy thực tế, hộ/cá nhân kinh doanh có thể thêm, bớt hoặc sắp xếp lại các cột để phù hợp với đặc thù chi trả lương của đơn vị.</p>
        
        

        <h2>Phương pháp ghi sổ kế toán</h2>

        <h3>Sổ chi tiết doanh thu bán hàng hóa, dịch vụ</h3>
        <p><em>(Mẫu số S1 - HKD)</em></p>
        <p><strong>1. Mục đích:</strong> Sổ chi tiết doanh thu bán hàng hóa, dịch vụ được lập để theo dõi chi tiết doanh thu bán hàng, cung cấp dịch vụ của hộ kinh doanh, cá nhân kinh doanh theo từng nhóm ngành nghề có cùng mức thuế suất thuế giá trị gia tăng (GTGT) và thuế thu nhập cá nhân (TNCN). Đây là căn cứ để xác định nghĩa vụ thuế GTGT, thuế TNCN đối với ngân sách nhà nước (NSNN) theo quy định của pháp luật thuế.</p>
        <p><strong>2. Phương pháp và trách nhiệm ghi:</strong></p>
        <p>- Sổ chi tiết doanh thu được mở theo từng nhóm danh mục ngành nghề kinh doanh có cùng mức thuế suất GTGT và TNCN.</p>
        <p>- <strong>Cột A:</strong> Ghi ngày, tháng ghi sổ.</p>
        <p>- <strong>Cột B, C:</strong> Ghi số hiệu, ngày, tháng của chứng từ dùng để ghi sổ.</p>
        <p>- <strong>Cột D:</strong> Ghi nội dung nghiệp vụ kinh tế phát sinh.</p>
        <p>- <strong>Các cột 1, 2, ..., 10...:</strong> Ghi doanh thu bán sản phẩm, hàng hóa hoặc dịch vụ được phân chia theo từng nhóm ngành nghề kinh doanh có cùng mức thuế suất GTGT, TNCN để làm căn cứ kê khai thuế và xác định nghĩa vụ thuế với NSNN.</p>
        <p>- Trường hợp hộ kinh doanh, cá nhân kinh doanh có nhu cầu, ngoài việc mở sổ chi tiết doanh thu theo từng nhóm danh mục ngành nghề, có thể mở thêm sổ chi tiết doanh thu theo từng sản phẩm, hàng hóa, dịch vụ hoặc theo cách phân loại khác phù hợp với yêu cầu quản lý hoặc quy định của pháp luật thuế.</p>

        <h3>Sổ chi tiết vật liệu, dụng cụ, sản phẩm, hàng hóa</h3>
        <p><em>(Mẫu số S2 - HKD)</em></p>
        <p><strong>a)</strong> Hộ kinh doanh, cá nhân kinh doanh phải mở sổ chi tiết vật liệu, dụng cụ, sản phẩm, hàng hóa để theo dõi về tình hình nhập, xuất, tồn kho cho từng vật liệu, dụng cụ, sản phẩm, hàng hóa của hộ kinh doanh, cá nhân kinh doanh.</p>
        <p><strong>b)</strong> Thông tin, số liệu trên sổ chi tiết vật liệu, dụng cụ, sản phẩm, hàng hóa được đối chiếu với kết quả kiểm kê để xác định hàng tồn kho có bị thừa, thiếu so với thực tế hay không.</p>
        <p><strong>c) Căn cứ và phương pháp ghi sổ:</strong></p>
        <p>Căn cứ vào các chứng từ kế toán có liên quan (phiếu nhập kho, phiếu xuất kho,...) để ghi sổ chi tiết vật liệu, dụng cụ, sản phẩm, hàng hóa như sau:</p>
        <p>+ <strong>Cột A, B:</strong> Ghi số hiệu, ngày tháng của chứng từ được sử dụng để ghi sổ kế toán.</p>
        <p>+ <strong>Cột C:</strong> Ghi nội dung nghiệp vụ kinh tế phát sinh để phục vụ cho việc rà soát, kiểm tra, đối chiếu các thông tin về hàng tồn kho khi cần thiết.</p>
        <p>+ <strong>Cột D:</strong> Đơn vị tính của vật liệu, dụng cụ, sản phẩm, hàng hóa.</p>
        <p>+ <strong>Cột 1:</strong> Ghi đơn giá nhập, xuất, tồn vật liệu, dụng cụ, sản phẩm, hàng hóa. Trong đó, đơn giá nhập kho của từng vật liệu, dụng cụ, sản phẩm, hàng hóa căn cứ vào hóa đơn, phiếu nhập kho.</p>
        <p>Đơn giá xuất kho của từng vật liệu, dụng cụ, sản phẩm, hàng hóa có thể tính theo phương pháp bình quân gia quyền cả kỳ dự trữ hoặc phương pháp nhập trước xuất trước. Cụ thể như sau:</p>
        <p>(+) <strong>Phương pháp bình quân gia quyền cả kỳ dự trữ:</strong> Theo phương pháp này, giá trị của từng loại hàng tồn kho được tính theo giá trị trung bình của hàng tồn đầu kỳ và hàng nhập trong kỳ. Đơn giá xuất kho được tính theo công thức sau:</p>
        <p class="formula"><em>Đơn giá xuất kho bình quân cả kỳ dự trữ = (Giá trị hàng tồn đầu kỳ + Giá trị hàng nhập trong kỳ) / (Số lượng hàng tồn đầu kỳ + Số lượng hàng nhập trong kỳ)</em></p>
        <p>(+) <strong>Phương pháp nhập trước, xuất trước (FIFO):</strong> Áp dụng giả định rằng hàng được mua hoặc sản xuất trước thì được xuất trước. Hàng tồn kho cuối kỳ là hàng nhập sau cùng.</p>
        <p>+ <strong>Cột 2:</strong> Ghi số lượng vật liệu, dụng cụ, sản phẩm, hàng hóa nhập kho.</p>
        <p>+ <strong>Cột 3:</strong> Ghi giá trị (thành tiền) vật liệu, dụng cụ, sản phẩm, hàng hóa nhập kho (Cột 3 = Cột 1 x Cột 2).</p>
        <p>+ <strong>Cột 4:</strong> Ghi số lượng vật liệu, dụng cụ, sản phẩm, hàng hóa xuất kho.</p>
        <p>+ <strong>Cột 5:</strong> Ghi giá trị (thành tiền) vật liệu, dụng cụ, sản phẩm, hàng hóa xuất kho (Cột 5 = Cột 1 x Cột 4).</p>
        <p>+ <strong>Cột 6:</strong> Ghi số lượng vật liệu, dụng cụ, sản phẩm, hàng hóa tồn kho.</p>
        <p>+ <strong>Cột 7:</strong> Ghi giá trị (thành tiền) vật liệu, dụng cụ, sản phẩm, hàng hóa tồn kho.</p>

        <h3>Sổ theo dõi tình hình thực hiện nghĩa vụ thuế với NSNN</h3>
        <p><em>(Mẫu số S4 - HKD)</em></p>
        <p><strong>a)</strong> Hộ kinh doanh, cá nhân kinh doanh phải mở sổ theo dõi tình hình thực hiện nghĩa vụ thuế với NSNN để theo dõi các khoản thuế, phí mà hộ kinh doanh, cá nhân kinh doanh phải nộp, đã nộp và còn phải nộp vào NSNN. Trong đó, hộ kinh doanh, cá nhân kinh doanh phải mở sổ này chi tiết theo từng sắc thuế như thuế GTGT, thuế TNCN,...</p>
        <p><strong>b)</strong> Thông tin, số liệu trên sổ theo dõi tình hình thực hiện nghĩa vụ thuế với NSNN làm căn cứ để cơ quan thuế xác định hộ kinh doanh, cá nhân kinh doanh có nộp đúng, nộp đủ và kịp thời các khoản thuế, phí vào NSNN theo quy định của pháp luật thuế hay không.</p>
        <p><strong>c) Căn cứ và phương pháp ghi sổ:</strong></p>
        <p>Căn cứ vào chứng từ kế toán có liên quan đến tình hình thực hiện nghĩa vụ của hộ kinh doanh, cá nhân kinh doanh với NSNN để ghi sổ theo dõi tình hình thực hiện nghĩa vụ thuế với NSNN như sau:</p>
        <p>- <strong>Cột A, B:</strong> Ghi số hiệu, ngày tháng của các chứng từ kế toán được sử dụng để ghi sổ kế toán. Các chứng từ kế toán có thể là các tờ khai thuế, giấy nộp tiền thuế vào NSNN kèm theo Phiếu chi hoặc giấy báo Nợ của ngân hàng,...</p>
        <p>- <strong>Cột C:</strong> Ghi nội dung nghiệp vụ kinh tế phát sinh để phục vụ cho việc rà soát, kiểm tra, đối chiếu các thông tin về các khoản phải nộp, đã nộp và còn phải nộp NSNN về các khoản thuế khi cần thiết.</p>
        <p>- <strong>Ghi số dư đầu kỳ:</strong> 
        Nếu số dư đầu kỳ (cuối kỳ trước chuyển sang) của số thuế phải nộp vào NSNN thì ghi vào cột 1. 
        Nếu số dư đầu kỳ (cuối kỳ trước chuyển sang) là số thuế đã nộp thừa vào NSNN thì ghi vào cột 2.</p>
        <p>- <strong>Cột 1:</strong> Phản ánh số thuế mà hộ kinh doanh, cá nhân kinh doanh phải nộp NSNN theo quy định của pháp luật thuế, cụ thể như sau:</p>
          <ul>
            <li>Đối với thuế GTGT phải nộp tính theo tỷ lệ % trên doanh thu bán hàng hóa, dịch vụ: căn cứ vào doanh thu bán hàng hóa, dịch vụ trên sổ chi tiết doanh thu nhân với tỷ lệ % tính thuế GTGT theo quy định pháp luật.</li>
            <li>Đối với thuế TNCN của người lao động: căn cứ vào tổng cộng cột “số thuế TNCN phải nộp” trên Bảng thanh toán tiền lương và thu nhập.</li>
            <li>Đối với thuế TNCN của chủ hộ kinh doanh, cá nhân kinh doanh: căn cứ vào tổng doanh thu bán hàng hóa, dịch vụ trên sổ chi tiết doanh thu nhân với thuế suất thuế TNCN theo quy định.</li>
          </ul>
        <p>- <strong>Cột 2:</strong> Phản ánh số thuế mà hộ kinh doanh, cá nhân kinh doanh đã nộp vào NSNN. Chứng từ kế toán để ghi chép vào chỉ tiêu này là giấy nộp tiền vào NSNN kèm Phiếu chi hoặc giấy báo Nợ của ngân hàng. Trường hợp số thuế đã nộp lớn hơn số thuế phải nộp thì phần nộp thừa cũng ghi vào cột này.</p>

        <h3>Sổ theo dõi tình hình thanh toán tiền lương và các khoản nộp theo lương của người lao động</h3>
        <p><em>(Mẫu số S5 - HKD)</em></p>
        <p><strong>a)</strong> Hộ kinh doanh, cá nhân kinh doanh phải mở sổ theo dõi tình hình thanh toán tiền lương và các khoản nộp theo lương của người lao động để theo dõi tiền lương và các khoản nộp theo lương mà hộ kinh doanh, cá nhân kinh doanh phải trả, đã chi trả và còn phải trả cho người lao động.</p>
        <p><strong>b)</strong> Thông tin trên sổ theo dõi tình hình thanh toán tiền lương và các khoản nộp theo lương của người lao động của hộ kinh doanh, cá nhân kinh doanh đồng thời làm căn cứ để cơ quan BHXH xác định tình hình hoàn thành nghĩa vụ trích nộp BHXH, BHYT, BHTN,... của hộ kinh doanh, cá nhân kinh doanh theo quy định của pháp luật về bảo hiểm.</p>
        <p><strong>c) Căn cứ và phương pháp ghi sổ:</strong></p>
        <p>Căn cứ vào các chứng từ kế toán có liên quan đến tình hình thanh toán tiền lương và các khoản nộp theo lương để hộ kinh doanh, cá nhân kinh doanh ghi sổ theo dõi tình hình thanh toán tiền lương và các khoản nộp theo lương của người lao động như sau:</p>
        <p>- <strong>Cột A:</strong> Ghi theo ngày, tháng mà các chứng từ kế toán về tiền lương, các khoản nộp theo lương được ghi chép vào sổ kế toán.</p>
        <p>- <strong>Cột B, C:</strong> Ghi số hiệu, ngày tháng của các chứng từ kế toán về tiền lương, các khoản nộp theo lương sử dụng để ghi chép vào sổ kế toán. Các chứng từ kế toán là Bảng thanh toán tiền lương và các khoản thu nhập của người lao động, phiếu chi hoặc giấy báo Nợ của ngân hàng về thanh toán tiền lương và các khoản nộp theo lương của người lao động cho cơ quan BHXH.</p>
        <p>- <strong>Cột D:</strong> Ghi nội dung nghiệp vụ kinh tế phát sinh để phục vụ cho việc rà soát, kiểm tra, đối chiếu các thông tin về các khoản phải trả, đã trả và còn phải trả về tiền lương, các khoản phải nộp theo lương của người lao động khi cần thiết.</p>
        <p>- <strong>Cột 1, 2, 3:</strong> Phản ánh số phải trả, số đã trả và còn phải trả người lao động về tiền lương và các khoản thu nhập của người lao động.  
        Căn cứ để ghi vào cột 1 là số liệu tại cột số 18 của Bảng thanh toán tiền lương và các khoản thu nhập của người lao động.  
        Căn cứ ghi vào cột 2 là các chứng từ chi trả tiền lương và thu nhập cho người lao động (phiếu chi hoặc Giấy báo Nợ của ngân hàng).  
        Cột 3 là chênh lệch giữa cột 1 và cột 2.</p>
        <p>- <strong>Cột 4, 5, 6:</strong> Phản ánh số phải trả, số đã trả và còn phải trả cơ quan BHXH về BHXH của người lao động.  
        Căn cứ để ghi vào cột 4 là tổng số BHXH phải nộp (bao gồm cả phần khấu trừ lương của người lao động và phần tính vào chi phí sản xuất kinh doanh của hộ kinh doanh, cá nhân kinh doanh).  
        Số liệu để ghi vào cột 5 là các Phiếu chi hoặc Giấy báo Nợ của ngân hàng về nộp các khoản BHXH cho cơ quan BHXH.  
        Cột 6 là chênh lệch số liệu giữa cột 4 và cột 5.</p>
        <p>- <strong>Cột 7, 8, 9:</strong> Phản ánh số phải trả, số đã trả và còn phải trả cho cơ quan BHXH về BHYT của người lao động.  
        Căn cứ để ghi vào cột 7 là tổng số BHYT phải nộp (bao gồm cả phần khấu trừ lương của người lao động và phần tính vào chi phí sản xuất kinh doanh của hộ kinh doanh, cá nhân kinh doanh).  
        Số liệu để ghi vào cột 8 là các Phiếu chi hoặc Giấy báo Nợ của ngân hàng về nộp các khoản BHYT cho cơ quan BHXH.  
        Cột 9 là chênh lệch số liệu giữa cột 7 và cột 8.</p>
        <p>- <strong>Cột 10, 11, 12:</strong> Phản ánh số phải trả, số đã trả và còn phải trả cho cơ quan BHXH về BHTN của người lao động.  
        Căn cứ để ghi vào cột 10 là tổng số BHTN phải nộp (bao gồm cả phần khấu trừ lương của người lao động và phần tính vào chi phí sản xuất kinh doanh của hộ kinh doanh, cá nhân kinh doanh).  
        Số liệu để ghi vào cột 11 là các Phiếu chi hoặc Giấy báo Nợ của ngân hàng về nộp các khoản BHTN cho cơ quan BHXH.  
        Cột 12 là chênh lệch số liệu giữa cột 10 và cột 11.</p>
        <p>Trường hợp hộ kinh doanh, cá nhân kinh doanh có chỉnh sửa biểu mẫu Bảng thanh toán tiền lương và các khoản thu nhập của người lao động theo thực tế của hộ kinh doanh, cá nhân kinh doanh thì căn cứ vào hướng dẫn nêu trên để lấy số liệu ghi sổ kế toán cho phù hợp.</p>

        <h3>Sổ quỹ tiền mặt</h3>
        <p><em>(Mẫu số S6 - HKD)</em></p>
        <p><strong>a)</strong> Hộ kinh doanh, cá nhân kinh doanh mở sổ quỹ tiền mặt để theo dõi tình hình thu, chi, tồn quỹ tiền mặt bằng tiền Việt Nam.</p>
        <p><strong>b)</strong> Sổ này mở cho thủ quỹ.</p>
        <p><strong>c) Căn cứ và phương pháp ghi sổ:</strong></p>
        <p>Hộ kinh doanh, cá nhân kinh doanh căn cứ vào các phiếu thu, phiếu chi đã được thực hiện nhập, xuất quỹ để ghi sổ quỹ tiền mặt.</p>
        <p>Số tiền mặt dư đầu kỳ (cuối kỳ trước) được ghi vào cột 3.</p>
        <p>- <strong>Cột A:</strong> Ghi ngày, tháng ghi sổ.</p>
        <p>- <strong>Cột B:</strong> Ghi ngày, tháng của Phiếu thu, Phiếu chi.</p>
        <p>- <strong>Cột C, D:</strong> Ghi số hiệu của Phiếu thu, số hiệu của Phiếu chi, đánh số liên tục từ nhỏ đến lớn theo trình tự thời gian phát sinh.</p>
        <p>- <strong>Cột E:</strong> Ghi nội dung nghiệp vụ kinh tế của Phiếu thu, Phiếu chi.</p>
        <p>- <strong>Cột 1:</strong> Ghi số tiền nhập quỹ.</p>
        <p>- <strong>Cột 2:</strong> Ghi số tiền xuất quỹ.</p>
        <p>- <strong>Cột 3:</strong> Ghi số dư tồn quỹ. Số tồn quỹ phải khớp đúng với số tiền mặt thực tế trong quỹ.</p>
      </div>

      {/* Cột phải */}
      <div className="right-section">
        <h3>Phần khác</h3>
        <p>Có thể hiển thị thông tin kế toán, hướng dẫn, hoặc báo cáo thống kê ở đây.</p>
      </div>
    </div>
  );
}

export default MainContent;
