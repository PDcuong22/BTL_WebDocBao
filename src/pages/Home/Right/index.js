import classNames from "classnames/bind";
import styles from "./Right.module.scss";

const cx = classNames.bind(styles);

function Right() {
  return <div className={cx("wrapper")}>
    <h1>
        <img src="https://static-images.vnncdn.net/files/publish/2022/10/22/world-cup-nu-2023-196.jpg" width="320" height="500"></img>
    </h1>

    <a>
      Tin tức thị trường 
    </a>

    <table>
      <tr>
        <th><img src="https://icdn.24h.com.vn/upload/2-2023/images/2023-06-28/medium/nhan-vat-av-1687926595-324-width740height555.jpg" width="120" height="90"></img></th>
        <td>Chân dung 4 nghệ sĩ GenZ "khuấy đảo" đại nhạc hội 8Wonder</td>
      </tr>
      <tr>
        <th><img src="https://icdn.24h.com.vn/upload/2-2023/images/2023-06-27/medium/du-an-av-1687855781-978-width740height555.jpg" width="120" height="90"></img></th>
        <td>Gần 300 căn hộ giao dịch thành công The Maison khẳng định sức hút ngày mở bán</td>
      </tr>
      <tr>
        <th><img src="https://icdn.24h.com.vn/upload/2-2023/images/2023-06-27/medium/1687860214-929-thumbnail-width740height555.jpg" width="120" height="90"></img></th>
        <td>Thảnh thơi giao dịch - thỏa thích nhận quà cùng Bac A Bank</td>
      </tr>
      <tr>
        <th><img src="https://icdn.24h.com.vn/upload/2-2023/images/2023-06-23/medium/1687494936-625-thumbnail-width740height555.jpg" width="120" height="90"></img></th>
        <td>TrueMoney Vay - làn gió mới trong lĩnh vực dịch vụ hỗ trợ tài chính</td>
      </tr>
    </table>

    <a>
      Thông tin chứng khoán
    </a>

    <table>
      <tr>
        <i> VN-INDEX </i>
        <g> 1138.07 </g>
        <g> ▲ </g>
        <g> +11.85 </g>
        <g> (+1.05%) </g>
      </tr>
      <tr>
        <i> VN30-INDEX </i>
        <g> 1129.43 </g>
        <g> ▲ </g>
        <g> +9.99 </g>
        <g> (+0.89%) </g>
      </tr>
      <tr>
        <i> HNX-INDEX </i>
        <g> 225.82 </g>
        <g> ▲ </g>
        <g> +0.74 </g>
        <g> (+0.33) </g>
      </tr>
    </table>


  </div>

}

export default Right;