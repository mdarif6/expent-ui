import "./Header.css";
import { FaSave, FaRegBell, FaRegUser, FaAngleDown } from "react-icons/fa";

export default function Header() {
  return (
    <div className="expent-header">
      <div className="expent-logo-and-navicons">
        <div className="expent-logo">Expent</div>
        <div className="expent-navicons">
          <div>HOME</div>
          <div>DASHBOARD</div>
          <div>VENDORS</div>
          <div>PROJECTS</div>
        </div>
      </div>

      <div className="expent-login-and-notifications">
        <div>
          <FaSave />
        </div>
        <div>
          <FaRegBell />
        </div>
        <div>
          <FaRegUser />
        </div>
        <div>
          Smith Jones <FaAngleDown />
        </div>
      </div>
    </div>
  );
}
