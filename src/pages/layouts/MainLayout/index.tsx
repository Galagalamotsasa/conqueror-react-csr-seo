import Navigation from '@pages/Navigation';
import Authentication from '@/pages/Authentication';
import BoardMain from '@/pages/BoardMain';
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { selectUser, setUser } from "@redux/userSlice";
import { useEffect } from 'react';

export default function MainLayout() {

  const userState = useAppSelector(selectUser);

  useEffect(() => {

  }, []);

  return (
    <>
        <Navigation />
        <Authentication />
        <BoardMain />
    </>
  )
}
