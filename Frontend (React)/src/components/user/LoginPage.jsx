import { useContext, useState } from 'react';
import styles from './LoginPage.module.css';
import api from '../../api';
import Error from '../ui/Error';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {

    const { setIsAuthenticated, get_username }  = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const userInfo = {username, password}

    function handleSubmit(e){
        e.preventDefault()
        setLoading(true)

        api.post("token/", userInfo)
        .then(res => {
            console.log(res.data)
            localStorage.setItem("access", res.data.access)
            localStorage.setItem("refresh", res.data.refresh)
            setUsername("")
            setPassword("")
            setLoading(false)
            setIsAuthenticated(true)
            get_username()
            setError("")
            toast.success("Logged in successfully!");

            const from = location?.state?.from.pathname || "/"  // Used ? to if location, state null
            navigate(from, {replace:true});
        })

        .catch(err => {
            console.log(err.message)
            setError("Username or password incorrect!")
            setLoading(false)
            toast.error("Username or password incorrect!")
        })
    }


  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
         {error && <Error message={error} />}
        <h2 className={styles.title}>Welcome</h2>
        <p className={styles.subtitle}>Please login to your account</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>Username</label>
            <input type="text" value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            id="email" className={styles.input} placeholder="Enter your username" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" value={password} 
            onChange={(e) => setPassword(e.target.value)}
            id="password" className={styles.input} placeholder="Enter your password" required />
          </div>
          <button type="submit" className={styles.button} disabled={loading}>Login</button>
        </form>
        <div className={styles.extraLinks}>
          <a href="#" className={styles.link}>Forgot Password?</a>
          <p>
            Don’t have an account? <a href="#" className={styles.link}>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
