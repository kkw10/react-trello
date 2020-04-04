import React, { useState, useEffect, useLayoutEffect } from 'react';
import { withRouter, useParams } from 'react-router-dom';

const CardPage = () => {
  const [loading, setLoading] = useState(false);
  let { id } = useParams();

  const fetchData = () => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      {!loading ? (
        <div>
          loading card...
        </div>        
      ) : (
        <div>
          card id: {id}...
        </div>
      )}
    </>
  );
};

export default withRouter(CardPage);