export async function getServerSideProps() {
    const res = await fetch('/api/geo')
    const data = await res.json()
    return { props: { repo } }
  }
   
  export default function Page({ repo }) {
    return repo.stargazers_count
  }