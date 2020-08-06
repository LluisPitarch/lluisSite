import React from 'react';

import Card from '../components/Card';
import Timeline from '../components/Timeline.jsx';
import Education from '../components/Education';

const Cv = () => {
  return (
    <>
      <Card
        width="100%"
        title="Check my resume and feel free to contact with me"></Card>

      <Timeline
        title="Timeline"
        steps={{
          1: 'Step 1',
          2: 'Step 2',
          3: 'Step 3',
          4: 'Step 4',
          5: 'Step 5',
        }}
      />

      <Education>
        {[
          { id: 1, title: 'Business Administration Degree (UJI)' },
          { id: 2, title: 'Postgraduate in Digital Marketing (UPV)' },
          {
            id: 3,
            title: '1.165.743 Coding courses in different platforms done',
            img: 'test',
            src: 'https://platzi.com/@lluis-pitarch-ripolles/',
          },
        ]}
      </Education>
    </>
  );
};

export default Cv;
