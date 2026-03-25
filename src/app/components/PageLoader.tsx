import React from "react";

const PageLoader = () => {
  return (
    <div style={styles.loader}>
      <div style={styles.spinner}></div>
    </div>
  );
};

const styles = {
  loader: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #f3f3f3",
    borderTop: "5px solid #ff4d6d",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default PageLoader;
