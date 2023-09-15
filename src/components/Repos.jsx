import RepoDetails from "./RepoDetails";
const Repos = ({repos,user}) => {
  return (
    <div className='container'>
       { repos && repos.map((repo)=> (<RepoDetails  key={repo.id} repo={repo} user={user}/>))}
      </div>
  )
}

export default Repos;
