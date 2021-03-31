import {
  HomeOutlined,
  SearchOutlined,
  BookOutlined,
  UserOutlined,
  HomeFilled,
  BookFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const BottomNav = (props) => {
  const { active, hidden } = props;

  if (hidden) {
    return <></>;
  }
  let homeIcon = <HomeOutlined className="bottom-nav-icon" />;
  let searchIcon = <SearchOutlined className="bottom-nav-icon" />;
  let savedIcon = <BookOutlined className="bottom-nav-icon" />;
  let userIcon = <UserOutlined className="bottom-nav-icon" />;

  switch (active) {
    case "Saved Courses":
      savedIcon = <BookFilled className="bottom-nav-icon-active" />;
      break;
    case "Search":
      searchIcon = <SearchOutlined className="bottom-nav-icon-active" />;
      break;
    case "User":
      userIcon = <UserOutlined className="bottom-nav-icon-active" />;
      break;
    case "Home":
      homeIcon = <HomeFilled className="bottom-nav-icon-active" />;
      break;
    default:
  }

  return (
    <div className="bottom-nav">
      <div class="bottom-nav-item">
        <Link to="/">{homeIcon}</Link>
      </div>
      <div class="bottom-nav-item">
        <Link to="/search">{searchIcon}</Link>
      </div>
      <div class="bottom-nav-item">
        <Link to="/saved-items">{savedIcon}</Link>
      </div>
    </div>
  );
};

export default BottomNav;
