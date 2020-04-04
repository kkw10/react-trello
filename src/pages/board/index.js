import React, { useState, useLayoutEffect, useEffect } from 'react';
import { withRouter, useParams, Link } from 'react-router-dom';
import CardRouter from '~/router/card';

const BoardPage = (props) => {
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
      <div>Board id: {id}...</div>
      {!loading ? (
        <div>
          loading board...
        </div>      
      ) : (
        <ul>
          <li>
            <Link to={`/board/${id}/card/1`}>Card 1</Link>
          </li>
          <li>
            <Link to={`/board/${id}/card/2`}>Card 1</Link>
          </li>
        </ul>          
      )}
      <hr />
      <CardRouter />
    </>
  );
};

export default withRouter(BoardPage);