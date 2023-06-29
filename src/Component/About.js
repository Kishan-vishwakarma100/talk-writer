import React from 'react';

const About = () => {
  const activities = [
    {
      id: 1,
      title: 'Writing',
      description: 'Express your thoughts and ideas through written content.'
    },
    {
      id: 2,
      title: 'Speech Recognition',
      description: 'Convert spoken words into written text effortlessly.'
    },
    {
      id: 3,
      title: 'Publishing',
      description: 'Share your creativity with the world through easy publishing.'
    }
  ];

  return (
    <div className="about-container">
      <h1>About Talk Writer</h1>
      <p>Talk Writer is a dynamic web application that allows users to write and publish their thoughts and ideas through speech recognition. With Talk Writer, you can effortlessly convert your spoken words into written text, making it easier to capture and share your creativity.</p>
      <p>Whether you're a writer, blogger, or simply someone who prefers talking over typing, Talk Writer provides a seamless and efficient way to express yourself.</p>
      
      <div className="activities">
        <h2>Activities</h2>
        {activities.map(activity => (
          <div key={activity.id} className="activity">
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
