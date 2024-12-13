```javascript
// pages/aboutSolution.js
import { useRouter } from 'next/router';

export default function About({ myVariable }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>My variable: {myVariable}</p>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      myVariable: process.env.MY_VARIABLE || 'Default Value',
    },
  };
}
```