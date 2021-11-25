import React, { useState, useEffect } from 'react';
import { getLinks } from '../../api/links';
import LinkCard from '../../components/LinkCard/LinkCard';
import Link from '../../domain/Link';
import AuthGuard from '../../guards/AuthGuard';
import './Dashboard.scss';

export default function Dashboard() {
  const [links, setLinks] = useState<Link[]>([]);

  const fetchLinks = async (): Promise<void> => {
    let payload: Array<Link> = [];

    try {
      payload = await getLinks(true);
    } catch (error) {
      payload = [];
    } finally {
      setLinks(payload);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <AuthGuard>
      <div className="dashboard">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="dashboard-links">
          {links.map((link) => (
            <LinkCard key={link._id} link={link} />
          ))}
        </div>
      </div>
    </AuthGuard>
  );
}
