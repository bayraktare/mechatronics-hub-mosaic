
import { useEffect, useState } from 'react';
import Announcements from './Announcements';
import About from './About';
import Courses from './Courses';
import Teams from './Teams';
import Contact from './Contact';
import Projects from './Projects';
import Publications from './Publications';

interface TabContentProps {
  activeTab: string;
}

const TabContent = ({ activeTab }: TabContentProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayTab, setDisplayTab] = useState(activeTab);
  
  useEffect(() => {
    // If the active tab changes, trigger animation
    if (activeTab !== displayTab) {
      setIsAnimating(true);
      
      // After animation out completes, change the content and animate in
      const timer = setTimeout(() => {
        setDisplayTab(activeTab);
        setIsAnimating(false);
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [activeTab, displayTab]);
  
  const renderContent = () => {
    switch (displayTab) {
      case 'announcements':
        return <Announcements />;
      case 'about':
        return <About />;
      case 'courses':
        return <Courses />;
      case 'teams':
        return <Teams />;
      case 'contact':
        return <Contact />;
      case 'projects':
        return <Projects />;
      case 'publications':
        return <Publications />;
      default:
        return <About />;
    }
  };
  
  return (
    <div 
      className={`transition-opacity duration-200 ${
        isAnimating ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {renderContent()}
    </div>
  );
};

export default TabContent;
