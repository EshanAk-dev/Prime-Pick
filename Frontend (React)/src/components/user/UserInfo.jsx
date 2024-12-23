import styles from "./UserInfo.module.css";

const UserInfo = ({ userInfo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.card}>
          <div className={styles.details}>
            <h2 className={styles.name}>Hi, {userInfo.first_name}</h2>
            <p className={styles.email}>{userInfo.email}</p>
            <button className={styles.editButton}>Edit Profile</button>
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div
          className="card"
          style={{
            width: "100%",
            maxHeight: "400px",
            overflow: "auto",
          }}
        >
          <div
            className="card-header"
            style={{
              backgroundColor: "#6050DC",
              color: "white",
              position: "sticky",
              top: "0",
              zIndex: "1",
              textAlign: "center",
            }}
          >
            <h5>Account Overview</h5>
          </div>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <p
                className={styles.infoValue}
              ><strong className={styles.infoLabel}>Username: </strong>{userInfo.username}</p>
            </div>
            <div className={styles.infoItem}>
              <p
                className={styles.infoValue}
              ><strong className={styles.infoLabel}>Full Name: </strong>{`${userInfo.first_name} ${userInfo.last_name}`}</p>
            </div>
            <div className={styles.infoItem}>
              <p
                className={styles.infoValue}
              ><strong className={styles.infoLabel}>Email: </strong>{userInfo.email}</p>
            </div>
            <div className={styles.infoItem}>
              <p
                className={styles.infoValue}
              ><strong className={styles.infoLabel}>Phone: </strong>{userInfo.phone}</p>
            </div>
            <div className={styles.infoItem}>
              <p
                className={styles.infoValue}
              ><strong className={styles.infoLabel}>City: </strong>{userInfo.city}</p>
            </div>
            <div className={styles.infoItem}>
              <p
                className={styles.infoValue}
              ><strong className={styles.infoLabel}>State: </strong>{userInfo.state}</p>
            </div>
            <div className={styles.infoItem}>
              <p
                className={styles.infoValue}
              ><strong className={styles.infoLabel}>Address: </strong>{userInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
