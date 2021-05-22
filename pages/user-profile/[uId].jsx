export default function UserProfilePage({ id }) {
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  console.log('(re) render...');
  return {
    props: {
      id: `user-id ${params.uId}`,
    },
    // notFound: true
  };
};
