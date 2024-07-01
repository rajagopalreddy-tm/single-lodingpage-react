import React from 'react';

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://via.placeholder.com/150', 
    lastSeen: '1h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl: 'https://via.placeholder.com/150', 
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Lisa Alex',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://via.placeholder.com/150', 
    lastSeen: '7h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Mic Jhon',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl: 'https://via.placeholder.com/150',
    lastSeen: '2h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
];

function About() {
  return (
    <div className="container mt-5">
      <ul className="list-group">
        {people.map((person) => (
          <li key={person.email} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img className="rounded-circle me-3" src={person.imageUrl} alt={person.name} width="50" height="50" />
              <div>
                <h5 className="mb-0">{person.name}</h5>
                <p className="mb-1">{person.email}</p>
                <p className="mb-0">{person.role}</p>
              </div>
            </div>
            <div>
              {person.lastSeen ? (
                <p className="mb-0"><small>Last seen {person.lastSeen}</small></p>
              ) : (
                <p className="mb-0"><small>Online</small></p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
