const Error = ({ message }) => {
  return (
    message && (
      <div className="alert alert-danger my-2 d-flex justify-content-center align-items-center" role="alert">
        {message}
      </div>
    )
  );
};

export default Error;
