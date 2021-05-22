export default function UserProfilePage({ userName }) {
  return (
    <div>
      <h1>{userName}</h1>
    </div>
  );
}

export const getServerSideProps = async () => {
  console.log('(re) render...');
  return {
    props: {
      userName: 'Tony',
    },
    // notFound: true
  };
};
