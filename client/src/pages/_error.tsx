// pages/_error.tsx
import { NextPage, GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

type ErrorPageProps = {
  statusCode: number;
};

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {
  let message = 'An unexpected error occurred';

  if (statusCode === 404) {
    message = 'Page not found';
  }

  return (
    <div>
      <h1>{statusCode} - {message}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  ErrorPageProps,
  ParsedUrlQuery
> = async ({ res, params }) => {
  let statusCode = 500;

  if (res) {
    statusCode = res.statusCode;
  }

  // Here you can add additional error handling logic if needed

  return {
    props: { statusCode },
  };
};

export default ErrorPage;