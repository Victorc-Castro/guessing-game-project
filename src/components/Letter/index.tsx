import styles from "./styles.module.css"

type Props = {
  value?: String
}

export function Letter({value = ""}: Props ) {
  return (
    <div className={styles.letter}>
      <span>{value}</span>
    </div>
  )
}