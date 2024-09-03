
const LinkButton = ({ className, label, href = '#' }) => {

  return (
    <a className={`link-button ${className}__link-button`} href={href}>{label}</a>
  );
};

export default LinkButton;
