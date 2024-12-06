import React from 'react';

interface BlogLayoutProps {
  tableOfContents: string[]; 
  children: React.ReactNode; 
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ tableOfContents, children }) => {
  return (
    <section className='grid grid-flow-col '>
      <div>
        <h1>Table of Contents</h1>
        <ul className='list-none'>
          {tableOfContents.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Main Content</h1>
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}

export default BlogLayout;
