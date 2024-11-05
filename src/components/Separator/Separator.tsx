import style from "./Separator.module.scss";

interface ISeparator {
  label: string;
}

export const Separator = ({ label }: ISeparator) => {
  return (
    <div className={style.separator}>
      <span className={style.line}></span>
      <span className={style.label}>{label}</span>
      <span className={style.line}></span>
    </div>
  )
}
