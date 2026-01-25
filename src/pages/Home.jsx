import './Home.css'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import { supabase } from '../client'
import CreatorCard from '../components/CreatorCard'

function Home(){
    const [creators, setCreators] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select(`
                    id,
                    created_at,
                    name,
                    url,
                    description,
                    imageURL
                    `)
                .order('created_at', { ascending: false})
            
                if(error) {
                    console.error(error)
                }
                else{
                    setCreators(data)
                }
        }

        fetchData()
    }, [])
       
    return(
        <div className="Home">
            <Header></Header>
            <div className="card-list">
                {creators.map(creator => (
                <CreatorCard
                    key={creator.id}
                    id={creator.id}
                    name={creator.name}
                    url={creator.url}
                    description={creator.description}
                    imageURL={creator.imageURL}

                />
                ))}
            </div>
        </div>
    )
}

export default Home