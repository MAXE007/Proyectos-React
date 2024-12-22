import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName : 'Paco',
        name : 'Paco Hidez',
        isFollowing: true
    },
    {
        userName : 'Midu',
        name : 'midudev',
        isFollowing: true
    },
    {
        userName : 'MAx',
        name : 'Max Echegaray',
        isFollowing: true
    }
]

export function App () {    
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing}) => (           
                        <TwitterFollowCard 
                        key={userName}
                        userName={userName} initialIsFollowing={isFollowing}>{name}</TwitterFollowCard>
                ))        
            }
        </section>
    )      
}