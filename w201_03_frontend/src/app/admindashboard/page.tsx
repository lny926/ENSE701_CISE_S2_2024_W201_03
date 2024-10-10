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

  // Fetch pending articles
  const fetchArticles = async () => {
    try {
      const response = await fetch('http://localhost:8082/api/article/pending');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setArticles(data.articles || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  // useEffect to call fetchArticles on component mount
  useEffect(() => {
    fetchArticles();
  }, []); // Empty dependency array ensures this runs once after the component mounts

  // Handle approve article
  const handleApprove = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:8082/api/article/${id}/approve`, { method: 'PUT' });
      if (response.ok) {
        setArticles(articles.filter(article => article._id !== id)); // Remove approved article from state
      }
    } catch (error) {
      console.error('Error approving article:', error);
    }
  };

  // Handle reject article
  const handleReject = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:8082/api/article/${id}/reject`, { method: 'PUT' });
      if (response.ok) {
        setArticles(articles.filter(article => article._id !== id)); // Remove rejected article from state
      }
    } catch (error) {
      console.error('Error rejecting article:', error);
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
            <li key={article._id} style={{ marginBottom: '20px' }}>
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
