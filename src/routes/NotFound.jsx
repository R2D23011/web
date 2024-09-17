import { Link } from "react-router-dom";

const styles = {
    container: {
      textAlign: 'center',
      marginTop: '200px',
    },
    title: {
      fontSize: '4em',
      color: '#e22',
    },
    message: {
      fontSize: '2em',
      color: '#444',
    },
    link: {
      marginTop: '20px',
      display: 'inline-block',
      padding: '15px 40px',
      backgroundColor: '#37b',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '5px',
    },
  };
  
  function NotFoundPage() {
    return (
      <div className="container-fluid" style={styles.container}>
        <h1 className="display-1" style={styles.title}>ERROR 404!</h1>
        <p style={styles.message}>Lo sentimos, la página que buscas no existe.</p>
        <Link to="/" style={styles.link}>Volver a la página principal</Link>
      </div>
    );
  }
  
  export default NotFoundPage;