import styles from './NotFound.module.scss'

function NotFound() {

    return (
      <>
      <div>
          <h1 className={styles.root}>Ничего не найдено :(</h1>
      </div>
      <div className={styles.description}>К сожалению, данная страница отсутствует в нашем магазине</div>
      </>
    );
  }
  
  export default NotFound;