import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
};

const Spinner = ({ loading, alignStype }) => {
  return (
    loading && (
      <div className={alignStype}>
        <ClipLoader color="#4338ca" loading={true} cssOverride={override} size={70} />
      </div>
    )
  );
};
export default Spinner;
