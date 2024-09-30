"use client";

import React, { useEffect, useState } from 'react';

interface Article {
  _id: string;
  title: string;
  author: string;
  journal: string;
  year: number;
  status: string;
}

const AdminDashboard = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/article/pending', { method: 'GET' });
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
  
    fetchArticles();
  }, []);
  

  const handleApprove = async (id: string) => {
    const response = await fetch(`http://localhost:3001/api/article/${id}/approve`, { method: 'PUT' });
    if (response.ok) {
      setArticles(articles.filter(article => article._id !== id));
    }
  };
  
  const handleReject = async (id: string) => {
    const response = await fetch(`http://localhost:3001/api/article/${id}/reject`, { method: 'PUT' });
    if (response.ok) {
      setArticles(articles.filter(article => article._id !== id));
    }
  };
  

  return (
    <div style={{
      maxWidth: '600px',
      margin: 'auto',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>Admin Dashboard</h1>
      {articles.length > 0 ? (
        <ul>
          {articles.map(article => (
            <li key={article._id}>
              <p><strong>{article.title}</strong> by {article.author} ({article.year})</p>
              <button onClick={() => handleApprove(article._id)} style={{ marginRight: '10px' }}>
                Approve
              </button>
              <button onClick={() => handleReject(article._id)}>
                Reject
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No pending articles</p>
      )}
    </div>
  );
};

export default AdminDashboard;
