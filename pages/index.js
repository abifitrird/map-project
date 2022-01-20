import Head from 'next/head';
import Image from 'next/image';
import MapComponent from '../components/MapComponent';
import Navbar from '../components/Navbar';
import NavList from '../components/NavList';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='bg-gray-300'>
      <Head>
        <title>Map Project</title>
        <meta name='description' content='This is a sample project' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-row'>
        <div className='bg-green-200 w-1/4 flex flex-row'>
          <Sidebar />
          <NavList />
        </div>
        <div className='bg-pink-200 w-3/4 flex flex-col'>
          <Navbar />
          <MapComponent />
        </div>
      </div>
    </div>
  );
}
