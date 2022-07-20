import { ReactNode } from "react";
import "./BenefitItem.scss";
const BenefitItem = ({
  icon,
  header,
  description,
  className = "",
}: {
  className?: string;
  icon: any;
  header: string;
  description: ReactNode;
}) => {
  return (
    <div className={`benefit-item ${className}`}>
    <img className="benefit-item__icon" src={icon} />
      <div className="benefit-item__header">{header}</div>
      <div className="benefit-item__description">{description}</div>
    </div>
  );
};
export default BenefitItem;
