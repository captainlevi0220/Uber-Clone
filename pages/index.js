import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import Link from 'next/link'
import { auth } from '../firebase'
import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

export default function Home() {
  //
  //
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // listener for whether user is logged in,
    // if logged in, set user to display name and photoURL
    return onAuthStateChanged(auth, (user) => {
      // user is an actual Google user
      if (user) {
        // if the user exists
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      } else {
        // if the user doesn't exist, set user to null and redirect to login page
        setUser(null)
        router.push('/login')
      }
    })
  }, [])

  // <UserImage src='https://cdn.wallpapersafari.com/95/12/uq7ToG.jpeg' />
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg'></UberLogo>
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage
              src={user && user.photoUrl}
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href='/search'>
            <ActionButton>
              <ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png' />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png' />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src='https://i.ibb.co/5RjchBg/uberschedule.png' />
            Reserve
          </ActionButton>
        </ActionButtons>

        <InputButton>Where To?</InputButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
  flex justify-between items-center
`

const UberLogo = tw.img`
  h-28
`
const Profile = tw.div` 
  flex items-center
`

const Name = tw.div` 
  mr-4 w-20
`

const UserImage = tw.img` 
  h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
`

const ActionButtons = tw.div` 
  flex 
`

const ActionButton = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImage = tw.img` 
  h-3/5 
`
const InputButton = tw.div` 
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`
