import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate('/'), 3000);
  });

  return <h2>oopss!!! something went wrong</h2>;
}

export default ErrorPage;
