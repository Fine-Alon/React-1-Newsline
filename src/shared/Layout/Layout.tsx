import React from 'react';
import styles from '../Layout/layout.css'

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.layout}> 
      {children}
    </div>
  );
}
