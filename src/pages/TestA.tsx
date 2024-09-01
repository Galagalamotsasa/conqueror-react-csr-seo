import Meta from '../components/Meta';

const metaData = {
  title: '메타 공통 컴포넌트 A'
}

const TestA = () => {
  return (
    <>
      <Meta data={metaData} />
      테스트 페이지 A
    </>
  );
}

export default TestA;