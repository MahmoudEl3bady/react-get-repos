import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header.jsx';
import Repos from './components/Repos';
import { useState ,useEffect} from 'react';

function App() {

const [repos,setRepos]=useState(null);
const [isPending,setIsPending] = useState(true);
const [userName,setuserName] = useState(''); 


   // Input 
   const handleChange =(event)=>{
    setuserName(event.target.value);
  }



// Fetch the reposotories

    const fetchData = async ()=> {
      const respon = await fetch(`https://api.github.com/users/${userName}/repos`);
      const data = await respon.json();
      // return(data);
      setRepos(data);
    }
    useEffect(()=>{
        const getRepos = async()=>{
            const reposFromServer =await fetchData();
            setRepos(reposFromServer);
        }
        getRepos();
    },[]);


 



  return (
    <div className="App">
        <Header handleClick={fetchData} userName={userName} onChange={handleChange}/>
        <Repos repos={repos} user={userName}/>
    </div>
  );
}

export default App;
