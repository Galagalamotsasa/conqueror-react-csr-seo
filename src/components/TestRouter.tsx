// components/TestRouter.js
import { Routes, Route } from 'react-router-dom';
import TestA from '../pages/TestA';
import TestB from '../pages/TestB';

const TestRouter = () => {
  return (
    <Routes>
      <Route path="/test-A" element={<TestA />} />
      <Route path="/test-B" element={<TestB />} />
      <Route path="/" element={<TestA />} />
    </Routes>
  );
}

export default TestRouter;