type Props = {
  title: JSX.Element;
  subtitle: string;
};

const SectionHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="section_header">
      <div className="section_header_subtitle_wrapper">
        <div className="section_header_line"></div>
        <p className="section_header_subtitle">{subtitle}</p>
      </div>
      <div className="section_header_title">{title}</div>
    </div>
  );
};

export default SectionHeader;
